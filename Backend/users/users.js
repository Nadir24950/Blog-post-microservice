const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const token = false;
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/myapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("User", {
  username: String,
  password: String,
});

app.post("/api/create_user", async (req, res) => {
  try {
    const { username, password } = req.body;
    const exisitngUser = await User.findOne({ username });
    if (exisitngUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    const user = new User({ username, password });
    await user.save();
    res.json({
      message: "User created Succusfuly",
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});
app.get("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      if (
        password ==
        User.findOne({
          username: req.params.username,
          password: req.params.password,
        })
      ) {
        token = true;
        return res.send("200");
      }
    }
  } catch (error) {}
});

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
