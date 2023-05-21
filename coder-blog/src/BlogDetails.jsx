import React from 'react'
import { useParams } from 'react-router-dom'
import UseFetch from './UseFetch';
import { useNavigate } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isLoading } = UseFetch('http://localhost:8080/blogs/' + id)
    const navigate = useNavigate();

    const handleClick = () => {
      fetch('http://localhost:8080/blogs/'+ blog.id, {
        method: 'DELETE'
      }).then(() => {
        navigate('/')
      })
    }

  return (
    <div className="blog-details">
        { isLoading && <div>Loading...</div>}
        { error && <div>{ error }</div> }
        { blog && (
            <article>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                <div>{ blog.body }</div>
                <button onClick={handleClick}>Delete</button>
            </article>
        )}
    </div>
  )
}

export default BlogDetails