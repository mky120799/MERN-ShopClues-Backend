const { Product } = require('../model/Product');
const Fuse = require("fuse.js");



exports.createProduct = async (req, res) => {
  // this product we have to get from API body
  const product = new Product(req.body);
  product.discountPrice = Math.round(product.price*(1-product.discountPercentage/100))
  try {
    const doc = await product.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchAllProducts = async (req, res) => {
  try {
    let condition = {};

    // Filter deleted products if not admin
    if (!req.query.admin) {
      condition.deleted = { $ne: true };
    }

    // Category filter
    if (req.query.category) {
      condition.category = { $in: req.query.category.split(",") };
    }

    // Brand filter
    if (req.query.brand) {
      condition.brand = { $in: req.query.brand.split(",") };
    }

    // Fetch all products matching filters
    let products = await Product.find(condition).exec();
    const totalDocs = products.length;

    // Fuse.js fuzzy search
    if (req.query.q || req.query.search) {
      const searchTerm = req.query.search || req.query.q;
      const fuse = new Fuse(products, {
        keys: ["title", "description", "brand", "category"],
        threshold: 0.2, // adjust sensitivity: lower = stricter
      });
      products = fuse.search(searchTerm).map((result) => result.item);
    }

    // Sorting (JS array sort after Fuse search)
    if (req.query._sort && req.query._order) {
      const sortKey = req.query._sort;
      const order = req.query._order.toLowerCase() === "desc" ? -1 : 1;
      products.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return -1 * order;
        if (a[sortKey] > b[sortKey]) return 1 * order;
        return 0;
      });
    }

    // Pagination
    if (req.query._page && req.query._limit) {
      const pageSize = parseInt(req.query._limit);
      const page = parseInt(req.query._page);
      const startIndex = pageSize * (page - 1);
      const endIndex = startIndex + pageSize;
      products = products.slice(startIndex, endIndex);
    }

    res.set("X-Total-Count", totalDocs);
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {new:true});
    product.discountPrice = Math.round(product.price*(1-product.discountPercentage/100))
    const updatedProduct = await product.save()
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(400).json(err);
  }
};


