const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// bring in auth model
const Auth = require("../../models/Auth");

// ROUTE DESCRIPTION
// @route       GET api/auth/test
// @desc        tests auth route
// @access      public
router.get("/test", (req, res) => res.json({ msg: "auth works" }));

// ROUTE DESCRIPTION
// @route   POST api/auth/register
// @desc    register user
// @access  public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Auth.findOne({ userName: req.body.userName }).then(userName => {
    if (userName) {
      errors.userName = "User name already exists";
      return res.status(400).json(errors);
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
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const userName = req.body.userName;
  const passWord = req.body.passWord;

  // Confirm/find user by userName
  Auth.findOne({ userName: userName }).then(auth => {
    // check for user
    if (!auth) {
      errors.userName = "User not found";
      return res.status(404).json(errors);
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
        errors.passWord = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// ROUTE DESCRIPTION
// @route   GET api/auth/current
// @desc    return current user
// @access  private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.userName
    });
  }
);

module.exports = router;
