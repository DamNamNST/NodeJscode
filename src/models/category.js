import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  // category
  // - name: string
  // - slug: string
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

})
export default mongoose.model('Category', categorySchema);