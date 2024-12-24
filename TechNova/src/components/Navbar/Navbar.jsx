import { Link } from 'react-router-dom';
import StyledNavbar from './Navbar.Styled';
import { IoMenu, IoClose } from 'react-icons/io5';
import { useState } from 'react';

const Navbar = () => {
  // state untuk open dan close menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <StyledNavbar $isMenuOpen={isMenuOpen}>
      <div className='navbar-header'>
        <h1 className='navbar-brand'>TechNova</h1>
        {/* ternary button open dan close menu */}
        <button className='toggle-menu' onClick={toggleMenu}>
          {isMenuOpen ? <IoClose className='icons'/> : <IoMenu className='icons' />}
        </button>
      </div>
      <nav>
        <ul className={isMenuOpen ? 'open' : ''}>
          <li><Link to='/' onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to='/' onClick={() => setIsMenuOpen(false)}>Services</Link></li>
          <li><Link to='/' onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
        </ul>
      </nav>
    </StyledNavbar>
  )
}

export default Navbar;