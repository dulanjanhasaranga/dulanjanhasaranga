import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">Dulanjan</h3>
            <p className="footer-tagline">Building digital experiences with purpose and precision.</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <nav>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          
          <div className="footer-socials">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://github.com/dulanjanhasaranga" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/dulanjan-hasaranga" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Dulanjan Hasaranga. All rights reserved.</p>
          <a href="#home" className="scroll-top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
