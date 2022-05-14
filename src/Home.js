import Bloglist from "./Bloglist";
import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {"title": "Welcome to my blog", "content": "this is the content of my blog " , "author": "Nadir", "id": 1},
        {"title": "First blog", "content": "This is my first blog" , "author": "Nadir", "id": 2}
    ])

    return (
        <div className="home">
            <h2>Homepage </h2>
            <Bloglist blogs={blogs}></Bloglist>
        </div>
    );
}

export default Home;