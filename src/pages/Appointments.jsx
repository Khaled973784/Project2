import React, { useState } from 'react';

function Appointments() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    doctor: '',
    date: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`شكراً لك يا ${formData.name}، تم إرسال طلب الحجز بنجاح!`);
    // هنا يمكن إضافة الكود لإرسال البيانات للسيرفر مستقبلاً
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h2 style={styles.title}>حجز موعد طبي</h2>
        <p style={styles.subtitle}>يرجى تعبئة النموذج أدناه لتأكيد موعدك في العيادة</p>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>الاسم الكامل</label>
            <input 
              type="text" 
              name="name" 
              required 
              style={styles.input} 
              placeholder="أدخل اسمك الثلاثي"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>رقم الهاتف</label>
            <input 
              type="tel" 
              name="phone" 
              required 
              style={styles.input} 
              placeholder="مثال: 70123456"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>البريد الإلكتروني (اختياري)</label>
            <input 
              type="email" 
              name="email" 
              style={styles.input} 
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>اختر الطبيب المختص</label>
            <select 
              name="doctor" 
              required 
              style={styles.select}
              value={formData.doctor}
              onChange={handleChange}
            >
              <option value="">-- الرجاء اختيار الطبيب --</option>
              <option value="1">د. أحمد المصري (جراحة القلب)</option>
              <option value="3">د. عمر حسن (جراحة العظام)</option>
              <option value="4">د. ليلى مراد (الجلدية والتجميل)</option>
              <option value="5">د. هشام علي (الأمراض العصبية)</option>
              <option value="6">د. نور الهدى (جراحة العيون)</option>
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>تاريخ الموعد المناسب</label>
            <input 
              type="date" 
              name="date" 
              required 
              style={styles.input} 
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>ملاحظات إضافية أو أعراض تشكو منها</label>
            <textarea 
              name="notes" 
              style={styles.textarea} 
              placeholder="اكتب هنا أي تفاصيل تود إطلاع الطبيب عليها قبل الزيارة..."
              value={formData.notes}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" style={styles.button}>تأكيد الحجز الآن</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '60px 20px',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    fontFamily: 'system-ui, sans-serif',
    direction: 'rtl',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formWrapper: {
    backgroundColor: '#fff',
    padding: '40px 30px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    width: '100%',
    maxWidth: '550px',
    border: '1px solid #f0f3f4'
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    color: '#2c3e50',
    marginBottom: '10px',
    fontWeight: '700'
  },
  subtitle: {
    textAlign: 'center',
    color: '#7f8c8d',
    marginBottom: '30px',
    fontSize: '0.95rem',
    lineHeight: '1.5'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    textAlign: 'right'
  },
  label: {
    fontSize: '0.95rem',
    color: '#34495e',
    fontWeight: '600'
  },
  input: {
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #dcdde1',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit'
  },
  select: {
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #dcdde1',
    fontSize: '1rem',
    outline: 'none',
    backgroundColor: '#fff',
    fontFamily: 'inherit'
  },
  textarea: {
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #dcdde1',
    fontSize: '1rem',
    outline: 'none',
    height: '100px',
    resize: 'none',
    fontFamily: 'inherit'
  },
  button: {
    padding: '14px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
    marginTop: '10px'
  }
};

export default Appointments;