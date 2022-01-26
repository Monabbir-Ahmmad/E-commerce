import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router/api/getProductData.js";
import connectDB from "./config/db.js";

const app = express();

dotenv.config();

connectDB();

app.use(cors());

app.use("/api/products", router);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server started in ${process.env.NODE_ENV} mode on port: ${PORT}`)
);
