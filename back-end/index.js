import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import connectDB from "./config/database.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import productRouter from "./router/productRouter.js";
import userRouter from "./router/userRouter.js";
import uploadRouter from "./router/uploadRouter.js";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);

const io = new Server(server, { cors: { origin: "*" } });

dotenv.config();

connectDB();

app.use(cors());

app.use(express.json());

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRouter);

app.use("/api/users", userRouter);

app.use("/api/upload", uploadRouter);

app.use(notFound);

app.use(errorHandler);

io.on("connection", (socket) => {
  console.log(`A user connected with id: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log("A client has left");
  });

  socket.on("message", (data) => console.log(data));
});

const PORT = process.env.PORT || 5000;

server.listen(
  PORT,
  console.log(`Server started in ${process.env.NODE_ENV} mode on port: ${PORT}`)
);
