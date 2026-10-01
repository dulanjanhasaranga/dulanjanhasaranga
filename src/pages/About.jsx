import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Code2 } from 'lucide-react';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <motion.div 
      className="page-container about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="about-header">
          <motion.div variants={itemVariants} className="badge">About Me</motion.div>
          <motion.h1 variants={itemVariants} className="page-title">My <span className="text-gradient">Journey</span></motion.h1>
          <motion.p variants={itemVariants} className="page-subtitle">Passionate about bridging technical development with business analytics to create impactful solutions.</motion.p>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="about-text-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="about-paragraph">
              I am an Information Systems Engineering undergraduate at SLIIT with a deep passion for building data-driven applications and comprehensive full-stack solutions. 
            </motion.p>
            <motion.p variants={itemVariants} className="about-paragraph">
              My journey started with a fascination for how data shapes digital experiences. Recently, I've been focused on analyzing large datasets—like my deep-dive into E-commerce Cart Abandonment—and translating those insights into functional, scalable web platforms.
            </motion.p>

            <motion.div variants={itemVariants} className="skills-container">
              <h3 className="section-heading"><Code2 className="heading-icon" size={20} /> Expertise</h3>
              <div className="skills-tags">
                {['JavaScript (ES6+)', 'React.js', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Data Analytics', 'Business Analysis'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="about-timeline"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="section-heading"><GraduationCap className="heading-icon" size={20} /> Education</h3>
            
            <motion.div variants={itemVariants} className="timeline-card">
              <div className="timeline-icon">
                <GraduationCap size={20} />
              </div>
              <div className="timeline-content">
                <span className="timeline-date">Current</span>
                <h4>Sri Lanka Institute of Information Technology (SLIIT)</h4>
                <p>BSc (Hons) in Information Systems Engineering</p>
                <ul className="timeline-details">
                  <li>Specializing in full-stack web architectures</li>
                  <li>Focused on data analytics and system design</li>
                </ul>
              </div>
            </motion.div>

            <h3 className="section-heading" style={{ marginTop: '3rem' }}><Briefcase className="heading-icon" size={20} /> Experience</h3>
            
            <motion.div variants={itemVariants} className="timeline-card">
              <div className="timeline-icon">
                <Award size={20} />
              </div>
              <div className="timeline-content">
                <span className="timeline-date">2023 - Present</span>
                <h4>Independent Developer & Analyst</h4>
                <p>Freelance & Academic Projects</p>
                <ul className="timeline-details">
                  <li>Developed EduScope-Connect platform</li>
                  <li>Engineered comprehensive Hotel Reservation Systems</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
