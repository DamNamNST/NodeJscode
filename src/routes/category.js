import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/category";
import { userById } from "../controllers/user";
import { checkAuth, isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";


const router = Router();

router.get("/category", list);//lấy danh sách all cate
router.post("/category/:userId", requireSignin, isAuth, isAdmin, create);//thêm mới
router.get("/category/:slug", read);//lấy danh sách sp trong 1 cate
router.patch('/category/:slug', update);
router.delete('/category/:slug', remove);

router.param("userId", userById)

export default router;