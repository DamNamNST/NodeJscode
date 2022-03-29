import User from "../models/user"
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
  const { name, email, password } = req.body
  try {
    
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
    res.json({
      message: "Khong tạo đc tài khoản"
    })
  }
}
export const signin = async (req, res) => {
    const { email, password} = req.body;
    //ktra email có tồn tại chưa 
    const user = await User.findOne({email}).exec();
    if(!user){
        res.status(400).json({
            message: "User khong ton tai"
        })
    }
    if(!user.authenticate(password)){
        res.status(400).json({
            message: "Mat khau khong dung"
        })
    }
    //thêm token
    const token = jwt.sign({email}, "123456", { expiresIn: 60 * 60 });
    //console.log(token);
    res.json({
        token,
        user: {
            _id: user._id,
            email: user.email,
            name: user.name
        }
    })
}

// }
// import User from '../models/user';
// import jwt from 'jsonwebtoken';

// export const signup = async (req, res) => {
//     const { email, name, password} = req.body;
//     try {
//         // kiem tra user co ton tai khong?
//         const existUser = await User.findOne({email}).exec();
//         if(existUser){
//             res.json({
//                 message: "User da ton tai"
//             })
//         }
//         const user = await new User({email, name, password}).save();
//         res.json({
//             user: {
//                 _id: user._id,
//                 email: user.email,
//                 name: user.name
//             }
//         })
//     } catch (error) {
        
//     }
// }
