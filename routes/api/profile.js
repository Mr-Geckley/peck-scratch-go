const express = require("express");
const router = express.Router();
const mongooose = require("mongoose");
const passport = require("passport");

// Load Profile Model
const Profile = require("../../models/Profile");
// Load Auth Model
const Auth = require("../../models/Auth");

// ROUTE DESCRIPTION
// @route       GET api/profile/test
// @desc        tests profile route
// @access      public
router.get("/test", (req, res) => res.json({ msg: "profile works" }));

// ROUTE DESCRIPTION
// @route       GET api/profile
// @desc        Get current users profile
// @access      private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.nonprofile = "There is no profile for that user";
          return res.status(400).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// ROUTE DESCRIPTION
// @route       POST api/profile
// @desc        Create user profile
// @access      private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Get fields
    const profileFields = {};
    profileFields.userId = req.user.id;
    if (req.body.userName) profileFields.userName = req.body.userName;

    Profile.findOne({ userId: req.user.id }).then(profile => {
      if (profile) {
        // Update
        Profile.findByIdAndUpdate(
          { userId: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        // Create

        // Check if userName exists
        Profile.findOne({ userName: profileFields.userName }).then(profile => {
          if (profile) {
            errors.userName = "That userName already exists";
            res.status(400).json(erros);
          }

          // Save Profile
          new Profile(profileFields).save().then(profile => res.json(profile));
        });
      }
    });
  }
);
module.exports = router;
