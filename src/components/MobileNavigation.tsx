'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  Calendar, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Star
} from 'lucide-react';
import styles from './MobileNavigation.module.css';

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { href: '/#services', label: 'Bespoke Treatments', desc: 'Porcelain Veneers, Implants & Whitening' },
    { href: '/#transformations', label: 'Smile Gallery', desc: 'Real Before & After Case Studies' },
    { href: '/#experience', label: 'The Lumina Sanctuary', desc: '432Hz Audio, Zero Pain & Hospital Tech' },
    { href: '/#specialists', label: 'Our Specialists', desc: 'Dr. Ayesha Tariq & Prof. Dr. Farhan Alvi' },
    { href: '/#reviews', label: 'Patient Stories', desc: '850+ Verified 5-Star Experiences' },
    { href: '/#faq', label: 'Questions & Answers', desc: 'Pricing, Sedation & Sterilization' },
  ];

  return (
    <div className={styles.mobileNavWrapper}>
      {/* Quick Action Phone Dial for Mobile */}
      <a 
        href="tel:+922135874621" 
        className={styles.quickCallBtn}
        aria-label="Call clinic directly"
      >
        <Phone size={18} />
      </a>

      {/* Quick Book Header Pill */}
      <Link 
        href="/booking" 
        className={styles.quickBookBtn}
      >
        <Calendar size={14} />
        <span>Book</span>
      </Link>

      {/* Hamburger Toggle Button */}
      <button 
        className={styles.hamburgerBtn}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Slide-out Full Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.drawerOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              className={styles.drawerContent}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Header */}
              <div className={styles.drawerHeader}>
                <div>
                  <div className={styles.brandTitle}>LUMINA <span>STUDIO</span></div>
                  <div className={styles.brandSub}>Clifton, Karachi &amp; Gulberg, Lahore</div>
                </div>
                <button 
                  className={styles.drawerCloseBtn}
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Verified Trust Badges */}
              <div className={styles.badgeRow}>
                <span className={styles.trustBadge}>
                  <ShieldCheck size={12} color="#059669" /> PMDC Registered
                </span>
                <span className={styles.trustBadge}>
                  <Star size={12} fill="#f59e0b" color="#f59e0b" /> 4.9/5 Rating
                </span>
              </div>

              {/* Navigation Links */}
              <div className={styles.linksList}>
                {navLinks.map((item, idx) => (
                  <Link 
                    key={idx}
                    href={item.href}
                    className={styles.drawerLink}
                    onClick={() => setIsOpen(false)}
                  >
                    <div>
                      <div className={styles.linkTitle}>{item.label}</div>
                      <div className={styles.linkDesc}>{item.desc}</div>
                    </div>
                    <ChevronRight size={18} className={styles.linkArrow} />
                  </Link>
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <div className={styles.drawerActions}>
                <Link 
                  href="/booking" 
                  className={styles.actionBook}
                  onClick={() => setIsOpen(false)}
                >
                  <Calendar size={18} />
                  <span>Check Live Calendar &amp; Reserve</span>
                </Link>

                <a 
                  href="https://wa.me/923005864621?text=Hello%20Lumina%20Dental%20Studio%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionWhatsApp}
                >
                  <MessageCircle size={18} />
                  <span>Chat with Doctor on WhatsApp</span>
                </a>

                <a 
                  href="tel:+922135874621" 
                  className={styles.actionCall}
                >
                  <Phone size={18} />
                  <span>Direct Call: (021) 3587-4621</span>
                </a>
              </div>

              {/* Studio Info Footnote */}
              <div className={styles.drawerFooter}>
                <div className={styles.infoItem}>
                  <MapPin size={14} color="var(--primary)" />
                  <span>Marine Promenade, Clifton Block 4, Karachi</span>
                </div>
                <div className={styles.infoItem}>
                  <Clock size={14} color="var(--primary)" />
                  <span>Mon – Sat: 9:00 AM – 7:00 PM • Zero Wait Time</span>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
