// import mongoose from "mongoose";
// const Product = mongoose.model('Product', { name: String });

//fake data
//const products = [{ id: 1, name: "Product A", }, { id: 2, name: "Product B", },];

import Product from "../models/product";
import slugify from "slugify";


export const list = async (req, res) => {//get all items
  //
  try {
    const products = await Product.find().exec();
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: " không thành công"
    })
  }
}

export const get = async (req, res) => { // get a product
  try {
    const products = await Product.findOne({ _id: res.params.id }).exec();
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: " không thành công"
    })
  }
  //const result = products.find(item => item.id === +req.params.id);
  //res.json(result);
}
export const create = async (req, res) => { // create product
  req.body.slug = slugify(req.body.name);
  try {
    const product = await new Product(req.body).save();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      message: "Thêm sản phẩm không thành công"
    })
  }
}
export const remove = async (req, res) => { // delete product
  //console.log('11')
  try {
    const products = await Product.findOneAndDelete({ _id: req.params.id }).exec();
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: " không thành công"
    })
  }
  // const newProducts = products.filter(item => item.id !== +req.params.id);
  // res.json(newProducts);
}
export const update = async (req, res) => { // update product
  const condition = { _id: req.params.id };
  const update = req.body;
  const optional = { new: true };

  try {
    const products = await Product.findOneAndUpdate(condition, update, optional).exec();
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: " không thành công"
    })
  }
  // const newProducts = products.map(item => item.id === +req.params.id ? req.body : item)
  // res.json(newProducts);
}