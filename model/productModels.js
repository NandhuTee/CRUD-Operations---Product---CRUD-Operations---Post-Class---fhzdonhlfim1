const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
   productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
});

// Create and export the Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
