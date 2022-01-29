import mongoose from "mongoose";
import dotenv from "dotenv";
import { userDataSet } from "./data/userDataSet.js";
import { productDataSet } from "./data/productDataSet.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(userDataSet);

    const adminUser = createdUsers[0]._id;

    const sampleProduct = productDataSet.map((p) => ({
      ...p,
      user: adminUser,
    }));

    const createdProducts = await Product.insertMany(sampleProduct);

    console.log("Data inserted");
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed");
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  destroyData();
}
