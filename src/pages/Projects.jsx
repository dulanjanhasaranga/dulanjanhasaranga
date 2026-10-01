import { ExternalLink, Globe } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    id: 'eduscope',
    title: 'EduScope-Connect',
    description: 'A full-stack educational platform bridging the gap between students and quality learning resources.',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/dulanjanhasaranga/EduScope-Connect',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hotel',
    title: 'Hotel Reservation System',
    description: 'Comprehensive hotel booking platform managing room availability, guests, and administrative tasks.',
    tags: ['JavaScript', 'MySQL', 'Full-Stack'],
    github: 'https://github.com/dulanjanhasaranga/Hotel-Reservation-System',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cart',
    title: 'Cart Abandonment Analysis',
    description: 'Deep-dive business analysis on 90,000+ sessions to optimize e-commerce checkout flows and reduce drop-off.',
    tags: ['Data Analytics', 'Business Analysis'],
    github: 'https://github.com/dulanjanhasaranga/Cart-Abandonment-Project',
    isDataViz: true
  }
];

const Projects = () => {
  return (
    <div className="page-container projects-page">
      <div className="container">
        <div className="page-header">
          <div className="badge">Portfolio</div>
          <h1 className="page-title">Featured <span className="text-gradient">Projects</span></h1>
          <p className="page-subtitle">A selection of my recent work in web development and data analytics.</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
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
                </div>
              )}
              
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"><Globe size={20} /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><ExternalLink size={20} /></a>
                  </div>
                </div>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
