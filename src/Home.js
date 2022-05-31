import Bloglist from "./Bloglist";
import { useEffect, useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="home">
      <h2>Homepage </h2>
      {isPending && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title="All blogs"></Bloglist>}
    </div>
  );
};

export default Home;
