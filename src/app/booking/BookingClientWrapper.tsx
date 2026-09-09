'use client';

import { useEffect } from 'react';
import styles from './booking.module.css';
import { motion } from 'framer-motion';
import { Calendar, FileText } from 'lucide-react';
import Cal, { getCalApi } from '@calcom/embed-react';

export function BookingClientWrapper({ calcomLink, tallyUrl }: { calcomLink: string, tallyUrl: string }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", { styles: { branding: { brandColor: "#0d9488" } }, hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', minHeight: 'calc(100vh - 4rem)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="section-title">Patient Portal</h1>
          <p className="section-subtitle">Book your appointment and complete your intake forms seamlessly.</p>
        </div>

        <div className={styles.portalContainer}>
          {/* Booking Embed */}
          <motion.div 
            className={styles.bookingSection}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Calendar className="text-primary-dark" size={28} color="var(--primary-dark)" />
              <h2 className={styles.portalTitle} style={{ margin: 0 }}>Step 1: Schedule</h2>
            </div>
            <p className={styles.portalDesc}>Select a date and time that works best for you. (Powered by Cal.com)</p>
            
            <div className={styles.mockEmbed} style={{ padding: 0, border: 'none', background: 'transparent' }}>
              <Cal 
                calLink={calcomLink}
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: "month_view" }}
              />
            </div>
          </motion.div>

          {/* Intake Forms Embed */}
          <motion.div 
            className={styles.intakeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <FileText className="text-primary-dark" size={28} color="var(--primary-dark)" />
              <h2 className={styles.portalTitle} style={{ margin: 0 }}>Step 2: Digital Intake</h2>
            </div>
            <p className={styles.portalDesc}>Save time by completing your medical history securely online. (Powered by Tally.so)</p>
            
            <div className={styles.mockEmbed} style={{ padding: 0, border: 'none', background: 'transparent', height: '500px' }}>
              <iframe 
                src={tallyUrl} 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0} 
                title="Intake Form"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
