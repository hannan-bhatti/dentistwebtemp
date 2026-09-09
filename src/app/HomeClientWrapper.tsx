'use client';

import styles from './page.module.css';
import { motion } from 'framer-motion';
import { Star, Smile, Shield, Syringe } from 'lucide-react';
import Image from 'next/image';

const iconMap: Record<string, React.ReactNode> = {
  'cosmetic-veneers': <Smile size={32} />,
  'cosmetic-whitening': <Star size={32} />,
  'general-cleaning': <Shield size={32} />,
  'surgical-implants': <Syringe size={32} />,
};

export function HomeClientWrapper({ heroData, trustSignals, servicesData, doctorsData }: any) {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.h1 
            className={styles.heroHeadline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {heroData.headline}
          </motion.h1>
          <motion.p 
            className={styles.heroSubheadline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {heroData.subheadline}
          </motion.p>
          <motion.a 
            href={heroData.ctaLink} 
            className="btn-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {heroData.ctaText}
          </motion.a>
        </div>
      </section>

      {/* Trust Signals */}
      <section className={`section ${styles.trustSignals}`}>
        <div className="container">
          <h2 className="section-title">Patient Stories</h2>
          <p className="section-subtitle">Real experiences from our amazing patients.</p>
          <div className={styles.trustGrid}>
            {trustSignals.map((review: any, i: number) => (
              <motion.div 
                key={i} 
                className={styles.reviewCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.reviewRating}>
                  {'★'.repeat(review.rating || 5)}
                </div>
                <p className={styles.reviewText}>"{review.reviewText}"</p>
                <p className={styles.reviewAuthor}>— {review.author} via {review.source}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pathways */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive dental care tailored to your unique smile.</p>
          <div className={styles.servicesGrid}>
            {servicesData.slice(0, 3).map((service: any, i: number) => (
              <motion.div 
                key={service.id} 
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.serviceIcon}>
                  {iconMap[service.id] || <Smile size={32} />}
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.shortDescription}</p>
                <a href={service.detailsUrl} className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Learn More</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <h2 className="section-title">Meet the Experts</h2>
          <p className="section-subtitle">World-class specialists dedicated to your care.</p>
          <div className={styles.doctorsGrid}>
            {doctorsData.map((doctor: any, i: number) => (
              <motion.div 
                key={doctor.id} 
                className={styles.doctorCard}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Image 
                  src={doctor.imageUrl} 
                  alt={doctor.name} 
                  width={120} 
                  height={120} 
                  className={styles.doctorImage} 
                  unoptimized
                />
                <div className={styles.doctorInfo}>
                  <h3>{doctor.name}</h3>
                  <p className={styles.doctorSpecialty}>{doctor.specialty}</p>
                  <p className={styles.doctorBio}>{doctor.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
