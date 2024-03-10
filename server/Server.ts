//server.js

// const express = require("express");
// const mongoose = require("mongoose");
// require("dotenv").config();

// const routes = require("./routes/ToDoRoutes");

// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("MongoDB connected..."))
//   .catch((err) => console.log(err));

// app.use("/api", routes);

// app.listen(PORT, () => console.log(`Listening at ${PORT}...`));

import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes/ToDoRoutes";
import cors from "cors";

dotenv.config();

const app: Application = express();
const PORT: number | string = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Use type assertion to address the TypeScript error
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.MongooseOptions;

mongoose
  .connect(process.env.MONGO_URL as string, mongooseOptions)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}...`));
