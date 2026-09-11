'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './booking.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar as CalendarIcon, 
  FileText, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Shield, 
  Clock, 
  UserCheck, 
  Sparkles, 
  MapPin,
  CalendarCheck,
  Check
} from 'lucide-react';

interface BookingClientProps {
  calcomLink?: string;
  tallyUrl?: string;
}

export function BookingClientWrapper({ calcomLink, tallyUrl }: BookingClientProps) {
  const searchParams = useSearchParams();

  // Read query params from hero quick-booking bar if present
  const initialService = searchParams.get('service') || 'cosmetic-veneers';
  const initialDoctor = searchParams.get('doctor') || 'dr-elena';
  const initialTimePeriod = searchParams.get('time') || 'morning';

  // State for Step 1: Slot choosing
  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedDoctor, setSelectedDoctor] = useState(initialDoctor);

  // Generate upcoming 5 weekdays starting from current date
  const upcomingDays = useMemo(() => {
    const days = [];
    const base = new Date();
    let count = 0;
    let offset = 0;

    while (count < 5) {
      const d = new Date(base);
      d.setDate(base.getDate() + offset);
      // skip Sunday (0) and Saturday (6) for regular appointments
      const dayOfWeek = d.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        days.push({
          dateObj: d,
          dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
          dayNum: d.getDate(),
          monthName: d.toLocaleDateString('en-US', { month: 'short' }),
          fullDateString: d.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }),
        });
        count++;
      }
      offset++;
    }
    return days;
  }, []);

  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(
    initialTimePeriod === 'afternoon' ? '01:45 PM' : (initialTimePeriod === 'evening' ? '04:15 PM' : '10:15 AM')
  );

  // State for Step 2: Intake check-in form
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [dentalConcerns, setDentalConcerns] = useState('');
  const [selectedComfort, setSelectedComfort] = useState<string[]>(['Noise-canceling headphones']);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleComfort = (item: string) => {
    if (selectedComfort.includes(item)) {
      setSelectedComfort(selectedComfort.filter(i => i !== item));
    } else {
      setSelectedComfort([...selectedComfort, item]);
    }
  };

  const handleIntakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const doctorNames: Record<string, string> = {
    'dr-elena': 'Dr. Ayesha Tariq Siddiqui, BDS, MSc (Cosmetic Lead)',
    'dr-marcus': 'Prof. Dr. Farhan Alvi, FCPS, MFDSRCS (Guided Implants)',
    'any': 'First Available Clinical Specialist'
  };

  const serviceNames: Record<string, string> = {
    'cosmetic-veneers': 'Handcrafted Porcelain Veneers',
    'cosmetic-whitening': 'Laser Teeth Whitening',
    'general-cleaning': 'Holistic Preventive Hygiene',
    'surgical-implants': 'Guided 3D Dental Implants',
    'emergency': 'Emergency Priority Consultation'
  };

  const selectedDay = upcomingDays[selectedDayIndex] || upcomingDays[0];

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
              <div className={styles.stepNum} style={{ background: isSubmitted ? 'var(--accent-emerald)' : 'var(--primary)' }}>2</div>
              <span>Quick Digital Intake</span>
            </div>
            <div style={{ color: 'var(--text-muted)' }}>→</div>
            <div className={styles.stepItem}>
              <div 
                className={styles.stepNum} 
                style={{ 
                  background: isSubmitted ? 'var(--accent-emerald)' : 'var(--bg-subtle)',
                  color: isSubmitted ? '#ffffff' : 'var(--text-muted)',
                  border: isSubmitted ? 'none' : '1px solid var(--border-subtle)'
                }}
              >
                ✓
              </div>
              <span style={{ color: isSubmitted ? 'var(--accent-emerald)' : 'inherit' }}>Instant Confirmation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Portal Split */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.portalContainer}>
            {/* Step 1: Interactive Concierge Slot Chooser */}
            <motion.div 
              className={styles.bookingCard}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <CalendarIcon size={24} />
                </div>
                <div>
                  <h2 className={styles.cardTitle}>Step 1: Choose Your Slot</h2>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>Real-time Concierge Sync</span>
                </div>
              </div>
              <p className={styles.cardDesc}>
                Select an open consultation window with Dr. Ayesha Tariq Siddiqui or Prof. Dr. Farhan Alvi. You will receive an instant calendar invite and SMS reminder.
              </p>

              <div className={styles.schedulerSection}>
                {/* Desired Service Selection */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    <Sparkles size={14} color="var(--primary)" />
                    Clinical Service
                  </label>
                  <select 
                    className={styles.customSelect}
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                  >
                    <option value="cosmetic-veneers">Handcrafted Porcelain Veneers</option>
                    <option value="cosmetic-whitening">Enlighten Laser Whitening</option>
                    <option value="general-cleaning">Holistic Preventive Hygiene</option>
                    <option value="surgical-implants">Guided 3D Dental Implants</option>
                    <option value="emergency">Emergency Priority Consultation</option>
                  </select>
                </div>

                {/* Specialist Selection */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    <UserCheck size={14} color="var(--primary)" />
                    Select Specialist
                  </label>
                  <select 
                    className={styles.customSelect}
                    value={selectedDoctor}
                    onChange={(e) => setSelectedDoctor(e.target.value)}
                  >
                    <option value="dr-elena">Dr. Ayesha Tariq Siddiqui (Cosmetic & Veneers)</option>
                    <option value="dr-marcus">Prof. Dr. Farhan Alvi (Guided Implants & Surgery)</option>
                    <option value="any">First Available Clinical Specialist</option>
                  </select>
                </div>

                {/* Date Strip */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    <CalendarIcon size={14} color="var(--primary)" />
                    Select Consultation Date
                  </label>
                  <div className={styles.dateStrip}>
                    {upcomingDays.map((day, idx) => {
                      const isActive = selectedDayIndex === idx;
                      return (
                        <button
                          key={day.dayName + day.dayNum}
                          type="button"
                          className={`${styles.datePill} ${isActive ? styles.datePillActive : ''}`}
                          onClick={() => setSelectedDayIndex(idx)}
                        >
                          <span className={styles.dateDay}>{day.dayName}</span>
                          <span className={styles.dateNum}>{day.dayNum}</span>
                          <span className={styles.dateMonth}>{day.monthName}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Available Slots */}
                <div className={styles.slotsContainer}>
                  <div className={styles.slotPeriodTitle}>
                    <Clock size={13} style={{ display: 'inline', marginRight: '4px' }} />
                    Morning Windows
                  </div>
                  <div className={styles.slotGrid}>
                    {['09:00 AM', '10:15 AM', '11:30 AM'].map((slot) => {
                      const isActive = selectedSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          className={`${styles.slotBtn} ${isActive ? styles.slotBtnActive : ''}`}
                          onClick={() => setSelectedSlot(slot)}
                        >
                          {isActive && <Check size={14} />}
                          {slot}
                        </button>
                      );
                    })}
                  </div>

                  <div className={styles.slotPeriodTitle}>
                    <Clock size={13} style={{ display: 'inline', marginRight: '4px' }} />
                    Afternoon Windows
                  </div>
                  <div className={styles.slotGrid}>
                    {['01:45 PM', '03:00 PM', '04:15 PM'].map((slot) => {
                      const isActive = selectedSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          className={`${styles.slotBtn} ${isActive ? styles.slotBtnActive : ''}`}
                          onClick={() => setSelectedSlot(slot)}
                        >
                          {isActive && <Check size={14} />}
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Selected Summary Card */}
                <div className={styles.selectedSummary}>
                  <div className={styles.summaryText}>
                    <span className={styles.summaryDoc}>
                      {doctorNames[selectedDoctor] || doctorNames['dr-elena']}
                    </span>
                    <span className={styles.summaryTime}>
                      {selectedDay.fullDateString} at {selectedSlot} (45 min session)
                    </span>
                  </div>
                  <CheckCircle2 size={20} color="var(--primary)" />
                </div>
              </div>
            </motion.div>

            {/* Step 2: Digital Patient Intake & Check-in */}
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

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className={styles.cardDesc}>
                      Save 15 minutes in the clinic by submitting your health background and aesthetic smile goals before your visit.
                    </p>

                    <form onSubmit={handleIntakeSubmit} className={styles.intakeForm}>
                      <div className={styles.fieldGroup}>
                        <label className={styles.fieldLabel}>Full Legal Name *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g., Alexandra Vance" 
                          className={styles.formInput}
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                        />
                      </div>

                      <div className={styles.twoCol}>
                        <div className={styles.fieldGroup}>
                          <label className={styles.fieldLabel}>Mobile Number *</label>
                          <input 
                            type="tel" 
                            required
                            placeholder="(305) 555-0199" 
                            className={styles.formInput}
                            value={patientPhone}
                            onChange={(e) => setPatientPhone(e.target.value)}
                          />
                        </div>
                        <div className={styles.fieldGroup}>
                          <label className={styles.fieldLabel}>Email Address *</label>
                          <input 
                            type="email" 
                            required
                            placeholder="alexandra@luxury.com" 
                            className={styles.formInput}
                            value={patientEmail}
                            onChange={(e) => setPatientEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className={styles.fieldGroup}>
                        <label className={styles.fieldLabel}>Lounge Comfort Preferences (Optional)</label>
                        <div className={styles.tagPillContainer}>
                          {[
                            'Noise-canceling headphones',
                            'Nitrous oxide relaxation',
                            'Aromatherapy eye mask',
                            'Warm scented towel'
                          ].map((item) => {
                            const isChosen = selectedComfort.includes(item);
                            return (
                              <button
                                key={item}
                                type="button"
                                className={`${styles.tagPill} ${isChosen ? styles.tagPillActive : ''}`}
                                onClick={() => toggleComfort(item)}
                              >
                                {isChosen ? '✓ ' : '+ '} {item}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className={styles.fieldGroup}>
                        <label className={styles.fieldLabel}>Chief Aesthetic Goal or Health Notes</label>
                        <textarea 
                          rows={3} 
                          placeholder="e.g., Interested in 8 upper porcelain veneers; slight sensitivity on lower left molar..." 
                          className={styles.formTextarea}
                          value={dentalConcerns}
                          onChange={(e) => setDentalConcerns(e.target.value)}
                        />
                      </div>

                      <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                        <Shield size={18} />
                        <span>{isSubmitting ? 'Securing Your Slot...' : 'Confirm & Reserve Appointment'}</span>
                      </button>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                        <Shield size={12} color="var(--accent-emerald)" />
                        <span>256-Bit SSL Encrypted &bull; Strictly Confidential HIPAA Record</span>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="confirmation"
                    className={styles.confirmationContainer}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.confirmIconBox}>
                      <CalendarCheck size={32} />
                    </div>
                    <h3 className={styles.confirmTitle}>Appointment Reserved!</h3>
                    <p className={styles.confirmSub}>
                      Thank you, <strong>{patientName || 'Guest'}</strong>. Your consultation has been synchronized with Lumina Studio.
                    </p>

                    <div className={styles.confirmDetailCard}>
                      <div className={styles.confirmDetailRow}>
                        <span>Service:</span>
                        <span>{serviceNames[selectedService] || selectedService}</span>
                      </div>
                      <div className={styles.confirmDetailRow}>
                        <span>Doctor:</span>
                        <span>{doctorNames[selectedDoctor]}</span>
                      </div>
                      <div className={styles.confirmDetailRow}>
                        <span>Date & Time:</span>
                        <span>{selectedDay.fullDateString} at {selectedSlot}</span>
                      </div>
                      <div className={styles.confirmDetailRow}>
                        <span>Location:</span>
                        <span>Suite 302, Executive Tower, Marine Promenade, Clifton, Karachi</span>
                      </div>
                    </div>

                    <div className={styles.confirmActions}>
                      <a 
                        href={`https://wa.me/923005864621?text=Hi%20Lumina%20Studio,%20I%20just%20reserved%20an%20appointment%20for%20${encodeURIComponent(selectedDay.fullDateString)}%20at%20${encodeURIComponent(selectedSlot)}.%20Looking%20forward%20to%20my%20visit!`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary" 
                        style={{ background: '#25d366', justifyContent: 'center' }}
                      >
                        <MessageCircle size={16} />
                        <span>Open WhatsApp Concierge</span>
                      </a>
                      <button 
                        type="button" 
                        className="btn-secondary"
                        onClick={() => setIsSubmitted(false)}
                        style={{ justifyContent: 'center' }}
                      >
                        Modify or Book Another Slot
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Concierge Assistance Card */}
          <div style={{ marginTop: '3.5rem', background: 'var(--surface-white)', border: '1px solid var(--border-subtle)', borderRadius: '1.75rem', padding: '2rem 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.35rem' }}>Prefer Direct Concierge Assistance?</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>Our dedicated patient concierge is available to assist with treatment inquiries, overseas travel coordination, or emergency priority scheduling.</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="tel:+922135874621" className="btn-secondary">
                <Phone size={16} />
                <span>Call (021) 3587-4621</span>
              </a>
              <a href="https://wa.me/923005864621" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: '#25d366' }}>
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
