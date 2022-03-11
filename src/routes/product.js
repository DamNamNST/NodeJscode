const { Router } = require('express');
const { checkAuth } = require('../middlewares/checkAuth')

const router = Router();
router.get("/products", checkAuth, (req, res) => {
  const products = [{ id: 1, name: "Post A" }, { id: 2, name: "Post c" }];
  res.json(products);
})
router.post("/products", checkAuth, (req, res) => {
  const products = [{ id: 1, name: "Post A" }, { id: 2, name: "Post c" }];
  products.push(req.body);
  res.json(products);
})
module.exports = router;