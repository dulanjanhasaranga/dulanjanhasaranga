const Contact = () => {
  return (
    <div className="page-container">
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="badge">Get In Touch</div>
        <h1 className="page-title">Let's <span className="text-gradient">Connect</span></h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '3rem' }}>
          <div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              I'm currently open to new opportunities in software engineering, full-stack development, and data analytics.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="mailto:contact@example.com" style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', display: 'block' }}>
                <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Email</strong>
                <span style={{ color: 'var(--text-secondary)' }}>contact@example.com</span>
              </a>
              <a href="https://linkedin.com/in/dulanjan-hasaranga" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', display: 'block' }}>
                <strong style={{ display: 'block', marginBottom: '0.25rem' }}>LinkedIn</strong>
                <span style={{ color: 'var(--text-secondary)' }}>linkedin.com/in/dulanjan-hasaranga</span>
              </a>
            </div>
          </div>
          
          <div style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Name</label>
                <input type="text" style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)' }} placeholder="John Doe" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Email</label>
                <input type="email" style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)' }} placeholder="john@example.com" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Message</label>
                <textarea rows={4} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', resize: 'vertical' }} placeholder="How can I help you?"></textarea>
              </div>
              <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
