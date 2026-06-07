const express = require("express");

const {
  registerUser,
   loginUser
} = require("../controllers/authController");

const router = express.Router();
// Browser test route
// router.get("/register", (req, res) => {
//   res.send("Register API is working");
// });

router.post(
  "/register",
  registerUser
);

router.post(
  "/login",
  loginUser
);

module.exports = router;