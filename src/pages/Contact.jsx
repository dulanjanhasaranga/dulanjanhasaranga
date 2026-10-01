import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    const btn = e.target.querySelector('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Message Sent! ✓';
    btn.style.backgroundColor = '#10b981';
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.backgroundColor = '';
      e.target.reset();
    }, 3000);
  };

  return (
    <motion.div 
      className="page-container contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container contact-container">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="contact-header">
          <motion.div variants={itemVariants} className="badge">Get In Touch</motion.div>
          <motion.h1 variants={itemVariants} className="page-title">Let's <span className="text-gradient">Connect</span></motion.h1>
          <motion.p variants={itemVariants} className="page-subtitle">I'm currently open to new opportunities in software engineering, full-stack development, and data analytics. Have a question or a project? Drop a message!</motion.p>
        </motion.div>
        
        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="contact-info-cards">
            <div className="info-card">
              <div className="info-icon-wrapper">
                <Mail size={24} className="info-icon" />
              </div>
              <div>
                <h3>Email</h3>
                <p>contact@example.com</p>
                <a href="mailto:contact@example.com" className="info-link">Write me a message →</a>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon-wrapper">
                <MessageSquare size={24} className="info-icon" />
              </div>
              <div>
                <h3>LinkedIn</h3>
                <p>dulanjan-hasaranga</p>
                <a href="https://linkedin.com/in/dulanjan-hasaranga" target="_blank" rel="noopener noreferrer" className="info-link">Connect with me →</a>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon-wrapper">
                <MapPin size={24} className="info-icon" />
              </div>
              <div>
                <h3>Location</h3>
                <p>Sri Lanka</p>
                <span className="info-link disabled">Available remotely Worldwide</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" required placeholder="John Doe" className="form-input" />
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input type="email" required placeholder="john@example.com" className="form-input" />
              </div>
              
              <div className="form-group">
                <label>Message</label>
                <textarea rows={5} required placeholder="How can I help you?" className="form-input"></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
