import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#home" className="nav-logo" onClick={() => setIsOpen(false)}>
          <Code2 className="logo-icon" size={24} />
          <span>Dulanjan</span>
        </a>
        
        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>

        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
