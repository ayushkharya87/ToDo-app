// ToDoModel.js

// const mongoose = require("mongoose");

// const toDoSchema = new mongoose.Schema({
//   toDo: {
//     type: String,
//     required: true,
//   },
// });

// module.exports = mongoose.model("ToDo", toDoSchema);


import { Document, model, Schema } from "mongoose";

interface IToDo extends Document {
  toDo: string;
}

const toDoSchema = new Schema<IToDo>({
  toDo: {
    type: String,
    required: true,
  },
});

export default model<IToDo>("ToDo", toDoSchema);
