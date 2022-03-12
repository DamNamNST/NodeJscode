//fake data
const products = [{id: 1,name: "Product A",},{id: 2,name: "Product B",},];


export const list = (req, res) => {//get all items
  res.json(products);
}

export const get = (req, res) => { // get a product
  const result = products.find(item => item.id === +req.params.id);
  res.json(result);
}