import mongoose, { ObjectId } from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5
  },
  slug: {
    type: String,
    minlength: 5,
    lowercase: true
  },
  description: {
    type: String,
    required: true,
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
    type: ObjectId,

  }

  //   product
  //  - name: string
  //  - slug: string
  //  - description : string
  //  - price: number
  //  - category
  //  - shipping
  // category
  // - name: string
  // - slug: string
}, { timestamps: true });

export default mongoose.model('Product', productSchema);