import HeaderImage from '../../assets/header.jpeg'
import './header.css'
// import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} />
        </div>
        <h2>Alabere Coder</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ullam dolor deleniti inventore maxime atque, 
          cum iusto sed laboriosam adipisci quos.
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
        </div>
      </div>
    </header>
  )
}

export default Header