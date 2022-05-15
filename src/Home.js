import Bloglist from "./Bloglist";
import { useEffect, useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {"title": "Welcome to my blog", "content": "this is the content of my blog " , "author": "Nadir", "id": 1},
        {"title": "First blog", "content": "This is my first blog" , "author": "Nadir", "id": 2},
        {"title": "Sabrina's blog", "content": "This is my first blog" , "author": "Sabrina", "id": 3}
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('Hi there');
    });
    return (
        <div className="home">
            <h2>Homepage </h2>
            <Bloglist blogs={blogs} title="All blogs" handleDelete={handleDelete}></Bloglist>
        </div>
    );
}

export default Home;