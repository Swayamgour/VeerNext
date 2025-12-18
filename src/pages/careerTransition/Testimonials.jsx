import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow, EffectCreative } from 'swiper/modules';
import styles from '../../css/career.module.css';
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaUserTie,
  FaUserGraduate,
  FaUserShield,
  FaAward,
  FaRegClock
} from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-creative';

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Civilian exams felt confusing. VeerNXT explained everything like an operations briefing. The step-by-step guidance made my transition seamless.",
      author: "Amit Sharma",
      role: "Former Agniveer",
      rating: 5,
      date: "2 months ago",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      achievement: "Cleared SSC CGL Tier-1",
      icon: <FaUserTie />,
      color: "testimonial1"
    },
    {
      id: 2,
      text: "I got clarity on which exams I am eligible for — and a study plan I actually follow. The personalized approach changed everything.",
      author: "Rajesh Kumar",
      role: "Ex-Serviceman",
      rating: 5,
      date: "1 month ago",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      achievement: "Selected for RBI Grade B",
      icon: <FaUserGraduate />,
      color: "testimonial2"
    },
    {
      id: 3,
      text: "My personalised report helped me choose the right career path. The AI analysis was spot-on and matched my skills perfectly.",
      author: "Vikram Singh",
      role: "Agniveer (2022 Batch)",
      rating: 4,
      date: "3 weeks ago",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      achievement: "Joined PSU with ₹12L Package",
      icon: <FaUserShield />,
      color: "testimonial3"
    },
    {
      id: 4,
      text: "The structured approach made my transition smooth and stress-free. I went from confusion to confidence in just 30 days.",
      author: "Suresh Patel",
      role: "Retired Army Personnel",
      rating: 5,
      date: "2 weeks ago",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      achievement: "Secured State Govt Job",
      icon: <FaAward />,
      color: "testimonial4"
    },
    {
      id: 5,
      text: "VeerNXT's mentorship program was the game-changer for me. The interview preparation helped me ace 3 job offers.",
      author: "Rohit Verma",
      role: "Former Navy Sailor",
      rating: 5,
      date: "1 week ago",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      achievement: "Got 3 Job Offers",
      icon: <FaRegClock />,
      color: "testimonial5"
    }
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handlePrevClick = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`${styles.starIcon} ${i < rating ? styles.filled : ''}`}
      />
    ));
  };

  return (
    <>
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <div className={styles.headerDecorator}>
              <div className={styles.decLine}></div>
              <span className={styles.decText}>Success Stories</span>
              <div className={styles.decLine}></div>
            </div>

            <h2 className={styles.sectionTitle}>
              Why Agniveers trust <span className={styles.titleHighlight}>VeerNXT</span>
            </h2>

            <p className={styles.sectionSubtitle}>
              VeerNXT provides the clarity, direction and tools you need to step confidently into civilian life.
            </p>
          </div>

         

          {/* Swiper Testimonials */}
          <div className={styles.testimonialSwiperContainer}>
            <div className={styles.swiperHeader}>
              <h3 className={styles.swiperTitle}>
                Real Stories, Real Results
              </h3>
              <div className={styles.swiperControls}>
                <button className={styles.swiperNavBtn} onClick={handlePrevClick}>
                  <FaChevronLeft />
                </button>
                <button className={styles.swiperNavBtn} onClick={handleNextClick}>
                  <FaChevronRight />
                </button>
              </div>
            </div>

            <Swiper
              ref={swiperRef}
              modules={[Navigation,  Autoplay, EffectCoverflow]}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                  coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 50,
                    modifier: 1,
                  }
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 50,
                    modifier: 1,
                  }
                },
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              onSlideChange={handleSlideChange}
              className={styles.testimonialsSwiper}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className={`${styles.testimonialCard} ${styles[testimonial.color]}`}>
                    {/* Card Header */}
                    <div className={styles.cardHeader}>
                      <div className={styles.authorInfo}>
                        <div className={styles.authorImage}>
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            onError={(e) => {
                              e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80";
                            }}
                          />
                          <div className={styles.authorIcon}>
                            {testimonial.icon}
                          </div>
                        </div>
                        <div className={styles.authorDetails}>
                          <h4 className={styles.authorName}>{testimonial.author}</h4>
                          <p className={styles.authorRole}>{testimonial.role}</p>
                          <div className={styles.rating}>
                            {renderStars(testimonial.rating)}
                            <span className={styles.ratingText}>{testimonial.rating}.0</span>
                          </div>
                        </div>
                      </div>
                      <div className={styles.quoteIcon}>
                        <FaQuoteLeft />
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className={styles.cardBody}>
                      <p className={styles.testimonialText}>
                        "{testimonial.text}"
                      </p>
                    </div>

                    {/* Achievement Badge */}
                    <div className={styles.achievementBadge}>
                      <div className={styles.badgeIcon}>
                        {testimonial.icon}
                      </div>
                      <div className={styles.badgeContent}>
                        <span className={styles.badgeTitle}>Achievement</span>
                        <span className={styles.badgeText}>{testimonial.achievement}</span>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className={styles.cardFooter}>
                      <div className={styles.testimonialMeta}>
                        <span className={styles.date}>{testimonial.date}</span>
                        <span className={styles.verified}>✓ Verified User</span>
                      </div>
                      <div className={styles.testimonialAction}>
                        <button className={styles.readMoreBtn}>
                          Read Full Story →
                        </button>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className={styles.cardCorner}></div>
                    <div className={styles.cardPattern}></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          
           
          </div>

          {/* Additional Features */}
          <div className={styles.testimonialFeatures}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaUserShield />
              </div>
              <div className={styles.featureContent}>
                <h4>100% Verified</h4>
                <p>Every testimonial is verified and authenticated</p>
              </div>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaAward />
              </div>
              <div className={styles.featureContent}>
                <h4>Real Results</h4>
                <p>Documented success stories with proof</p>
              </div>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaRegClock />
              </div>
              <div className={styles.featureContent}>
                <h4>Recent Success</h4>
                <p>Updated weekly with new success stories</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;