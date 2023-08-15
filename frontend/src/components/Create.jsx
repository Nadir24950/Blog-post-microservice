import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Nav from "./Nav";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dbUri = "http://localhost:8000/blogs";
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body };
    fetch(dbUri, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <>
      <Nav></Nav>
      <div className="create">
        <h2>Create a New BLOG</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Blog title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label>Blog Body</label>
          <textarea
            cols="30"
            rows="10"
            required
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
          <button>Add Blog</button>
        </form>
      </div>
    </>
  );
};

export default Create;
