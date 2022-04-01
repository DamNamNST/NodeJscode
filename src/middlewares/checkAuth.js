import expressJWT from 'express-jwt';

exports.checkAuth = (req, res, next) => {
  const isAdmin = true;
  if (isAdmin) {
    //console.log("Xin chào");
    next();
  } else {
    //console.log("Khong cho zo");
    res.redirect('/');
  }
}

export const requireSignin = expressJWT({
  //mã bảo mật 
  secret: "123456",
  //thuật toán để decode token
  algorithms: ["HS256"],
  //gán thông tin decode vào auth
  requestProperty: "auth"
});

export const isAuth = (req, res, next) => {
  //console.log("auth: ", req.auth)
  //console.log("profile: ",req.profile);
  //kiểm tra điều kiện trả về true/false
  const status = req.profile._id == req.auth._id;
  if (!status) {
    return res.status(402).json({
      message: "Access Denined-Ban khong co quyen truy cap"
    })
  }
  next();
}
export const isAdmin = (req, res, next) => {
  //kiểm tra role ==0 là member 
  if (req.profile.role == 0) {
    return res.status(401).json({
      message: "Bạn không phải là admin"
    })
  }
  next();
}