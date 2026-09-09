'use client';

import styles from './services.module.css';
import { motion } from 'framer-motion';
import { Star, Smile, Shield, Syringe } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'cosmetic-veneers': <Smile size={24} />,
  'cosmetic-whitening': <Star size={24} />,
  'general-cleaning': <Shield size={24} />,
  'surgical-implants': <Syringe size={24} />,
};

export function ServicesClientWrapper({ servicesData }: any) {
  const categories = ['Cosmetic', 'General', 'Surgical'];

  return (
    <>
      <section className={styles.servicesHero}>
        <div className="container">
          <h1 className="section-title">Our Treatments</h1>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            Comprehensive, world-class dental services tailored for you.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {categories.map((category) => {
            const categoryServices = servicesData.filter((s: any) => s.category === category);
            if (categoryServices.length === 0) return null;

            return (
              <div key={category} id={category.toLowerCase()} className={styles.categorySection}>
                <h2 className={styles.categoryTitle}>{category} Dentistry</h2>
                <div className={styles.servicesGrid}>
                  {categoryServices.map((service: any, i: number) => (
                    <motion.div 
                      key={service.id} 
                      className={styles.serviceCard}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className={styles.serviceHeader}>
                        <div className={styles.serviceIcon}>
                          {iconMap[service.id] || <Smile size={24} />}
                        </div>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                      </div>
                      <p className={styles.serviceDesc}>{service.shortDescription}</p>
                      <a href={`/booking?service=${service.id}`} className="btn-secondary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                        Book Consultation
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
