// const express = require("express");
import express from 'express';
import productRouter from './routes/product';
import mongoose from 'mongoose';
import morgan from 'morgan'
import categoryRouter from './routes/category';
const app = express();
// middleware
app.use(express.json());
app.use(morgan('tiny'))
// Routing
app.use("/api", productRouter);
app.use("/api", categoryRouter);
//database
mongoose.connect('mongodb://localhost:27017/we16')
  .then(() => console.log("Connect db thanh cong"))
// Connect
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server đang chạy cổng ${PORT}`);
});
// //sử dụng framework express:
// const express = require("express");
// const productRouter = require('./routes/product')
// const app = express();
// //middleware
// app.use(express.json());//kiểm tra dữ liệu gửi lên

// const baoVe = (req, res, next) => {
//   const sinhVien = true;
//   if (sinhVien) {
//     console.log("Xin chào");
//     next();
//   }else{
//     console.log("Khong cho zo");
//   }
// }

// //routing
// app.get("/", (req, res) => {
//   res.send("<h1>Home Page</h1>");
// })
// // app.get("/api/products",checkAuth, (req, res) => {
// //   const products = [{ id: 1, name: "Post A" }, { id: 2, name: "Post c" }];
// //   res.json(products);
// // })
// // app.post("/api/products",checkAuth, (req, res) => {
// //   const products = [{ id: 1, name: "Post A" }, { id: 2, name: "Post c" }];
// //   products.push(req.body);
// //   res.json(products);
// // })
// // app.get("/vaotruong",baoVe, (req, res) => {
// //   const posts = [{ id: 1, name: "Post A" }, { id: 2, name: "Post e" }];
// //   res.json(posts);
// // })


// //code thuần:
// // const http = require('http');
// // //tạo server
// // const server = http.createServer((req, res) => { //2 tham số dạng hàm nha (object)
// //   console.log("Chạy server thành công");
// //   //hiển thị ra requests của trình duyệt : req
// //   console.log("req", req.url);
// //   //hiển thị url của trình duyệt
// //   const url = req.url;
// //   //thử gán cho url :
// //   //   if(url === '/product'){
// //   //     //console.log("Product Page");

// //   //     res.setHeader('Content-Type','text/html');
// //   //     res.write("<html>");
// //   //       res.write("<body>");
// //   //         res.write("<h1>Product Page</h1>");
// //   //       res.write("</body>");
// //   //     res.write("</html>");
// //   //     res.end();
// //   //   }else if(url === '/posts'){
// //   //     res.setHeader('Content-Type','application/json');
// //   //     const data = [{id: 1, name: "Post A"},{id: 2, name: "Post B"}];
// //   //     res.end(JSON.stringify(data));
// //   //   }
// //   //   else{
// //   //     //console.log("Home Page");
// //   //     res.setHeader('Content-Type','text/html');
// //   //     res.write("<html>");
// //   //       res.write("<body>");
// //   //         res.write("<h1>Home Page</h1>");
// //   //       res.write("</body>");
// //   //     res.write("</html>");
// //   //     res.end();
// //   //   }
// //   // });
// //   if (url === '/') {
// //     //console.log("Product Page");

// //     res.setHeader('Content-Type', 'text/html');
// //     res.write("<html>");
// //     res.write("<body>");
// //     res.write("<h1>Home Page</h1>");
// //     res.write("</body>");
// //     res.write("</html>");
// //     res.end();
// //   } else if (url === '/users') {
// //     //res.setHeader('Content-Type', 'application/json');
// //     //const data = [{ id: 1, name: "Post A" }, { id: 2, name: "Post B" }];
// //     res.setHeader('Content-Type', 'text/html');
// //     res.write("<html>");
// //     res.write("<body>");
// //     res.write("<h1>User Page</h1>");
// //     res.write("<ul><li>User1</li><li>User2</li><li>User3</li></ul>");
// //     res.write("</body>");
// //     res.write("</html>");
// //     res.end();
// //     //res.end(JSON.stringify(data));
// //   }
// //   else if (url === '/create-user') {
// //     res.setHeader('Content-Type', 'application/json');
// //     const data = [{ id: 1, name: "Post A" }, { id: 2, name: "Post B" }];
// //     res.end(JSON.stringify(data));
// //   }
// //   else {
// //     //console.log("Home Page");
// //     res.setHeader('Content-Type', 'text/html');
// //     res.write("<html>");
// //     res.write("<body>");
// //     res.write("<h1>Home Page</h1>");
// //     res.write("</body>");
// //     res.write("</html>");
// //     res.end();
// //   }
// // });

// const PORT = 3002;//tùy biến cổng

// //chạy server ở PORT
// app.listen(PORT, () => {
//   console.log(`Server running port ${PORT}!`);
// })