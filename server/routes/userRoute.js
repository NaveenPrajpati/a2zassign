const express = require("express");
const { registerUser, loginUser, createPassword, getAllUsers} = require("../controller/userController");

const router = express.Router();



router.post("/register",registerUser);
router.post("/login",loginUser)
router.put("/forget",createPassword)
router.get("/", getAllUsers);




module.exports=router;