const Task = require("../models/Task");

//GET ALL TASKS
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ createdBy: req.user.userId }).populate(
      "assignedTo",
    );
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

//Get Task by ID
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("assignedTo");
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: "Server Error in Fetching Task by ID" });
  }
};

//CREATE A NEW TASK
const createTask = async (req, res) => {
  try {
    const { title, description, priority, assignedTo, dueDate } = req.body;

    const task = new Task({
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
    res.status(500).json({
      error: "Internal Server Error in Creating Task",
      message: error.message,
    });
  }
};

//Update task
const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: "Server Error in Updating Task" });
  }
};

//Delete Task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ error: "No task Found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: "Server Issue" });
  }
};

//Get Task Stats
const getTaskStats = async (req, res) => {
  try {
    const stats = await Task.aggregate([
      {
        $match: {
          createdBy: req.user.userId,
        },
      },
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ]);

    const result = {
      pending: 0,
      inProgress: 0,
      completed: 0,
    };

    stats.forEach((stat) => {
      result[stat._id] = stat.count;
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Server Error in Fetching Task Stats" });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
  getTaskStats,
};
