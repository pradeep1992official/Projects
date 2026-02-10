const express = require("express");
const { getAllTasks, createTask, updateTask, deleteTask, getTaskById} = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/getalltasks", authMiddleware, getAllTasks);
router.post("/createtask", authMiddleware, createTask);
router.put("/updatetask/:id", authMiddleware, updateTask);
router.delete("/deletetask/:id", authMiddleware, deleteTask);
router.get("/gettaskbyid/:id", authMiddleware, getTaskById);

module.exports = router;