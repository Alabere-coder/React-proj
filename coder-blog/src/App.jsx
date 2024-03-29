
import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import { Routes, Route } from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
      <Routes>
          <Route exact path="/" element={ <Home/>}/>
          <Route exact path="/create" element={ <Create/>}/>
          <Route exact path="/blogs/:id" element={ <BlogDetails /> }/>
          <Route exact path="*" element={ <NotFound/>}/>
      </Routes>
      </div>
    </div>
      
    
    
  )
}

export default App
