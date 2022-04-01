import mongoose, { ObjectId } from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    minlength: 5
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: ObjectId,
    ref: "Category"

  },
  shipping: {
    type: String,
    enum: ["yes", "no"]
  },
  color: {
    type: String,
    enum: ["Black", "Brown", "Silver", "White", "Blue"]
  },
  brand: {
    type: String,
    enum: ["Apple", "Samsung", "Lenovo", "Asus"]
  }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);