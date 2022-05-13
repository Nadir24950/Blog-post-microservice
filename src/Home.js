import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {"title": "Welcome to my blog", "content": "this is the content of my blog " , "author": "Nadir", "id": 1},
        {"title": "First blog", "content": "This is my first blog" , "author": "Nadir", "id": 2}
    ])

    return (
        <div className="home">
            <h2>Homepage </h2>
            <div>
                {
                    blogs.map((blog) => (
                        <div className="blog-preview" key={blog.id}>
                            <h3>{blog.title}</h3>
                            <p>by {blog.author}</p>
                            <p>{blog.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Home;