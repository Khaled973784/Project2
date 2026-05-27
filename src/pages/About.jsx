import React from 'react';

function About() {
  const stats = [
    { number: '15+', label: 'Specialized Doctors' },
    { number: '10K+', label: 'Happy Patients' },
    { number: '12+', label: 'Years of Experience' },
    { number: '24/7', label: 'Emergency Support' }
  ];

  return (
    <div style={styles.container}>
      {/* 1. Hero Section */}
      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>About Our Clinic</h1>
        <p style={styles.heroSubtitle}>Providing world-class medical care and personalized healthcare services for you and your family.</p>
      </section>

      {/* 2. Main Content Card */}
      <section style={styles.contentSection}>
        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>Who We Are</h2>
          <p style={styles.text}>
            Our medical center was established to be a beacon of health and wellness in the community. We believe that exceptional healthcare goes beyond treatment—it starts with prevention, building trust, and delivering compassionate care. With a team of highly qualified consultants and state-of-the-art medical technology, we ensure your journey to recovery is safe, comfortable, and efficient.
          </p>
        </div>
      </section>

      {/* 3. Mission & Vision Grid */}
      <section style={styles.gridSection}>
        <div style={styles.gridCard}>
          <div style={styles.iconWrapper}>🎯</div>
          <h3 style={styles.gridCardTitle}>Our Mission</h3>
          <p style={styles.gridCardText}>
            To deliver safe, high-quality, and cost-effective healthcare services that exceed our patients' expectations, guided by strict medical ethics and excellence.
          </p>
        </div>

        <div style={styles.gridCard}>
          <div style={styles.iconWrapper}>👁️‍🗨️</div>
          <h3 style={styles.gridCardTitle}>Our Vision</h3>
          <p style={styles.gridCardText}>
            To be the leading and most trusted healthcare provider in the region by continuously adopting innovative medical advancements and clinical practices.
          </p>
        </div>
      </section>

      {/* 4. Stats Section */}
      <section style={styles.statsSection}>
        <div style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} style={styles.statBox}>
              <h2 style={styles.statNumber}>{stat.number}</h2>
              <p style={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Custom modern medical styling
const styles = {
  container: {
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    direction: 'ltr', // English layout direction
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    paddingBottom: '60px',
  },
  heroSection: {
    backgroundColor: '#3498db', // Medical blue
    color: '#ffffff',
    textAlign: 'center',
    padding: '80px 20px 70px 20px',
    boxShadow: 'inset 0 -10px 20px rgba(0,0,0,0.05)',
  },
  heroTitle: {
    fontSize: '2.8rem',
    fontWeight: '700',
    marginBottom: '15px',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    opacity: '0.94',
    maxWidth: '650px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  contentSection: {
    maxWidth: '1000px',
    margin: '-40px auto 40px auto', // Elegant overlay effect onto the hero section
    padding: '0 20px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
    border: '1px solid #ebedf0',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    color: '#2c3e50',
    marginBottom: '20px',
    fontWeight: '700',
  },
  text: {
    fontSize: '1.1rem',
    color: '#657786',
    lineHeight: '1.8',
    textAlign: 'justify',
  },
  gridSection: {
    maxWidth: '1000px',
    margin: '0 auto 50px auto',
    display: 'flex',
    gap: '24px',
    padding: '0 20px',
    flexWrap: 'wrap',
  },
  gridCard: {
    flex: '1 1 45%',
    backgroundColor: '#ffffff',
    padding: '35px 30px',
    borderRadius: '14px',
    boxShadow: '0 8px 25px rgba(0,0,0,0.03)',
    border: '1px solid #ebedf0',
    textAlign: 'center',
    minWidth: '290px',
  },
  iconWrapper: {
    fontSize: '2.6rem',
    marginBottom: '15px',
  },
  gridCardTitle: {
    fontSize: '1.4rem',
    color: '#2c3e50',
    marginBottom: '12px',
    fontWeight: '600',
  },
  gridCardText: {
    fontSize: '1rem',
    color: '#7f8c8d',
    lineHeight: '1.7',
  },
  statsSection: {
    backgroundColor: '#ffffff',
    padding: '15px 0',
    borderTop: '1px solid #e1e8ed',
    borderBottom: '1px solid #e1e8ed',
  },
  statsGrid: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '30px',
    padding: '20px',
  },
  statBox: {
    textAlign: 'center',
    padding: '10px 20px',
    minWidth: '160px',
  },
  statNumber: {
    fontSize: '2.6rem',
    color: '#3498db',
    fontWeight: '700',
    marginBottom: '5px',
  },
  statLabel: {
    fontSize: '1rem',
    color: '#657786',
    fontWeight: '500',
  },
};

export default About;