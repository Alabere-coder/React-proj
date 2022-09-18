import { Link } from 'react-router-dom'

const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    // const handleDelete = props.handleDelete;

    return (
        <div className="blog-preview">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                    {/* passing functions into component */}
                    {/* <button onClick={() => handleDelete(blog.id)}>delete blog</button> */}
                </div>
            ))}
        </div>
    );
}

export default BlogList;