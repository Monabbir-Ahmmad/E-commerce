import express from "express";
import multer from "multer";
import path from "path";

const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, callback) => {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadImages = multer({
  storage: storage,
}).array("image");

uploadRouter.post("/", (req, res) => {
  uploadImages(req, res, (err) => {
    if (err) {
      res.send(err);
    } else {
      console.log(req.files);
      res.json({ result: "OK" });
    }
  });
});

export default uploadRouter;
