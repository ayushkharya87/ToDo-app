//ToDoRoutes.js

// const { Router } = require("express");
// const {
//   getToDos,
//   saveToDo,
//   updateToDo,
//   deleteToDo,
// } = require("../controller/ToDoController");

// const router = Router();

// router.get("/get", getToDos);
// router.post("/save", saveToDo);
// router.put("/update/:id", updateToDo);
// router.delete("/delete/:id", deleteToDo);

// module.exports = router;



import { Router } from "express";
import {
  getToDos,
  saveToDo,
  updateToDo,
  deleteToDo,
} from "../controller/ToDoController";

const router = Router();

router.get("/get", getToDos);
router.post("/save", saveToDo);
router.put("/update/:id", updateToDo);
router.delete("/delete/:id", deleteToDo);

export default router;
