const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

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

module.exports = router;
