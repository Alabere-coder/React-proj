import { useState, useEffect } from "react"
import BlogList from "./BlogList";
import UseFetch from './UseFetch';

const Home = () => {
  const { data: blogs, isLoading, error} = UseFetch('http://localhost:8080/blogs')



    // const handleDelete = (id) => {
    //   const newBlogs = blogs.filter(blog => blog.id !== id);
    //   setBlogs(newBlogs)
    // }

    

  return (
    <div className="home">
      {/* <h1>Home Page</h1> */}
      { error && <div>{ error }</div>}
      {isLoading && <div className="pending">Loading ...</div>}
      { blogs && <BlogList blogs={blogs} title="Recent Blogs !" />}
    </div>
  );
}

export default Home