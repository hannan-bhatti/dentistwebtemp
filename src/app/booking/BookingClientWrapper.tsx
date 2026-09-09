'use client';

import { useEffect } from 'react';
import styles from './booking.module.css';
import { motion } from 'framer-motion';
import { Calendar, FileText, Phone, MessageCircle, CheckCircle2, Shield } from 'lucide-react';
import Cal, { getCalApi } from '@calcom/embed-react';

export function BookingClientWrapper({ calcomLink, tallyUrl }: { calcomLink: string, tallyUrl: string }) {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi();
        cal("ui", { 
          styles: { branding: { brandColor: "#0e7490" } }, 
          hideEventTypeDetails: false, 
          layout: "month_view" 
        });
      } catch (err) {
        console.warn("Cal.com embed init notice:", err);
      }
    })();
  }, []);

  return (
    <>
      {/* Booking Hero */}
      <section className={styles.bookingHero}>
        <div className="container">
          <span className="section-tag">Direct Scheduling</span>
          <h1 className="section-title">Schedule Your Consultation</h1>
          <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
            Book your appointment online with instant calendar synchronization, or complete your intake forms before arrival.
          </p>

          <div className={styles.stepBar}>
            <div className={styles.stepItem}>
              <div className={styles.stepNum}>1</div>
              <span>Select Date & Time</span>
            </div>
            <div style={{ color: 'var(--text-muted)' }}>→</div>
            <div className={styles.stepItem}>
              <div className={styles.stepNum}>2</div>
              <span>Quick Digital Intake</span>
            </div>
            <div style={{ color: 'var(--text-muted)' }}>→</div>
            <div className={styles.stepItem}>
              <div className={styles.stepNum} style={{ background: 'var(--accent-emerald)' }}>✓</div>
              <span>Instant Confirmation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Portal Split */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.portalContainer}>
            {/* Step 1: Cal.com Scheduler */}
            <motion.div 
              className={styles.bookingCard}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <Calendar size={24} />
                </div>
                <div>
                  <h2 className={styles.cardTitle}>Step 1: Choose Your Slot</h2>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>Real-time Concierge Sync</span>
                </div>
              </div>
              <p className={styles.cardDesc}>
                Select an open consultation window with Dr. Elena Smith or Dr. Marcus Jones. You will receive an instant calendar invite and SMS reminder.
              </p>
              
              <div className={styles.embedContainer}>
                <Cal 
                  calLink={calcomLink}
                  style={{ width: "100%", height: "550px", overflow: "scroll" }}
                  config={{ layout: "month_view" }}
                />
              </div>
            </motion.div>

            {/* Step 2: Digital Patient Intake */}
            <motion.div 
              className={styles.intakeCard}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <FileText size={24} />
                </div>
                <div>
                  <h2 className={styles.cardTitle}>Step 2: Paperless Check-in</h2>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>HIPAA-Compliant & Encrypted</span>
                </div>
              </div>
              <p className={styles.cardDesc}>
                Save 15 minutes in the clinic by submitting your health background and aesthetic smile goals before your visit.
              </p>
              
              <div className={styles.embedContainer}>
                <iframe 
                  src={tallyUrl} 
                  width="100%" 
                  height="550" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="Patient Digital Intake Form"
                ></iframe>
              </div>
            </motion.div>
          </div>

          {/* Concierge Assistance Card */}
          <div style={{ marginTop: '3.5rem', background: 'var(--surface-white)', border: '1px solid var(--border-subtle)', borderRadius: '1.75rem', padding: '2rem 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.35rem' }}>Prefer to Book Over the Phone?</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>Our concierge team is available to coordinate insurance coverage, custom sedation, or emergency care.</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="tel:8005864621" className="btn-secondary">
                <Phone size={16} />
                <span>Call (800) 586-4621</span>
              </a>
              <a href="https://wa.me/18005864621" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: '#25d366' }}>
                <MessageCircle size={16} />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
