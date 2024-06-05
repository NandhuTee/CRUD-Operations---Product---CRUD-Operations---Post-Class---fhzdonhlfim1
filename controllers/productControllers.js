const Product = require('../model/productModels');
const express = require('express');
const router = express.Router();

// Create a new product
router.post('/products', async (req, res) => {
  try {
    const { productName, price } = req.body;
    if (!productName || !price) {
      return res.status(400).json({ message: 'Product name and price are required' });
    }
    const newProduct = await Product.create({ productName, price });
    res.status(400).json({ message: 'Product created', product: newProduct });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

// Retrieve a product by ID
router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product data', product });
  } catch (error) {
    console.error('Error retrieving product:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

// Update a product by ID
router.patch('/products/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product updated', product: updatedProduct });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

// Delete a product by ID
router.delete('/products/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

module.exports = router;
