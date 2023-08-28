import { useNavigate, useParams } from "react-router";
import { useFetch } from "../api/useFetch";
import Nav from "./Nav";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://blog-post-microservice-blogs.default/blogs/" + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://blog-post-microservice-blogs.default/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <Nav></Nav>
      <div className="blog-details content">
        {isPending && <div>Loading ...</div>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            {/* <p>Written by {blog.author}</p> */}
            <div>{blog.body}</div>
            <button onClick={handleClick}>Delete</button>
          </article>
        )}
      </div>
    </>
  );
};

export default BlogDetails;
