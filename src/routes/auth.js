import { Router } from "express";
import { signin, signup } from "../controllers/auth";

const router = Router()


router.post("/signin", signin);//đăng nhập
router.post("/signup", signup);//đăng kí


export default router;