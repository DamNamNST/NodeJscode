import User from "../models/user"
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
  const { name, email, password } = req.body
  try {

    //ktra email có tồn tại chưa 
    const existUser = await User.findOne({ email }).exec()
    if (existUser) {
      return res.status(400).json({

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
    res.json({
      message: "Khong tạo đc tài khoản"
    })
  }
}
export const signin = async (req, res) => {
  const { email, password } = req.body;
  //ktra email có tồn tại chưa 
  const user = await User.findOne({ email }).exec();
  if (!user) {
    res.status(400).json({
      message: "User khong ton tai"
    })
  }
  if (!user.authenticate(password)) {
    res.status(400).json({
      message: "Mat khau khong dung"
    })
  }
  //thêm token
  const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: "1h" });
  //console.log(token);
  //thêm cookies cho phiên đăng nhập 
  res.cookie('token', token, { expire: new Date(Date.now() + 900000) })
  //trả về kết quả trển response
  res.json({
    token,
    user: {
      _id: user._id,
      email: user.email,
      name: user.name,
      role: user.role
    }
  })
}
export const signout = (req, res) => {
  res.clearCookie('token');
  res.json({
    message: "Đăng xuất thành công :<"
  })
}