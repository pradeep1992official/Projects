const express = require("express");
const {getUsers, getUserById, updateUser, deleteUser,} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/getallusers",authMiddleware, getUsers);
router.get("/getuser/:id",authMiddleware, getUserById);
router.put("/updateuser/:id",authMiddleware, updateUser);
router.delete("/deleteuser/:id",authMiddleware, deleteUser);

module.exports = router;