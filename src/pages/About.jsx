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
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="about-header">
          <motion.div variants={itemVariants} className="badge">About Me</motion.div>
          <motion.h1 variants={itemVariants} className="page-title">My <span className="text-gradient">Journey</span></motion.h1>
          <motion.p variants={itemVariants} className="page-subtitle">Passionate about bridging technical development with business analytics to create impactful solutions.</motion.p>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="about-text-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={itemVariants} className="about-paragraph">
              I'm a third-year Information Systems Engineering undergraduate building toward a career that moves from Business Analysis, through Systems Analysis, into Enterprise Architecture. My interest is in how business strategy, processes, information, applications, and technology fit together to produce systems that actually solve the problem in front of them — not just working software.
            </motion.p>
            <motion.p variants={itemVariants} className="about-paragraph">
              On every project, I try to answer three questions in order: <strong>Business</strong> — what problem are we actually solving? <strong>Systems</strong> — what should the system do to support that? <strong>Architecture</strong> — how does this fit into the wider organization?
            </motion.p>
            <motion.p variants={itemVariants} className="about-paragraph">
              I use data analysis and software development as tools to validate requirements, test assumptions, and communicate with technical teams — not as ends in themselves.
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
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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
