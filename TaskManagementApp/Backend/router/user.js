const express = require("express");
const {getUsers, getUserById, updateUser, deleteUser,} = require("../controllers/userController.js");
const authMiddleware = require("../middleware/authMiddleware.js");

const router = express.Router();

router.get("/getallusers",authMiddleware, getUsers);
router.get("/getuser/:id",authMiddleware, getUserById);
router.put("/updateuser/:id",authMiddleware, updateUser);
router.delete("/deleteuser/:id",authMiddleware, deleteUser);

module.exports = router;