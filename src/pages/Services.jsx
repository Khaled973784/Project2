import React from 'react';

function Services() {
  const servicesList = [
    {
      id: 1,
      title: "الاستشارات الطبية العامة",
      description: "فحوصات دورية وشاملة وتوجيه طبي دقيق من قبل نخبة من أطبائنا العامين والاختصاصيين وضمان المتابعة المستمرة للمرضى.",
      icon: "🩺"
    },
    {
      id: 2,
      title: "العناية المركزة والطورائ",
      description: "قسم طوارئ مجهز بالكامل بأحدث التقنيات الطبية يعمل على مدار 24 ساعة لاستقبال وإسعاف الحالات الحرجة بكفاءة عالية.",
      icon: "🚑"
    },
    {
      id: 3,
      title: "العمليات الجراحية",
      description: "غرف عمليات متطورة تتبع أعلى معايير التعقيم العالمية لإجراء الجراحات العامة والدقيقة وجراحات المناظير.",
      icon: "🏥"
    },
    {
      id: 4,
      title: "رعاية الأطفال وحديثي الولادة",
      description: "متابعة نمو الأطفال الشامل، تقديم التطعيمات الأساسية، وقسم خاص للحواضن تحت إشراف طاقم متخصص.",
      icon: "👶"
    },
    {
      id: 5,
      title: "الفحوصات المخبرية والأشعة",
      description: "مختبر مجهز لتقديم أدق نتائج التحاليل الطبية بسرعة، بالإضافة إلى أقسام الأشعة السينية، السونار، والرنين المغناطيسي.",
      icon: "🔬"
    },
    {
      id: 6,
      title: "الصيدلية المركزية",
      description: "صيدلية متكاملة داخل المركز توفر كافة الأدوية والمستلزمات الطبية على مدار الساعة لخدمة المرضى والمراجعين.",
      icon: "💊"
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>خدماتنا الطبية المتميزة</h2>
      <p style={styles.subtitle}>نقدم رعاية صحية متكاملة بأعلى معايير الجودة العالمية وأحدث التقنيات</p>
      
      <div style={styles.grid}>
        {servicesList.map((service) => (
          <div key={service.id} style={styles.card}>
            <div style={styles.iconContainer}>
              <span style={styles.icon}>{service.icon}</span>
            </div>
            
            <div style={styles.info}>
              <h3 style={styles.serviceTitle}>{service.title}</h3>
              <p style={styles.description}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: 'system-ui, sans-serif',
    direction: 'rtl'
  },
  title: {
    textAlign: 'center',
    fontSize: '2.2rem',
    color: '#2c3e50',
    marginBottom: '10px',
    fontWeight: '700'
  },
  subtitle: {
    textAlign: 'center',
    color: '#7f8c8d',
    marginBottom: '50px',
    fontSize: '1.1rem',
    maxWidth: '700px',
    margin: '0 auto 50px auto',
    lineHeight: '1.6'
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '35px'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
    width: '320px',
    padding: '30px 20px',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid #f0f3f4',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  iconContainer: {
    width: '70px',
    height: '70px',
    backgroundColor: '#e3f2fd',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px'
  },
  icon: {
    fontSize: '2.2rem'
  },
  info: {
    textAlign: 'center'
  },
  serviceTitle: {
    margin: '0 0 12px 0',
    fontSize: '1.3rem',
    color: '#2c3e50',
    fontWeight: '600'
  },
  description: {
    margin: '0',
    fontSize: '0.9rem',
    color: '#616e7c',
    lineHeight: '1.7',
    textAlign: 'justify',
    textJustify: 'inter-word'
  }
};

export default Services;