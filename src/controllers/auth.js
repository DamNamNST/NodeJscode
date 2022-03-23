import User from "../models/user"

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body
    //ktra email có tồn tại chưa 
    const existUser = await User.findOne({ email }).exec()
    if (existUser) {
      res.json({
        message: "Email đã tồn tại, vui lòng thử lại :(("
      })
    }
    const user = await new User({ name, email, password }).save()//lưu vào 1 user mới
    res.json({//log ra thoi
      user: {
        _id: user._id,
        name: user.name,
        email: user.email
      }
    })
  } catch (error) {
    res.json(400).json({
      message: "Khong tạo đc tài khoản"
    })
  }
}
export const signin = async (req, res) => {

}