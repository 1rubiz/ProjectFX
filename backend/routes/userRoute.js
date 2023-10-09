const express = require('express')
const protect = require('../middlewares/authMiddleware')
const {registerUser, loginUser, logoutUser, changePassword, getUser} = require('../controllers/userController')

const router = express.Router()

router.post("/register",registerUser)
router.post("/login",loginUser)
router.get('/logout', logoutUser)
router.get("/profile", protect,getUser)
router.patch('/changepassword',protect,changePassword )

module.exports =router



