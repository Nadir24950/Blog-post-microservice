
const Bloglist = ({blogs, title, handleDelete}) => {
    return (
        <div>
            <h3>{title}</h3>
            {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h3>{blog.title}</h3>
                        <p>by {blog.author}</p>
                        <p>{blog.content}</p>
                        <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
                    </div>
                ))
            }
        </div>
    );
}

export default Bloglist;
