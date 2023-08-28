import Bloglist from "./Bloglist";
import { useFetch } from "../api/useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    customError,
  } = useFetch("http://blog-post-microservice-blogs.default/blogs");

  useFetch();
  return (
    <div className="home">
      {customError && <div> {customError}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title="All blogs"></Bloglist>}
    </div>
  );
};

export default Home;
