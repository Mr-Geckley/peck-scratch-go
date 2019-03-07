const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// bring in auth model
const Auth = require("../../models/Auth");

// ROUTE DESCRIPTION
// @route       GET api/auth/test
// @desc        tests auth route
// @access      public
router.get("/test", (req, res) => res.json({ msg: "auth works" }));

// ROUTE DESCRIPTION
// @route   GET api/auth/register
// @desc    register user
// @access  public
router.post("/register", (req, res) => {
  Auth.findOne({ userName: req.body.userName }).then(userName => {
    if (userName) {
      return res.status(400).json({ userName: "Username already exists" });
    } else {
      const newPlayer = new Auth({
        userName: req.body.userName,
        passWord: req.body.passWord
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newPlayer.passWord, salt, (err, hash) => {
          if (err) throw err;
          newPlayer.passWord = hash;
          newPlayer
            .save()
            .then(auth => res.json(auth))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// ROUTE DESCRIPTION
// @route   GET api/auth/login
// @desc    login the user, but really just returns the token(jwt)
// @access  public
router.post("/login", (req, res) => {
  const userName = req.body.userName;
  const passWord = req.body.passWord;

  // Confirm/find user by userName
  Auth.findOne({ userName: userName }).then(auth => {
    // check for user
    if (!auth) {
      return res.status(404).json({ userName: "Username not found" });
    }

    // check passWord
    bcrypt.compare(passWord, auth.passWord).then(isMatch => {
      if (isMatch) {
        // res.json({ msg: "success" });
        // Auth succeeded

        const payload = { id: auth.id, userName: auth.userName }; // Create jwt payload

        // sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res.status(400).json({ passWord: "Password incorrect" });
      }
    });
  });
});

module.exports = router;
