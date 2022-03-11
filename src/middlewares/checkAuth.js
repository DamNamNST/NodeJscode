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