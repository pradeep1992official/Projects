const express = require("express");
const { getAllTasks, createTask } = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/getalltasks", authMiddleware, getAllTasks);
router.post("/createtask", authMiddleware, createTask);

module.exports = router;