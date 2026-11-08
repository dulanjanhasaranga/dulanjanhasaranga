import { motion } from 'framer-motion';
import { Lock, Code2, ExternalLink, Mail, CheckCircle2 } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    id: 'eduscope',
    title: 'EduScope-Connect',
    role: 'Full-Stack Developer',
    description: 'A full-stack educational platform bridging the gap between students and quality learning resources with role-based access and course coordination.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/dulanjanhasaranga/EduScope-Connect',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
    isPrivate: false
  },
  {
    id: 'prime-medical',
    title: 'Prime Medical - Healthcare Management System',
    role: 'Full-Stack Academic Project',
    description: 'Analyzed, modeled, and supported a comprehensive healthcare management system covering appointments, consultations, prescriptions, inventory, and automated billing with multiple user roles.',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'React'],
    github: 'https://github.com/dulanjanhasaranga/Prime-Medical',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    isPrivate: true,
    highlights: [
      'Role-based access & JWT security',
      'Consultation & prescription workflows',
      'Inventory & billing automation'
    ]
  },
  {
    id: 'lanka-insurance',
    title: 'Lanka Health Insurance System',
    role: 'Business & Systems Analyst',
    description: 'Gathered and documented stakeholder requirements, use cases, and business workflows for policy and claims management using Agile/Scrum methodologies.',
    tags: ['Business Analysis', 'Systems Analysis', 'UML', 'Agile / Scrum', 'Process Modeling'],
    github: 'https://github.com/dulanjanhasaranga/Lanka-Health-Insurance',
    isPrivate: true,
    isWorkflow: true,
    highlights: [
      'Stakeholder elicitation & BRD/SRS documentation',
      'AS-IS / TO-BE policy & claims workflows',
      'Agile/Scrum sprint planning & backlog management'
    ]
  },
  {
    id: 'hotel',
    title: 'Ceylon Haven - Hotel Reservation System',
    role: 'Full-Stack & Database Modeler',
    description: 'Comprehensive hotel management platform automating room availability, reservation workflows, guest booking schedules, and administrative reporting.',
    tags: ['JavaScript', 'MySQL', 'Full-Stack Architecture', 'UML'],
    github: 'https://github.com/dulanjanhasaranga/Hotel-Reservation-System',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    isPrivate: false
  },
  {
    id: 'cart',
    title: 'Cart Abandonment Analysis',
    role: 'Business & Data Analyst',
    description: 'Deep-dive business analytics project on 90,400+ visitor sessions to uncover checkout friction points, identify drop-offs, and recommend optimization strategies.',
    tags: ['Data Analytics', 'Business Analysis', 'Excel / SQL', 'Process Mapping'],
    github: 'https://github.com/dulanjanhasaranga/Cart-Abandonment-Project',
    isDataViz: true,
    isPrivate: false
  }
];

const Projects = () => {
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
      className="page-container projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div className="page-header">
          <div className="badge">Portfolio</div>
          <h1 className="page-title">Featured <span className="text-gradient">Projects</span></h1>
          <p className="page-subtitle">A selection of my work across business analysis, systems architecture, full-stack engineering, and data analytics.</p>
        </div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project) => (
            <motion.div 
              key={project.id} 
              className="project-card" 
              variants={itemVariants}
            >
              {project.isDataViz ? (
                <div className="project-data-header">
                  <div className="data-bars">
                    <div className="data-bar" style={{ height: '100%' }}></div>
                    <div className="data-bar" style={{ height: '50%' }}></div>
                    <div className="data-bar" style={{ height: '15%' }}></div>
                    <div className="data-bar" style={{ height: '5%' }}></div>
                  </div>
                  <span className="mono text-muted" style={{ fontSize: '0.8rem', marginTop: '1rem', zIndex: 2 }}>Funnel Drop-off Analysis (90k+ sessions)</span>
                </div>
              ) : project.isWorkflow ? (
                <div className="project-workflow-header">
                  <div className="workflow-track">
                    <div className="workflow-node">
                      <div className="workflow-dot">01</div>
                      <span className="workflow-label">Elicit</span>
                    </div>
                    <div className="workflow-line"></div>
                    <div className="workflow-node">
                      <div className="workflow-dot">02</div>
                      <span className="workflow-label">UML / SRS</span>
                    </div>
                    <div className="workflow-line"></div>
                    <div className="workflow-node">
                      <div className="workflow-dot">03</div>
                      <span className="workflow-label">Sprints</span>
                    </div>
                    <div className="workflow-line"></div>
                    <div className="workflow-node">
                      <div className="workflow-dot">04</div>
                      <span className="workflow-label">Validate</span>
                    </div>
                  </div>
                  <span className="mono text-muted" style={{ fontSize: '0.8rem', marginTop: '1rem', zIndex: 2 }}>Agile Claims & Policy Lifecycle</span>
                </div>
              ) : (
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
              
              <div className="project-content">
                <div className="project-top-row">
                  <span className="project-role">{project.role}</span>
                  {project.isPrivate ? (
                    <span className="badge-status badge-private">
                      <Lock size={12} /> Private Repo
                    </span>
                  ) : (
                    <span className="badge-status badge-public">
                      Public
                    </span>
                  )}
                </div>

                <div className="project-header">
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>

                {project.highlights && (
                  <ul className="project-highlights">
                    {project.highlights.map((h, i) => (
                      <li key={i}>
                        <CheckCircle2 size={13} className="highlight-icon" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.isPrivate ? (
                    <a
                      href={`mailto:dulanjan.connect@gmail.com?subject=Inquiry regarding ${encodeURIComponent(project.title)} Architecture Walkthrough`}
                      className="project-btn project-btn-private"
                    >
                      <Lock size={14} /> Request Walkthrough
                    </a>
                  ) : (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-btn"
                    >
                      <Code2 size={15} /> View Codebase
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
