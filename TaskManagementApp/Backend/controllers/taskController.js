const Task = require("../models/Task");

//GET ALL TASKS
const getAllTasks= async (req, res) => {
  try {
    const tasks = await Task.find({ createdBy: req.user.userID }).populate(
      "assignedTo",
    );
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

//CREATE A NEW TASK
const createTask = async (req, res) => {
  try {
    const { titel, description, priority, assignedTo, dueDate } = req.body;

    const task = new task({
      title,
      description,
      priority,
      assignedTo,
      createdBy: req.user.userId,
      dueDate,
    });

    await task.save();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllTasks,
  createTask,
}
