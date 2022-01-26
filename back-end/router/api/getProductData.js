import express from "express";
import { productDataSet } from "../../data/productDataSet.js";

const router = express.Router();

//Get all data
router.get("/", (req, res) => res.json(productDataSet));

//Get data by id
router.get("/:id", (req, res) =>
  res.json(productDataSet.find((data) => data.id === parseInt(req.params.id)))
);

export default router;
