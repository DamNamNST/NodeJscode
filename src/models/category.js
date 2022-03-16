import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  // category
  // - name: string
  // - slug: string
  name: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    lowercase: true,
    unique: true,
    index: true
  },

}, { timestamps: true });
export default mongoose.model('Category', categorySchema);