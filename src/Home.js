import Bloglist from "./Bloglist";
import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    customError,
  } = useFetch("http://localhost:8000/blogs");

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
