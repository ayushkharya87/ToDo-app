//ToDoController.js

// const ToDoModel = require("../models/ToDoModel");

// module.exports.getToDos = async (req, res) => {
//   const toDos = await ToDoModel.find();
//   res.send(toDos);
// };

// module.exports.saveToDo = (req, res) => {
//   const { toDo } = req.body;

//   ToDoModel.create({ toDo })
//     .then((data) => {
//       console.log("Saved Successfully...");
//       res.status(201).send(data);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ error: err, msg: "Something went wrong!" });
//     });
// };

// module.exports.updateToDo = (req, res) => {
//   const { id } = req.params;
//   const { toDo } = req.body;

//   ToDoModel.findByIdAndUpdate(id, { toDo })
//     .then(() => {
//       res.send("Updated Successfully....");
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ error: err, msg: "Something went wrong!" });
//     });
// };

// module.exports.deleteToDo = (req, res) => {
//   const { id } = req.params;

//   ToDoModel.findByIdAndDelete(id)
//     .then(() => {
//       res.send("Deleted Successfully....");
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ error: err, msg: "Something went wrong!" });
//     });
// };



import { Request, Response } from "express";
import ToDoModel from "../models/ToDoModel";

export const getToDos = async (req: Request, res: Response) => {
  try {
    const toDos = await ToDoModel.find();
    res.send(toDos);
  } catch (err) {
    console.error("Get ToDos Error:", err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};

export const saveToDo = async (req: Request, res: Response) => {
  const { toDo } = req.body;

  try {
    const data = await ToDoModel.create({ toDo });
    console.log("Saved Successfully...");
    res.status(201).send(data);
  } catch (err) {
    console.error("Save Error:", err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};

export const updateToDo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { toDo } = req.body;

  try {
    await ToDoModel.findByIdAndUpdate(id, { toDo });
    res.send("Updated Successfully....");
  } catch (err) {
    console.error("Update Error:", err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};

export const deleteToDo = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await ToDoModel.findByIdAndDelete(id);
    res.send("Deleted Successfully....");
  } catch (err) {
    console.error("Delete Error:", err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};
