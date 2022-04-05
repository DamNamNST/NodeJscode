import slugify from "slugify";
import Category from "../models/category";
import Product from "../models/product";

export const create = async (req, res) => { // create category
  req.body.slug = slugify(req.body.name);
  try {
    const category = await new Category(req.body).save();
    res.json(category);
  } catch (error) {
    res.status(400).json({
      message: "Thêm danh mục không thành công"
    })
  }
}
export const list = async (req, res) => { // get all categories
  try {
    const categories = await Category.find().sort({ createAt: -1 }).exec();
    res.json(categories);
  } catch (error) {
    res.status(400).json({
      message: "List danh mục không thành công"
    })
  }
}
export const read = async (req, res) => { // get all items from cate
  //lấy theo cate với populate và req.quẻry 
  try {
    const category = await Category.findOne({ slug: req.params.slug }).exec();
    const products = await Product.find({ category: category }).populate('category').select('-category').exec();
    //console.log(products);
    res.json({ category, products });
  } catch (error) {
    res.status(400).json({
      message: "List không thành công"
    })
  }
}
export const get = async (req, res) => { // get a product
  try {
    const category = await Category.findOne({ slug: req.params.slug }).exec();
    res.json(category);
  } catch (error) {
    res.status(400).json({
      message: " không thành công"
    })
  }
}
export const update = async (req, res) => { // update cat
  const condition = { slug: req.params.slug };
  const update = req.body;
  const optional = { new: true };
  try {
    const category = await Category.findOneAndUpdate(condition, update, optional).exec();
    res.json(category);
  } catch (error) {
    res.status(400).json({
      message: " không thành công"
    })
  }
}
export const remove = async (req, res) => { // delete one  
  try {
    const category = await Category.findOneAndDelete({ slug: req.params.slug }).exec();
    res.json(category);
  } catch (error) {
    res.status(400).json({
      message: " không thành công"
    })
  }
}
