import expressJWT from 'express-jwt';

exports.checkAuth = (req, res, next) => {
  const isAdmin = true;
  if (isAdmin) {
    //console.log("Xin chào");
    next();
  }else{
    //console.log("Khong cho zo");
    res.redirect('/');
  }
}

export const requireSignin = expressJWT({
  secret: "123456",
  algorithms:["HS256"],
  requestProperty: "auth"
});

export const isAuth = (req, res, next) => {
  console.log(req.auth)
}