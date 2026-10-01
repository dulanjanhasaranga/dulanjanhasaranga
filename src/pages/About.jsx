const About = () => {
  return (
    <div className="page-container">
      <div className="container" style={{ paddingTop: '4rem' }}>
        <div className="badge">About Me</div>
        <h1 className="page-title">My <span className="text-gradient">Journey</span></h1>
        
        <div style={{ marginTop: '3rem', maxWidth: '800px', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            I am an Information Systems Engineering undergraduate at SLIIT with a passion for building data-driven applications and full-stack solutions. 
          </p>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            Recently, I've been focused on bridging technical development with business analytics, creating everything from comprehensive Hotel Reservation Systems to deep-dive analytics on E-commerce Cart Abandonment.
          </p>
          
          <h3 style={{ marginTop: '3rem', marginBottom: '1rem' }}>Education</h3>
          <div style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)' }}>
            <h4>Sri Lanka Institute of Information Technology (SLIIT)</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Information Systems Engineering Undergraduate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
