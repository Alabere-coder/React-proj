// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    // const [blogs, setBlogs] = useState(null);
    // const [ispending, setIsPending] = useState(true);
    // const [error, setError] = useState(null)

    // useEffect Hooks
    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch()
    //             .then(res => {
    //                 if (!res.ok) {
    //                     throw Error('could not fetch the data for that search');
    //                 }
    //                 return res.json();
    //             })
    //             .then((data) => {
    //                 setBlogs(data);
    //                 setIsPending(false);
    //                 setError(null);
    //             })
    //             .catch(err => {
    //                 setIsPending(false);
    //                 setError(err.massage);
    //             })
    //     }, 1000);
    //     // console.log(blogs);
    // }, []);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <br />
            {/* passing props to a component */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/* re-using the component */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'fat')} title="fat's blogs" /> */}
        </div>
    );
}

export default Home;