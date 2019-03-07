const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-Parser");

const auth = require("./routes/api/auth");
const profile = require("./routes/api/profile");

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

app.get("/", (req, res) => res.send("Helloooo nurse!"));

// Use routes
app.use("/api/auth", auth);
app.use("/api/profile", profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
