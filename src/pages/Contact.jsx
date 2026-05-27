import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! Our team will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <section style={styles.header}>
        <h1 style={styles.title}>Get In Touch</h1>
        <p style={styles.subtitle}>We are here to assist you. Reach out to us for any inquiries, appointments, or medical support.</p>
      </section>

      {/* Main Content Layout */}
      <div style={styles.mainLayout}>
        
        {/* Left Side: Contact Form */}
        <div style={styles.formCard}>
          <h2 style={styles.sectionTitle}>Send Us A Message</h2>
          <p style={styles.sectionDesc}>Fill out the form below and our medical coordinators will respond within 24 hours.</p>
          
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Full Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                required 
                style={styles.input} 
              />
            </div>

            <div style={styles.row}>
              <div style={{ ...styles.inputGroup, flex: 1 }}>
                <label style={styles.label}>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  required 
                  style={styles.input} 
                />
              </div>
              <div style={{ ...styles.inputGroup, flex: 1 }}>
                <label style={styles.label}>Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+961 XX XXX XXX" 
                  style={styles.input} 
                />
              </div>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Your Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5" 
                placeholder="How can we help you today?" 
                required 
                style={styles.textarea}
              ></textarea>
            </div>

            <button type="submit" style={styles.submitBtn}>Submit Message</button>
          </form>
        </div>

        {/* Right Side: Quick Info & Working Hours */}
        <div style={styles.sidebar}>
          
          {/* Quick Info Cards */}
          <div style={styles.infoGrid}>
            <div style={styles.infoCard}>
              <span style={styles.infoIcon}>📞</span>
              <div>
                <h4 style={styles.infoCardTitle}>Call Us</h4>
                <p style={styles.infoCardText}>+961 01 234 567</p>
              </div>
            </div>

            <div style={styles.infoCard}>
              <span style={styles.infoIcon}>✉️</span>
              <div>
                <h4 style={styles.infoCardTitle}>Email Us</h4>
                <p style={styles.infoCardText}>support@clinic.com</p>
              </div>
            </div>

            <div style={styles.infoCard}>
              <span style={styles.infoIcon}>📍</span>
              <div>
                <h4 style={styles.infoCardTitle}>Our Location</h4>
                <p style={styles.infoCardText}>Main Street, Beirut, Lebanon</p>
              </div>
            </div>
          </div>

          {/* Working Hours Card */}
          <div style={styles.hoursCard}>
            <h3 style={styles.hoursTitle}>⏰ Opening Hours</h3>
            <div style={styles.hoursRow}>
              <span>Monday - Friday</span>
              <span style={styles.hoursTime}>8:00 AM - 8:00 PM</span>
            </div>
            <div style={styles.hoursRow}>
              <span>Saturday</span>
              <span style={styles.hoursTime}>9:00 AM - 4:00 PM</span>
            </div>
            <div style={styles.hoursRow}>
              <span>Sunday</span>
              <span style={{ ...styles.hoursTime, color: '#e74c3c', fontWeight: '700' }}>Closed</span>
            </div>
          </div>

        </div>
      </div>

      {/* Embedded Google Map Section */}
      <section style={styles.mapSection}>
        <h3 style={styles.mapTitle}>Our Location on Map</h3>
        <div style={styles.mapContainer}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106005.81498188159!2d35.46743915!3d33.8892115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1721588338dd%3A0x13785c6e8e5c14d!2sBeirut!5e0!3m2!1sen!2slb!4v1700000000000!5m2!1sen!2slb" 
            width="100%" 
            height="400" 
            style={{ border: 0, borderRadius: '12px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

// Custom Premium Medical CSS In JS
const styles = {
  container: {
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    direction: 'ltr',
    backgroundColor: '#f4f7f9',
    minHeight: '100vh',
    paddingBottom: '80px',
  },
  header: {
    backgroundColor: '#2c3e50',
    color: '#ffffff',
    textAlign: 'center',
    padding: '70px 20px 90px 20px',
  },
  title: {
    fontSize: '2.6rem',
    fontWeight: '700',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.1rem',
    opacity: 0.85,
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.5',
  },
  mainLayout: {
    maxWidth: '1200px',
    margin: '-50px auto 40px auto',
    padding: '0 20px',
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap',
  },
  formCard: {
    flex: '2 1 600px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '40px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    border: '1px solid #eef2f5',
  },
  sidebar: {
    flex: '1 1 350px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    color: '#2c3e50',
    fontWeight: '700',
    marginBottom: '8px',
  },
  sectionDesc: {
    fontSize: '0.95rem',
    color: '#7f8c8d',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  row: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '0.9rem',
    color: '#34495e',
    fontWeight: '600',
  },
  input: {
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #dcdde1',
    fontSize: '1rem',
    color: '#2c3e50',
    backgroundColor: '#f8f9fa',
    outline: 'none',
  },
  textarea: {
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #dcdde1',
    fontSize: '1rem',
    color: '#2c3e50',
    backgroundColor: '#f8f9fa',
    outline: 'none',
    resize: 'vertical',
    fontFamily: 'inherit',
  },
  submitBtn: {
    padding: '14px',
    backgroundColor: '#3498db',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.05rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '10px',
  },
  infoGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.02)',
    border: '1px solid #eef2f5',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  infoIcon: {
    fontSize: '1.8rem',
    backgroundColor: '#ebf5fb',
    padding: '10px',
    borderRadius: '50%',
    color: '#3498db',
  },
  infoCardTitle: {
    fontSize: '0.9rem',
    color: '#7f8c8d',
    margin: 0,
    fontWeight: '600',
  },
  infoCardText: {
    fontSize: '1.05rem',
    color: '#2c3e50',
    margin: '3px 0 0 0',
    fontWeight: '700',
  },
  hoursCard: {
    backgroundColor: '#ffffff',
    borderRadius: '14px',
    padding: '25px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.03)',
    border: '1px solid #eef2f5',
  },
  hoursTitle: {
    fontSize: '1.25rem',
    color: '#2c3e50',
    fontWeight: '700',
    marginBottom: '15px',
    borderBottom: '2px solid #f4f7f9',
    paddingBottom: '10px',
  },
  hoursRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    fontSize: '0.95rem',
    color: '#34495e',
    borderBottom: '1px dashed #f1f2f6',
  },
  hoursTime: {
    fontWeight: '600',
    color: '#2c3e50',
  },
  mapSection: {
    maxWidth: '1200px',
    margin: '40px auto 0 auto',
    padding: '0 20px',
  },
  mapTitle: {
    fontSize: '1.4rem',
    color: '#2c3e50',
    fontWeight: '700',
    marginBottom: '15px',
  },
  mapContainer: {
    boxShadow: '0 10px 25px rgba(0,0,0,0.04)',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid #eef2f5',
  }
};

export default Contact;