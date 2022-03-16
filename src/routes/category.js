import { Router } from "express";
import { create, list, read } from "../controllers/category";
import { checkAuth } from "../middlewares/checkAuth";


const router = Router();

router.get("/categories", checkAuth, list);//lấy danh sách all cate
router.post("/category", checkAuth, create);//thêm mới
router.get("/category/:slug", checkAuth, read);//lấy danh sách sp trong 1 cate

export default router;