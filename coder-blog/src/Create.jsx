
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsLoading(true);

    fetch('http://localhost:8080/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      setIsLoading(false);
      // history.go(-1) this takes us to previous page
      history('/')
    })

  }

  return (
    <div className="create">
        <h1>Add a New Blog :-</h1>
        <form onSubmit={handleSubmit}>
          <label>Blog title</label>
          <input 
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog Body</label>
          <textarea 
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          >
          </textarea>
          <label>Blog Author</label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="ola">ola</option>
            <option value="karma">karma</option>
          </select>
          { !isLoading && <button>Add Blog</button>}
          { isLoading && <button disabled>Adding Blog...</button>}
          {/* <p>{title}</p>
          <p>{body}</p>
          <p>{Author}</p> */}
        </form>
        
    </div>
  )
}

export default Create