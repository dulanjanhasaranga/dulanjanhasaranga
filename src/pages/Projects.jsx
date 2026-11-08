import { motion } from 'framer-motion';
import { Lock, Clock } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    id: 'eduscope',
    title: 'EduScope-Connect',
    description: 'A full-stack educational platform bridging the gap between students and quality learning resources.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/dulanjanhasaranga/EduScope-Connect',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mirra',
    title: 'MIRRA',
    description: 'A fashion e-commerce storefront with search-first navigation, category rails, sale pricing, product grids, size & colour selection, and a slide-out bag with free-shipping progress.',
    tags: ['TypeScript', 'Vite', 'Cloudflare Workers', 'Bun'],
    link: 'https://github.com/dulanjanhasaranga/MIRRA',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'travel-go',
    title: 'Travel Go',
    description: 'A comprehensive travel planning and booking platform for discovering destinations, managing itineraries, and seamless trip organization.',
    tags: ['Coming Soon'],
    link: null,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800',
    isPending: true
  },
  {
    id: 'hotel',
    title: 'Hotel Reservation System',
    description: 'Comprehensive hotel booking platform managing room availability, guests, and administrative tasks.',
    tags: ['JavaScript', 'MySQL', 'Full-Stack'],
    link: 'https://github.com/dulanjanhasaranga/Hotel-Reservation-System',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cart',
    title: 'Cart Abandonment Analysis',
    description: 'Deep-dive business analysis on 90,000+ sessions to optimize e-commerce checkout flows and reduce drop-off.',
    tags: ['Data Analytics', 'Business Analysis'],
    link: 'https://github.com/dulanjanhasaranga/Cart-Abandonment-Project',
    isDataViz: true
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
          <p className="page-subtitle">A selection of my recent work in web development and data analytics.</p>
        </div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project) => {
            const CardWrapper = project.isPending ? motion.div : motion.a;
            const cardProps = project.isPending
              ? {}
              : {
                  href: project.link,
                  target: project.isPrivate ? "_self" : "_blank",
                  rel: "noopener noreferrer",
                };

            return (
              <CardWrapper
                {...cardProps}
                key={project.id}
                className={`project-card${project.isPending ? ' project-card--pending' : ''}`}
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
                    <span className="mono text-muted" style={{ fontSize: '0.8rem', marginTop: '1rem', zIndex: 2 }}>Funnel Drop-off Analysis</span>
                  </div>
                ) : (
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    {project.isPending && (
                      <div className="project-image-overlay">
                        <span className="coming-soon-label">Coming Soon</span>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    {project.isPrivate && (
                      <span className="tag tag-private">
                        <Lock size={11} /> Private
                      </span>
                    )}
                    {project.isPending && (
                      <span className="tag tag-pending">
                        <Clock size={11} /> Pending
                      </span>
                    )}
                  </div>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
