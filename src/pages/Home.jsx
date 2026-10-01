import { Link } from 'react-router-dom';
import { ArrowRight, Globe, User, Mail } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="page-container home-page">
      <div className="container home-container">
        <div className="hero-content">
          <div className="badge">Available for Work</div>
          <h1 className="hero-title">
            Hi, I'm Dulanjan. <br />
            I build <span className="text-gradient">modern web apps</span>.
          </h1>
          <p className="hero-subtitle">
            Information Systems Engineering Undergraduate & Full-Stack Developer specializing in clean, user-centric digital experiences.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </Link>
            <div className="social-links">
              <a href="https://github.com/dulanjanhasaranga" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Globe size={24} />
              </a>
              <a href="https://linkedin.com/in/dulanjan-hasaranga" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <User size={24} />
              </a>
              <a href="mailto:contact@example.com" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="visual-circle animate-pulse"></div>
          <div className="visual-card">
            <span className="mono text-muted">{'<'}</span>
            <span className="mono">Developer</span>
            <span className="mono text-muted">{' />'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
