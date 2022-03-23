import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuidv4";
import { createHmac } from "crypto";
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlenght: 30
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  salt: {
    type: String,
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true })
userSchema.methods = {
  encryptPassword(password) {
    if (!password) {
      return;
    }
    try {
      return createHmac('sha256', this.salt).update(password).diest('hex');
    } catch (error) {
      console.log(error);
    }
  }
}
userSchema.pre("save", async function save(next) {
  try {
    this.salt = uuidv4();
    console.log(this.password);
    this.password = this.encryptPassword(this.password)
    return next()
  } catch (error) {
    return next(error)
  }
})

export default mongoose.model("User", userSchema)