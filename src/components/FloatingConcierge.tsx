'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Calendar, Phone, Clock, Sparkles } from 'lucide-react';
import Link from 'next/link';
import styles from './FloatingConcierge.module.css';

export function FloatingConcierge() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.conciergeContainer}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.conciergeCard}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.avatarGroup}>
                <div className={styles.statusDot}></div>
                <div>
                  <div className={styles.cardTitle}>VIP Clinical Concierge</div>
                  <div className={styles.cardSubtitle}>Clifton, Karachi &amp; Gulberg, Lahore</div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className={styles.closeBtn}
                aria-label="Close concierge"
              >
                <X size={16} />
              </button>
            </div>

            <div className={styles.cardBody}>
              <p className={styles.cardIntro}>
                Welcome to Lumina Dental Studio. How may our concierge team assist your smile today?
              </p>

              <div className={styles.actionList}>
                <a 
                  href="https://wa.me/923005864621?text=Hello%20Lumina%20Dental%20Studio%2C%20I%20would%20like%20to%20inquire%20about%20a%20private%20consultation." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.actionItemWhatsApp}
                >
                  <MessageCircle size={18} />
                  <div className={styles.actionText}>
                    <div className={styles.actionTitle}>Chat on WhatsApp</div>
                    <div className={styles.actionDesc}>Instant replies from our clinical lead</div>
                  </div>
                </a>

                <Link 
                  href="/booking" 
                  onClick={() => setIsOpen(false)}
                  className={styles.actionItemBooking}
                >
                  <Calendar size={18} />
                  <div className={styles.actionText}>
                    <div className={styles.actionTitle}>Check Live Calendar</div>
                    <div className={styles.actionDesc}>Reserve priority slot with Dr. Ayesha</div>
                  </div>
                </Link>

                <a 
                  href="tel:+922135874621"
                  className={styles.actionItemCall}
                >
                  <Phone size={18} />
                  <div className={styles.actionText}>
                    <div className={styles.actionTitle}>Call Direct: (021) 3587-4621</div>
                    <div className={styles.actionDesc}>Clifton Studio Front Desk</div>
                  </div>
                </a>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <Clock size={12} />
              <span>Avg wait time: 3 mins • 100% Confidential</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={styles.floatingTrigger}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle VIP Concierge"
      >
        <div className={styles.triggerPulse}></div>
        {isOpen ? <X size={20} /> : <MessageCircle size={22} />}
        <span className={styles.triggerLabel}>Concierge</span>
      </motion.button>
    </div>
  );
}
