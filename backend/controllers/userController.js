const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

// Generate token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })
  }
// @desc    Register a new user
// @route   /api/users
// @access  Public

const registerUser =asyncHandler(async(req,res)=>{
    console.log("received user");
    const {fullname,email,password,phone, nationality}= req.body
   // Validation
   if (!fullname || !email || !password || !phone || !nationality) {
     res.send('Please include all fields').status(400)
   }
      // Find if user already exists
      const userExists = await User.findOne({ email })
   
      if (userExists) {
        res.send('User already exists').status(400)
      }

      const numberExists = await User.findOne({phone})
      if (numberExists) {
        res.send('Phone already exists').status(400)
      }
      // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
     
     // Create user
     const user = await User.create({
        fullname,
        phone,
        email,
        nationality,
        password: hashedPassword
      })
      // generate token
const token = generateToken(user._id)
// send HTTP only cookie
res.cookie("token",token,{
  path:'/',
  httpOnly:true,
  expires: new Date(Date.now() + 1000 * 86400),
  sameSite: "none",
  secure: true
})
      if (user) {
        res.status(201).json({
          _id: user._id,
          name:user.fullname,
          email: user.email,
          phone:user.phone,
          nationality: user.nationality,
          token
        })
      } else {
        res.status(400).send('Invalid user data')
      }
 })



 // @desc    Login a user
// @route   /api/users/login
// @access  Public

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
      const user = await User.findOne({ email })
  
    // Check user and passwords match
    if (user && (await bcrypt.compare(password, user.password))) {
      res.cookie('token', generateToken(user._id), {
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // Cookie expiration time (30 days)
        // httpOnly: true, // Cookie is only accessible through HTTP(S)
        // secure: true, // Cookie is only sent over HTTPS
      });
      res.status(200).json({
        _id: user._id,
        name: user.fullname,
        email: user.email,
      })
    } else {
      res.status(401).send('User name or password is incorrect')
    }
  })


  const logoutUser = asyncHandler(async(req,res)=>{
    res.cookie("token", "", {
      path: "/",
      httpOnly: true,
      expires: new Date(0),
      sameSite: "none",
      secure: true,
    });
    return res.status(200).json({ message: "Successfully Logged Out" });
  })


  const changePassword = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    const { oldPassword, password } = req.body;
  
    // Check if user exists
    if (!user) {
      res.status(400).send("User not found, please sign up");
    }
  
    // Validate password
    if (!oldPassword || !password) {
      res.status(400).send("Please provide both the old password and new password");
    }
  
    // Check if the old password matches the password in the database
    const passwordIsCorrect = await bcrypt.compare(oldPassword, user.password);
  
    if (passwordIsCorrect) {
      // Hash the new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Save the new password
      user.password = hashedPassword;
      await user.save();
  
      res.status(200).send("Password changed successfully");
    } else {
      res.status(400);
      throw new Error("Old password is incorrect");
    }
  });
  

 const getUser = asyncHandler(async(req,res)=>{
  const user = await User.findById(req.user._id)
  if(user){
    const { _id, fullname, email, phone, } = user;
    res.status(200).json({
      _id,
      fullname,
      email,
      phone,
      
    });
  }else{
    res.status(400);
    throw new Error("User not Found");
  }
  
})


module.exports ={
    registerUser,
    loginUser,
    logoutUser,
    changePassword,
    getUser
}
