import React from 'react';

function Doctors() {
  const doctorsList = [
    {
      id: 1,
      name: 'Dr. Ahmad Al-Masri',
      specialty: 'Cardiology & Heart Surgery',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=80',
      stats: { operations: '450+', experience: '14 Yrs', rating: '4.9 ⭐' }
    },
    {
      id: 3,
      name: 'Dr. Omar Hassan',
      specialty: 'Orthopedic Surgery',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80',
      stats: { operations: '620+', experience: '10 Yrs', rating: '4.8 ⭐' }
    },
    {
      id: 5,
      name: 'Dr. Hisham Ali',
      specialty: 'Neurology & Brain Specialist',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&auto=format&fit=crop&q=80',
      stats: { operations: '310+', experience: '16 Yrs', rating: '5.0 ⭐' }
    },
    {
      id: 6,
      name: 'Dr. Nour Al-Hoda',
      specialty: 'Ophthalmology & Eye Surgery',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=80',
      stats: { operations: '850+', experience: '11 Yrs', rating: '4.7 ⭐' }
    }
  ];

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <section style={styles.header}>
        <h1 style={styles.title}>Our Medical Specialists</h1>
        <p style={styles.subtitle}>Meet our team of world-class doctors dedicated to providing the best healthcare services.</p>
      </section>

      {/* Doctors Grid Section */}
      <section style={styles.gridSection}>
        <div style={styles.grid}>
          {doctorsList.map((doctor) => (
            <div key={doctor.id} style={styles.card}>
              {/* Doctor Image Container */}
              <div style={styles.imageContainer}>
                <img src={doctor.image} alt={doctor.name} style={styles.image} />
              </div>

              {/* Doctor Info */}
              <div style={styles.infoContainer}>
                <h3 style={styles.docName}>{doctor.name}</h3>
                <p style={styles.docSpecialty}>{doctor.specialty}</p>
                
                <hr style={styles.divider} />

                {/* Statistics Badges */}
                <div style={styles.statsContainer}>
                  <div style={styles.statBox}>
                    <span style={styles.statValue}>{doctor.stats.operations}</span>
                    <span style={styles.statLabel}>Surgeries</span>
                  </div>
                  <div style={styles.statBox}>
                    <span style={styles.statValue}>{doctor.stats.experience}</span>
                    <span style={styles.statLabel}>Exp</span>
                  </div>
                  <div style={styles.statBox}>
                    <span style={styles.statValue}>{doctor.stats.rating}</span>
                    <span style={styles.statLabel}>Rating</span>
                  </div>
                </div>

                {/* Action Button */}
                <button style={styles.button}>Book Appointment</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Custom modern styling
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
    padding: '70px 20px',
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
  gridSection: {
    maxWidth: '1200px',
    margin: '-30px auto 0 auto', 
    padding: '0 20px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
    width: '320px',
    overflow: 'hidden',
    border: '1px solid #eef2f5',
  },
  imageContainer: {
    width: '100%',
    height: '240px',
    backgroundColor: '#e1e8ed',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  infoContainer: {
    padding: '24px',
    textAlign: 'center',
  },
  docName: {
    fontSize: '1.35rem',
    color: '#2c3e50',
    fontWeight: '700',
    marginBottom: '6px',
  },
  docSpecialty: {
    fontSize: '0.95rem',
    color: '#3498db',
    fontWeight: '600',
    marginBottom: '15px',
  },
  divider: {
    border: '0',
    borderTop: '1px solid #f0f3f5',
    marginBottom: '15px',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    backgroundColor: '#f8fafd',
    padding: '10px',
    borderRadius: '8px',
  },
  statsBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  statBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: '1rem',
    color: '#2c3e50',
    fontWeight: '700',
  },
  statLabel: {
    fontSize: '0.75rem',
    color: '#7f8c8d',
    marginTop: '2px',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#3498db',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
  }
};

export default Doctors;