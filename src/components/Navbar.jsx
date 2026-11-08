import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToTop = (e) => {
    e.preventDefault();
    setIsOpen(false);
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="nav-logo" onClick={scrollToTop}>
          <Code2 className="logo-icon" size={24} />
          <span>Dulanjan</span>
        </a>
        
        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={scrollToTop}>Home</a>
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
