// const express = require("express");
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan'
import cors from 'cors';

//router
import productRouter from './routes/product';
import categoryRouter from './routes/category';
import authRouter from './routes/auth';

//khởi tạo
const app = express();

// middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

// Routings
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter);

//database
mongoose.connect('mongodb://localhost:27017/we16')
  .then(() => console.log("Connect db thanh cong"))

// Connect
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server đang chạy cổng ${PORT}`);
});
