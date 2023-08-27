const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const uri = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const blogSchema = new mongoose.Schema({
  title: String,
  body: String,
});

const Blog = mongoose.model("Blog", blogSchema);

app.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

app.post("/blogs", async (req, res) => {
  try {
    const { title, body } = req.body;
    const newBlog = new Blog({ title, body });
    await newBlog.save();
    res.json(newBlog);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

app.get("/blogs/:id", async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const blog = await Blog.findById(req.params.id);
      res.json(blog);
    } else {
      console.log("Id is not valid");
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

app.delete("/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json({ message: "Blog deleted" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
