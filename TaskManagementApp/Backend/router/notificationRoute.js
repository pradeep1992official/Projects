const express = require("express");
const router = express.Router();
const {
  getNotifications,
  markAsRead,
} = require("../controllers/notificationController.js");
const authMiddleware = require("../middleware/authMiddleware.js");

router.get("/getnotifications", authMiddleware, getNotifications);
router.put("/markasread/:id", authMiddleware, markAsRead);

module.exports = router;
