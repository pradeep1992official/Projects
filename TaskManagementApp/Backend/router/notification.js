const express = require('express');
const router = express.Router();
const { getNotifications, markAsRead } = require('../controllers/notificationController');
const authMiddleware = require('../middleware/authMiddleware');

router.get("/getnotifications", authMiddleware, getNotifications);
router.put("/markasread/:id", authMiddleware, markAsRead);

module.exports = router;