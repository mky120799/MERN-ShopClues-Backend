const { Product } = require('../model/Product');

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

    if (!req.query.admin) {
      condition.deleted = { $ne: true };
    }

    // Search functionality
    if (req.query.q && !req.query.search) {
      req.query.search = req.query.q;
    }

    if (req.query.search) {
      const searchRegex = new RegExp(req.query.search, "i");
      condition.$or = [
        { title: searchRegex },
        { description: searchRegex },
        { brand: searchRegex },
      ];
    }

    if (req.query.category) {
      condition.category = { $in: req.query.category.split(",") };
    }

    if (req.query.brand) {
      condition.brand = { $in: req.query.brand.split(",") };
    }

    // Base queries
    let query = Product.find(condition);
    let totalProductsQuery = Product.find(condition);

    // Sorting
    if (req.query._sort && req.query._order) {
      query = query.sort({ [req.query._sort]: req.query._order });
    }

    // Pagination
    if (req.query._page && req.query._limit) {
      const pageSize = parseInt(req.query._limit);
      const page = parseInt(req.query._page);
      query = query.skip(pageSize * (page - 1)).limit(pageSize);
    }

    const totalDocs = await totalProductsQuery.countDocuments().exec();
    const docs = await query.exec();

    res.set("X-Total-Count", totalDocs);
    res.status(200).json(docs);
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


