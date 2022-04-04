import User from '../models/user';
export const userById = async (req, res, next, id) => {
  try {
    //tìm user theo id 
    const user = await User.findById(id).exec();
    if (!user) {
      res.status(400).json({
        message: "Không tìm thấy user"
      })
    }
    req.profile = user;
    //pảo mật thông tin thì nên set pass và salt là undefined
    req.profile.password = undefined;
    req.profile.salt = undefined;
    next();
  } catch (error) {
    console.log(error);
  }
}