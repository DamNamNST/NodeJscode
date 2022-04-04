import { Router } from "express";
import { signin, signout, signup } from "../controllers/auth";




const router = Router()


router.post("/signin", signin);//đăng nhập
router.post("/signup", signup);//đăng kí
router.get("/signout", signout);//đăng kí

export default router;