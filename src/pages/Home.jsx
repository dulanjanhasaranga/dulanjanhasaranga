import { ArrowRight, Globe, User, Mail, Code, Database, Layout } from 'lucide-react';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/profile.jpg';
import './Home.css';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="page-container home-page">
      {/* Subtle Background Grid Pattern */}
      <div className="bg-grid"></div>
      
      <div className="container home-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="badge-wrapper">
            <span className="badge">
              <span className="pulse-dot"></span> Available for Work
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="hero-title">
            Hi, I'm Dulanjan. <br />
            I build <span className="text-gradient">modern web apps</span>.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-subtitle">
            Information Systems Engineering Undergraduate & Full-Stack Developer specializing in clean, user-centric digital experiences. I turn complex problems into elegant, scalable solutions.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <div className="social-links">
              <a href="https://github.com/dulanjanhasaranga" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
                <Globe size={22} />
              </a>
              <a href="https://linkedin.com/in/dulanjan-hasaranga" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                <User size={22} />
              </a>
              <a href="mailto:dulanjan.connect@gmail.com" aria-label="Email" className="social-icon">
                <Mail size={22} />
              </a>
            </div>
          </motion.div>

          {/* Mini Tech Stack */}
          <motion.div variants={itemVariants} className="tech-stack-preview">
            <p className="tech-title">Core Technologies</p>
            <div className="tech-icons">
              <span className="tech-pill"><Code size={16}/> React</span>
              <span className="tech-pill"><Database size={16}/> Node.js</span>
              <span className="tech-pill"><Layout size={16}/> JavaScript</span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="visual-circle animate-pulse-slow"></div>
          <div className="visual-circle-2"></div>
          
          <motion.div 
            className="profile-image-container"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={profilePhoto} alt="Dulanjan" className="profile-image" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
