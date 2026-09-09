'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  UserCheck, 
  Sparkles, 
  Headphones, 
  Tv, 
  Coffee, 
  ShieldCheck, 
  Smile, 
  Syringe, 
  Cpu, 
  ChevronDown, 
  MessageCircle,
  Award,
  Zap
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { amenitiesData, techData, faqData, transformationData } from '@/lib/mockData';

const iconServiceMap: Record<string, React.ReactNode> = {
  'cosmetic-veneers': <Smile size={28} />,
  'cosmetic-whitening': <Sparkles size={28} />,
  'general-cleaning': <ShieldCheck size={28} />,
  'surgical-implants': <Syringe size={28} />,
};

const amenityIconMap: Record<string, React.ReactNode> = {
  'Headphones': <Headphones size={24} />,
  'Tv': <Tv size={24} />,
  'Sparkles': <Sparkles size={24} />,
  'Coffee': <Coffee size={24} />,
};

export function HomeClientWrapper({ heroData, trustSignals, servicesData, doctorsData }: any) {
  // State for interactive quick booking bar
  const [selectedService, setSelectedService] = useState('cosmetic-veneers');
  const [selectedDoctor, setSelectedDoctor] = useState('any');
  const [selectedTime, setSelectedTime] = useState('morning');

  // State for FAQ accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            
            {/* Left Content */}
            <motion.div 
              className={styles.heroContent}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.heroBadge}>
                <span className={styles.pulseDot}></span>
                <span>{heroData.badge || "✨ Accepting New Patients • Same-Day Emergencies"}</span>
              </div>

              <h1 className={styles.heroHeadline}>
                Dentistry Redefined for <span className={styles.heroHeadlineGradient}>Calm, Confident</span> Smiles.
              </h1>

              <p className={styles.heroSubheadline}>
                {heroData.subheadline}
              </p>

              <div className={styles.heroActions}>
                <Link href={heroData.ctaLink || "/booking"} className="btn-primary">
                  <span>{heroData.ctaText || "Schedule Your Visit"}</span>
                  <ArrowRight size={17} />
                </Link>

                <a href="#transformations" className="btn-secondary">
                  <span>Explore Results</span>
                </a>
              </div>

              <div className={styles.ratingSnippet}>
                <div className={styles.ratingStars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" stroke="#f59e0b" />
                  ))}
                </div>
                <span><strong>4.9/5 Rating</strong> from 850+ Verified Google Reviews</span>
              </div>
            </motion.div>

            {/* Right Visual Frame */}
            <motion.div 
              className={styles.heroVisual}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              {/* Floating Top Card */}
              <div className={styles.floatingCardTop}>
                <div className={styles.floatingCardIcon}>
                  <Clock size={20} />
                </div>
                <div>
                  <div className={styles.floatingCardTitle}>Next Opening Today</div>
                  <div className={styles.floatingCardSub}>2:30 PM • Dr. Elena Smith</div>
                </div>
              </div>

              {/* Main Clinic Photography */}
              <div className={styles.heroImageFrame}>
                <Image 
                  src="/images/clinic-hero.jpg"
                  alt="Lumina Dental Studio Interior Lounge"
                  width={600}
                  height={480}
                  className={styles.heroMainImg}
                  priority
                />
              </div>

              {/* Floating Bottom Card */}
              <div className={styles.floatingCardBottom}>
                <div className={styles.floatingCardIcon} style={{ background: '#ecfdf5', color: '#059669' }}>
                  <Award size={20} />
                </div>
                <div>
                  <div className={styles.floatingCardTitle}>99.4% Pain-Free Score</div>
                  <div className={styles.floatingCardSub}>Gentle Wand™ Micro-Anesthesia</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE QUICK-BOOKING BAR */}
      <section className={styles.bookingBarWrapper}>
        <div className="container">
          <motion.div 
            className={styles.bookingBar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className={styles.bookingField}>
              <label className={styles.fieldLabel}>
                <Sparkles size={14} /> Desired Treatment
              </label>
              <select 
                className={styles.fieldSelect}
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                <option value="cosmetic-veneers">Handcrafted Porcelain Veneers</option>
                <option value="cosmetic-whitening">Laser Teeth Whitening</option>
                <option value="general-cleaning">Holistic Preventive Hygiene</option>
                <option value="surgical-implants">Guided 3D Dental Implants</option>
                <option value="emergency">Emergency Consultation</option>
              </select>
            </div>

            <div className={styles.bookingField}>
              <label className={styles.fieldLabel}>
                <UserCheck size={14} /> Specialist
              </label>
              <select 
                className={styles.fieldSelect}
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
              >
                <option value="any">First Available Specialist</option>
                <option value="dr-elena">Dr. Elena Smith (Cosmetic Lead)</option>
                <option value="dr-marcus">Dr. Marcus Jones (Surgery/Implants)</option>
              </select>
            </div>

            <div className={styles.bookingField}>
              <label className={styles.fieldLabel}>
                <Clock size={14} /> Preferred Time
              </label>
              <select 
                className={styles.fieldSelect}
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="morning">Morning (8:00 AM – 12:00 PM)</option>
                <option value="afternoon">Afternoon (12:00 PM – 4:00 PM)</option>
                <option value="evening">Late Afternoon (4:00 PM – 6:00 PM)</option>
              </select>
            </div>

            <div>
              <Link 
                href={`/booking?service=${selectedService}&doctor=${selectedDoctor}&time=${selectedTime}`}
                className="btn-primary"
                style={{ width: '100%', padding: '0.95rem 1.75rem' }}
              >
                <Calendar size={17} />
                <span>Check Live Calendar</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SMILE TRANSFORMATIONS (BEFORE & AFTER) */}
      <section id="transformations" className={`section ${styles.transformationSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Smile Artistry</span>
            <h2 className="section-title">Real Patient Transformations</h2>
            <p className="section-subtitle">
              Every smile is bespoke. We combine 3D facial golden-ratio symmetry with hand-layered ceramic porcelain.
            </p>
          </div>

          <motion.div 
            className={styles.transformationBox}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.transformationImageWrap}>
              <Image 
                src={transformationData.image}
                alt="Before and after porcelain veneers smile makeover"
                width={700}
                height={450}
                className={styles.transformationImg}
              />
            </div>

            <div className={styles.transformationDetails}>
              <span className={styles.pillBadge}>Cosmetic Case Study</span>
              <h3 style={{ fontSize: '1.85rem', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                Full Arch Porcelain Veneer Restoration
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.975rem' }}>
                Patient presented with enamel erosion, uneven incisal edges, and severe tetracycline discoloration. Dr. Elena designed 8 ultra-thin feldspathic porcelain veneers to recreate natural translucency.
              </p>

              <div className={styles.treatmentMetaGrid}>
                <div>
                  <div className={styles.metaItemTitle}>Timeline</div>
                  <div className={styles.metaItemValue}>2 Visits (10 Days)</div>
                </div>
                <div>
                  <div className={styles.metaItemTitle}>Discomfort Level</div>
                  <div className={styles.metaItemValue}>0 / 10 (Painless)</div>
                </div>
                <div>
                  <div className={styles.metaItemTitle}>Technique</div>
                  <div className={styles.metaItemValue}>Minimal Prep 0.3mm</div>
                </div>
                <div>
                  <div className={styles.metaItemTitle}>Longevity</div>
                  <div className={styles.metaItemValue}>15 - 20+ Years</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/booking?service=cosmetic-veneers" className="btn-primary">
                  <span>Book Veneer Consultation</span>
                  <ArrowRight size={15} />
                </Link>
                <Link href="/services#cosmetic" className="btn-secondary">
                  <span>Learn More</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. THE LUMINA EXPERIENCE (COMFORT & TECH) */}
      <section id="experience" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Comfort Architecture</span>
            <h2 className="section-title">The Lumina Wellness Experience</h2>
            <p className="section-subtitle">
              We engineered out everything people dread about the dentist—replacing clinical tension with warm boutique hospitality.
            </p>
          </div>

          <div className={styles.experienceGrid}>
            {amenitiesData.map((amenity: any, idx: number) => (
              <motion.div 
                key={idx}
                className={styles.experienceCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className={styles.experienceIcon}>
                  {amenityIconMap[amenity.icon] || <Sparkles size={24} />}
                </div>
                <h3 className={styles.experienceCardTitle}>{amenity.title}</h3>
                <p className={styles.experienceCardDesc}>{amenity.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech Bar */}
          <div style={{ marginTop: '4rem', background: 'var(--bg-subtle)', borderRadius: '1.75rem', padding: '3rem 2.5rem', border: '1px solid var(--border-subtle)' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="section-tag" style={{ background: '#ffffff' }}>Precision Technology</span>
              <h3 style={{ fontSize: '1.85rem' }}>State-of-the-Art Digital Dentistry</h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {techData.map((tech: any, i: number) => (
                <div key={i} style={{ background: '#ffffff', padding: '1.75rem', borderRadius: '1.25rem', border: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {tech.badge}
                  </span>
                  <h4 style={{ fontSize: '1.15rem', margin: '0.5rem 0' }}>{tech.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section id="services" className={`section ${styles.transformationSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Clinical Offerings</span>
            <h2 className="section-title">Comprehensive Treatments</h2>
            <p className="section-subtitle">
              From preventative wellness cleanings to complex smile reconstructions, each treatment is performed with meticulous precision.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {servicesData.map((service: any, i: number) => (
              <motion.div 
                key={service.id} 
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className={styles.serviceCategoryBadge}>{service.category}</span>
                <div className={styles.serviceIconWrap}>
                  {iconServiceMap[service.id] || <Smile size={28} />}
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.shortDescription}</p>

                <div className={styles.serviceFooter}>
                  <div className={styles.servicePrice}>
                    <span className="priceLabel">Starting From</span>
                    <span className="priceValue">{service.priceFrom || "$250"}</span>
                  </div>
                  <Link 
                    href={`/booking?service=${service.id}`} 
                    className="btn-primary"
                    style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link href="/services" className="btn-secondary" style={{ padding: '1rem 2.5rem' }}>
              <span>View Full Treatment Catalog</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. SPECIALISTS */}
      <section id="specialists" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Master Clinicians</span>
            <h2 className="section-title">Meet Your Doctors</h2>
            <p className="section-subtitle">
              Our specialists combine Ivy League training, fine art sensibilities, and continuous clinical mastery.
            </p>
          </div>

          <div className={styles.doctorsGrid}>
            {doctorsData.map((doctor: any, i: number) => (
              <motion.div 
                key={doctor.id} 
                className={styles.doctorCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className={styles.doctorImageWrap}>
                  <Image 
                    src={doctor.imageUrl} 
                    alt={doctor.name} 
                    width={400} 
                    height={320} 
                    className={styles.doctorImg} 
                  />
                </div>
                <div className={styles.doctorBody}>
                  <div className={styles.doctorRole}>{doctor.role || doctor.specialty}</div>
                  <h3 className={styles.doctorName}>{doctor.name}</h3>
                  <div className={styles.doctorEdu}>{doctor.education}</div>
                  <p className={styles.doctorBio}>{doctor.bio}</p>
                  
                  <Link 
                    href={`/booking?doctor=${doctor.id}`} 
                    className="btn-primary"
                    style={{ width: '100%', padding: '0.75rem 1rem', fontSize: '0.9rem' }}
                  >
                    <Calendar size={15} />
                    <span>Consult with {doctor.name.split(',')[0]}</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PATIENT STORIES & REVIEWS */}
      <section id="reviews" className={`section ${styles.transformationSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Verified Experiences</span>
            <h2 className="section-title">Words From Our Patients</h2>
            <p className="section-subtitle">
              Over 850+ five-star reviews reflecting our commitment to calm, pain-free dental excellence.
            </p>
          </div>

          <div className={styles.reviewsGrid}>
            {trustSignals.map((review: any, i: number) => (
              <motion.div 
                key={i} 
                className={styles.reviewCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.25rem' }}>
                    {[...Array(review.rating || 5)].map((_, r) => (
                      <Star key={r} size={17} fill="#f59e0b" stroke="#f59e0b" />
                    ))}
                  </div>
                  <p className={styles.reviewQuote}>"{review.reviewText}"</p>
                </div>

                <div className={styles.reviewPatientMeta}>
                  <div>
                    <div className={styles.patientName}>{review.author}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{review.location || "Miami Beach, FL"}</div>
                  </div>
                  <div className={styles.patientTreatment}>{review.treatment || "Verified Visit"}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE FAQ ACCORDION */}
      <section id="faq" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Questions & Answers</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Have questions about insurance, sedation, or appointment prep? We’ve got answers.
            </p>
          </div>

          <div className={styles.faqContainer}>
            {faqData.map((faq: any, index: number) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={styles.faqItem}>
                  <button 
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <motion.div 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={20} color="var(--primary)" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className={styles.faqAnswer}
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. VIP CALL TO ACTION BANNER */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div 
            className={styles.vipCtaBanner}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="section-tag" style={{ background: 'rgba(255,255,255,0.15)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.2)' }}>
              Reserved Appointments
            </span>
            <h2 className={styles.vipCtaTitle}>Experience Dental Care as It Should Be.</h2>
            <p className={styles.vipCtaSub}>
              Schedule your comprehensive consultation or cosmetic smile design session today with our boutique Miami Beach team.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <Link href="/booking" className="btn-primary" style={{ background: '#ffffff', color: 'var(--primary-dark)', padding: '1rem 2.25rem', fontSize: '1rem' }}>
                <Calendar size={18} />
                <span>Book Appointment Online</span>
              </Link>
              <a href="tel:8005864621" className="btn-secondary" style={{ background: 'transparent', color: '#ffffff', borderColor: 'rgba(255,255,255,0.4)', padding: '1rem 2.25rem', fontSize: '1rem' }}>
                <span>Call (800) 586-4621</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
