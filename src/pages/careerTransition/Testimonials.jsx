import React, { useState, useEffect } from 'react';
// import styles from './Testimonials.module.css';
import styles from '../../css/career.module.css';


const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Civilian exams felt confusing. VeerNXT explained everything like an operations briefing.",
      author: "Amit Sharma"
    },
    {
      id: 2,
      text: "I got clarity on which exams I am eligible for — and a study plan I actually follow.",
      author: "Rajesh Kumar"
    },
    {
      id: 3,
      text: "My personalised report helped me choose the right career path.",
      author: "Vikram Singh"
    },
    {
      id: 4,
      text: "The structured approach made my transition smooth and stress-free.",
      author: "Suresh Patel"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Why Agniveers trust VeerNXT</h2>
        
        <div className={styles.testimonialContainer}>
          <div className={styles.testimonialCard} key={testimonials[currentIndex].id}>
            <div className={styles.quoteIcon}>"</div>
            <p className={styles.testimonialText}>{testimonials[currentIndex].text}</p>
            <p className={styles.testimonialAuthor}>— {testimonials[currentIndex].author}</p>
          </div>
        </div>
        
        <div className={styles.dotsContainer}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;