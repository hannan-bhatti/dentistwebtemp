'use client';

import styles from './services.module.css';
import { motion } from 'framer-motion';
import { Sparkles, Smile, ShieldCheck, Syringe, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, React.ReactNode> = {
  'cosmetic-veneers': <Smile size={26} />,
  'cosmetic-whitening': <Sparkles size={26} />,
  'general-cleaning': <ShieldCheck size={26} />,
  'surgical-implants': <Syringe size={26} />,
};

export function ServicesClientWrapper({ servicesData }: any) {
  const categories = [
    { name: 'Cosmetic', description: 'Smile design, porcelain veneers, and laser whitening aesthetics' },
    { name: 'General', description: 'Preventative hygiene, periodontal health, and bio-compatible restorations' },
    { name: 'Surgical', description: 'Precision guided 3D dental implants and restorative surgery' }
  ];

  return (
    <>
      {/* Services Hero */}
      <section className={styles.servicesHero}>
        <div className="container">
          <span className="section-tag">Clinical Menu</span>
          <h1 className={styles.heroTitle}>Bespoke Dental Treatments</h1>
          <p className={styles.heroSub}>
            Every treatment is tailored to your unique anatomical harmony, utilizing micro-invasive protocols and pain-free technology.
          </p>
        </div>
      </section>

      {/* Categories & Treatments */}
      <section className="section" style={{ paddingTop: '4rem' }}>
        <div className="container">
          {categories.map((cat) => {
            const categoryServices = servicesData.filter((s: any) => s.category === cat.name);
            if (categoryServices.length === 0) return null;

            return (
              <div key={cat.name} id={cat.name.toLowerCase()} className={styles.categorySection}>
                <div className={styles.categoryHeader}>
                  <h2 className={styles.categoryTitle}>{cat.name} Dentistry</h2>
                  <span className={styles.categorySub}>{cat.description}</span>
                </div>

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
                      <div>
                        <div className={styles.serviceHeader}>
                          <div className={styles.serviceIcon}>
                            {iconMap[service.id] || <Sparkles size={26} />}
                          </div>
                          <h3 className={styles.serviceTitle}>{service.title}</h3>
                        </div>

                        <p className={styles.serviceDesc}>{service.shortDescription}</p>

                        <div className={styles.serviceDetailsRow}>
                          <div className={styles.serviceDetailItem}>
                            <span className={styles.detailLabel}>Duration</span>
                            <span className={styles.detailVal}>{service.duration || "45-60 mins"}</span>
                          </div>
                          <div className={styles.serviceDetailItem} style={{ textAlign: 'right' }}>
                            <span className={styles.detailLabel}>Investment</span>
                            <span className={styles.detailVal}>{service.priceFrom || "Consultation"}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Link 
                          href={`/booking?service=${service.id}`} 
                          className="btn-primary" 
                          style={{ width: '100%', padding: '0.85rem 1.25rem', fontSize: '0.9rem' }}
                        >
                          <Calendar size={16} />
                          <span>Reserve Treatment</span>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Consultation Banner */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ background: 'var(--surface-white)', border: '1px solid var(--border-subtle)', borderRadius: '2rem', padding: '3.5rem 2.5rem', textAlign: 'center', boxShadow: 'var(--shadow-md)' }}>
            <span className="section-tag">Personalized Treatment Plans</span>
            <h3 style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>Unsure Which Treatment Fits Your Goals?</h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: '1.7' }}>
              Schedule a comprehensive 3D Smile Consultation with Dr. Elena or Dr. Marcus. We’ll capture digital intraoral scans and review tailored options together.
            </p>
            <Link href="/booking" className="btn-primary" style={{ padding: '0.95rem 2.25rem' }}>
              <span>Book Comprehensive Consultation</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
