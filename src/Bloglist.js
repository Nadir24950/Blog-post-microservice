
const Bloglist = (props) => {
    const blogs = props.blogs; 
    return (  
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
    );
}
 
export default Bloglist;
