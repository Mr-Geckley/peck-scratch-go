const express = require("express");
const router = express.Router();

// ROUTE DESCRIPTION
// @route       GET api/auth/test
// @desc        tests auth route
// @access      public
router.get("/test", (req, res) => res.json({ msg: "auth works" }));

module.exports = router;
