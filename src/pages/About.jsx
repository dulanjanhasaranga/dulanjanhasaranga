import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Code2 } from 'lucide-react';
import sliitLogo from '../assets/sliit-logo.webp';
import dsLogo from '../assets/ds-senanayake-logo.webp';
import wickramashilaLogo from '../assets/wickramashila-logo.png';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.12 }
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
        {/* Page Header */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          className="about-header"
        >
          <motion.div variants={itemVariants} className="badge">About Me</motion.div>
          <motion.h1 variants={itemVariants} className="page-title">My <span className="text-gradient">Journey & Background</span></motion.h1>
          <motion.p variants={itemVariants} className="page-subtitle">Passionate about bridging technical development with business analytics to create impactful solutions.</motion.p>
        </motion.div>

        {/* 1. Story & Philosophy Section */}
        <motion.div 
          className="about-overview-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Bio Card */}
          <motion.div variants={itemVariants} className="overview-card bio-card">
            <span className="card-kicker">Background</span>
            <h3 className="card-title">Who I Am</h3>
            <p className="about-paragraph">
              I'm a third-year Information Systems Engineering undergraduate building toward a career that moves from <strong>Business Analysis</strong>, through <strong>Systems Analysis</strong>, into <strong>Enterprise Architecture</strong>. My interest is in how business strategy, processes, information, applications, and technology fit together to produce systems that actually solve the problem in front of them — not just working software.
            </p>
            <p className="about-paragraph">
              I use data analysis and software development as tools to validate requirements, test assumptions, and communicate with technical teams — not as ends in themselves.
            </p>
          </motion.div>

          {/* Philosophy / 3 Questions Framework Card */}
          <motion.div variants={itemVariants} className="overview-card philosophy-card">
            <span className="card-kicker">Analytical Framework</span>
            <h3 className="card-title">How I Approach Systems</h3>
            <p className="philosophy-intro">On every project, I seek to answer three core questions in sequence:</p>
            
            <div className="philosophy-steps">
              <div className="philosophy-step">
                <span className="step-number">01</span>
                <div className="step-content">
                  <h4>Business</h4>
                  <p>What problem are we actually solving, and what tangible value does it create?</p>
                </div>
              </div>
              <div className="philosophy-step">
                <span className="step-number">02</span>
                <div className="step-content">
                  <h4>Systems</h4>
                  <p>What should the system do to support that workflow reliably and securely?</p>
                </div>
              </div>
              <div className="philosophy-step">
                <span className="step-number">03</span>
                <div className="step-content">
                  <h4>Architecture</h4>
                  <p>How does this solution fit into the wider organization and scale sustainably?</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 2. Categorized Skills Section */}
        <motion.div 
          className="about-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="section-title-wrap">
            <h3 className="section-heading"><Code2 className="heading-icon" size={22} /> Core Competencies & Expertise</h3>
          </div>

          <div className="skills-category-grid">
            <motion.div variants={itemVariants} className="skill-category-card">
              <div className="category-header">
                <div className="category-icon-wrap">
                  <Briefcase size={18} />
                </div>
                <h4>Business & Systems Analysis</h4>
              </div>
              <div className="skills-tags">
                {[
                  'Business Analysis',
                  'Systems Analysis',
                  'BRD & SRS Documentation',
                  'UML & Process Mapping',
                  'Agile / Scrum'
                ].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="skill-category-card">
              <div className="category-header">
                <div className="category-icon-wrap">
                  <Code2 size={18} />
                </div>
                <h4>Software Engineering</h4>
              </div>
              <div className="skills-tags">
                {[
                  'React.js',
                  'Java & Spring Boot',
                  'Node.js & Express',
                  'MongoDB',
                  'SQL & MySQL'
                ].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="skill-category-card">
              <div className="category-header">
                <div className="category-icon-wrap">
                  <Award size={18} />
                </div>
                <h4>Analytics & Tools</h4>
              </div>
              <div className="skills-tags">
                {[
                  'Data Analytics',
                  'Figma',
                  'Postman',
                  'Git & GitHub'
                ].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 3. Professional Experience Section */}
        <motion.div 
          className="about-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="section-title-wrap">
            <h3 className="section-heading"><Briefcase className="heading-icon" size={22} /> Professional Experience</h3>
          </div>

          <motion.div variants={itemVariants} className="education-card experience-card">
            <div className="institution-header">
              <div className="institution-logo-wrap experience-logo-wrap">
                <Award size={28} />
              </div>
              <div className="institution-info">
                <div className="card-top-row">
                  <span className="timeline-date">2025 - Present</span>
                  <span className="role-type-badge">Freelance & Academic</span>
                </div>
                <h4 className="institution-name">Independent Developer & Analyst</h4>
                <p className="education-degree">Applied Systems Development & Analytics Projects</p>
              </div>
            </div>

            <div className="institution-divider"></div>

            <ul className="timeline-details">
              <li>Developed EduScope-Connect educational platform and Hotel Reservation systems</li>
              <li>Engineered MIRRA fashion e-commerce storefront with high-performance worker architecture</li>
              <li>Executed E-Commerce Cart Abandonment business analysis on 90,000+ sessions to optimize user journeys</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* 4. Education Section */}
        <motion.div 
          className="about-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="section-title-wrap">
            <h3 className="section-heading"><GraduationCap className="heading-icon" size={22} /> Academic Background</h3>
          </div>

          <div className="education-grid">
            {/* Featured University Card */}
            <motion.div variants={itemVariants} className="education-card featured-education-card">
              <div className="institution-header">
                <div className="institution-logo-wrap featured-logo-wrap">
                  <img src={sliitLogo} alt="SLIIT Crest" className="institution-logo" />
                </div>
                <div className="institution-info">
                  <div className="card-top-row">
                    <span className="timeline-date">2022 - Present</span>
                    <span className="education-level-badge">Undergraduate Degree</span>
                  </div>
                  <h4 className="institution-name">Sri Lanka Institute of Information Technology (SLIIT)</h4>
                  <p className="education-degree">BSc (Hons) in Information Technology, Specializing in Information Systems Engineering</p>
                </div>
              </div>

              <div className="institution-divider"></div>

              <ul className="timeline-details">
                <li>Year 3, Semester 1 | Expected Graduation: 2028</li>
                <li>Specializing in Systems Analysis, Enterprise Architecture, and Database Design</li>
                <li>Focusing on translating complex business problems into structured functional requirements and scalable software</li>
              </ul>
            </motion.div>

            {/* Secondary Education Grid: A/L & O/L side-by-side */}
            <div className="secondary-education-grid">
              {/* A/L Card */}
              <motion.div variants={itemVariants} className="education-card secondary-card">
                <div className="institution-header">
                  <div className="institution-logo-wrap">
                    <img src={dsLogo} alt="D. S. Senanayake Central College Emblem" className="institution-logo" />
                  </div>
                  <div className="institution-info">
                    <div className="card-top-row">
                      <span className="timeline-date">G.C.E. A/L</span>
                      <span className="education-level-badge">Advanced Level</span>
                    </div>
                    <h4 className="institution-name">D. S. Senanayake Central College, Mirigama</h4>
                    <p className="education-degree">Secondary Education – G.C.E. Advanced Level (A/L)</p>
                  </div>
                </div>

                <div className="institution-divider"></div>

                <ul className="timeline-details">
                  <li>Completed G.C.E. Advanced Level (A/L) Examination</li>
                  <li>Active participation in school societies, academic activities, and extracurriculars</li>
                </ul>
              </motion.div>

              {/* O/L Card */}
              <motion.div variants={itemVariants} className="education-card secondary-card">
                <div className="institution-header">
                  <div className="institution-logo-wrap logo-wrap-crest">
                    <img src={wickramashilaLogo} alt="Wickramashila National School Emblem" className="institution-logo" />
                  </div>
                  <div className="institution-info">
                    <div className="card-top-row">
                      <span className="timeline-date">G.C.E. O/L</span>
                      <span className="education-level-badge">Ordinary Level</span>
                    </div>
                    <h4 className="institution-name">Wickramashila National School, Giriulla</h4>
                    <p className="education-degree">Secondary Education – G.C.E. Ordinary Level (O/L)</p>
                  </div>
                </div>

                <div className="institution-divider"></div>

                <ul className="timeline-details">
                  <li>Completed G.C.E. Ordinary Level (O/L) Examination</li>
                  <li>Active participation in school clubs, societies, and sports</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;