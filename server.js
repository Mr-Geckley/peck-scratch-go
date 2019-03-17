const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-Parser");
const passport = require("passport");

const auth = require("./routes/api/auth");

const app = express();

// body-parser mid'ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// connnect to mongodb
mongoose
  .connect(db)
  .then(() => console.log("mongodb connected"))
  .catch(err => console.log(err));

// depricated connection test
// app.get("/", (req, res) => res.send("Helloooo nurse!"));

// passport mid'ware
app.use(passport.initialize());

// passport config
require("./config/passport")(passport);

// Use routes
app.use("/api/auth", auth);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
