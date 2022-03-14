const { Router } = require('express');
const { list, get, create, remove, update } = require('../controllers/product');
const { checkAuth } = require('../middlewares/checkAuth')


const router = Router();



router.get("/products", checkAuth, list);
router.get("/product/:id", get);
router.post('/products', checkAuth, create);
router.delete("/product/:id", remove);
router.put("/product/:id", update)

module.exports = router;
// router.get("/products", checkAuth, list)
// router.get("/product/:id", get);
// router.post("/products", checkAuth, (req, res) => {// create product
//   products.push(req.body);
//   res.json(products);
// })
// router.delete("/product/:id", (req, res) => { // delete product
//     const newProducts = products.filter(item => item.id !== +req.params.id);
//     res.json(newProducts);
// });
// router.put("/product/:id", (req, res) => { // update product
//     const newProducts = products.map(item => item.id === +req.params.id ? req.body : item)
//     res.json(newProducts);
// })

// router.get("/products", checkAuth, (req, res) => { // get all
//   res.json(products);
// });
// router.get("/product/:id", (req, res) => { // get a product
//     const result = products.find(item => item.id === +req.params.id);
//     res.json(result);
// });
// router.post('/products', checkAuth, (req, res) => { // create product
//     products.push(req.body);
//     res.json(products);
// });
// router.delete("/product/:id", (req, res) => { // delete product
//     const newProducts = products.filter(item => item.id !== +req.params.id);
//     res.json(newProducts);
// });
// router.put("/product/:id", (req, res) => { // update product
//     const newProducts = products.map(item => item.id === +req.params.id ? req.body : item)
//     res.json(newProducts);
// })
