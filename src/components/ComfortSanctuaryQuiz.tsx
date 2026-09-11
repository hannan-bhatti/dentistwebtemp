'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HeartHandshake, 
  Sparkles, 
  Headphones, 
  Tv, 
  Coffee, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw,
  MessageCircle
} from 'lucide-react';
import styles from './ComfortSanctuaryQuiz.module.css';

export function ComfortSanctuaryQuiz() {
  const [step, setStep] = useState(1);
  const [anxietyTrigger, setAnxietyTrigger] = useState<string>('Needle or Injection Fear');
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([
    'Bose Noise-Canceling Audio',
    'Gentle Wand™ Zero-Pinch Numbing'
  ]);
  const [refreshment, setRefreshment] = useState<string>('Freshly Brewed Kashmiri Kahwa');

  const toggleAmenity = (item: string) => {
    if (selectedAmenities.includes(item)) {
      if (selectedAmenities.length > 1) {
        setSelectedAmenities(selectedAmenities.filter(i => i !== item));
      }
    } else {
      setSelectedAmenities([...selectedAmenities, item]);
    }
  };

  const resetQuiz = () => {
    setStep(1);
  };

  return (
    <div className={styles.quizCard}>
      <div className={styles.quizHeader}>
        <div className={styles.tagBadge}>
          <HeartHandshake size={14} color="#0e7490" />
          <span>Personalized Sanctuary Experience</span>
        </div>
        <h3 className={styles.title}>Design Your Zero-Fear Dental Visit</h3>
        <p className={styles.subtitle}>
          Lifelong dental anxiety stops at Lumina. Answer 2 quick questions to generate your customized VIP Calm Passport.
        </p>

        {step < 3 && (
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${(step / 2) * 100}%` }} 
            />
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={styles.stepContent}
          >
            <div className={styles.questionLabel}>
              <span className={styles.stepNumber}>Question 1 of 2:</span>
              What has caused you the most discomfort in past dental visits?
            </div>

            <div className={styles.optionsGrid}>
              {[
                { title: 'Needle or Syringe Pinch', solution: 'We use the computerized Wand™ for 100% pinch-free micro-numbing.' },
                { title: 'Drilling & Motor Whirring', solution: 'We provide Bose active noise-canceling headsets with spatial soundscapes.' },
                { title: 'Dental Claustrophobia / Anxiety', solution: 'We offer Twilight nitrous oxide relaxation and conscious sedation.' },
                { title: 'Pain or Sensitive Teeth', solution: 'Swiss ultrasonic Airflow technology eliminates traditional scraping.' },
              ].map((opt) => (
                <button
                  key={opt.title}
                  type="button"
                  className={`${styles.optionBtn} ${anxietyTrigger === opt.title ? styles.optionBtnActive : ''}`}
                  onClick={() => setAnxietyTrigger(opt.title)}
                >
                  <div className={styles.optionHeader}>
                    <div className={styles.optionTitle}>{opt.title}</div>
                    {anxietyTrigger === opt.title && <CheckCircle2 size={16} color="var(--primary)" />}
                  </div>
                  <div className={styles.optionSolution}>{opt.solution}</div>
                </button>
              ))}
            </div>

            <div className={styles.btnRow}>
              <button 
                type="button" 
                className={styles.nextBtn}
                onClick={() => setStep(2)}
              >
                <span>Continue to Comfort Selection</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={styles.stepContent}
          >
            <div className={styles.questionLabel}>
              <span className={styles.stepNumber}>Question 2 of 2:</span>
              Choose your sanctuary sensory & lounge preferences:
            </div>

            <div className={styles.amenitiesGrid}>
              {[
                { name: 'Bose Noise-Canceling Audio', icon: Headphones },
                { name: 'Ceiling 4K Nature Visuals', icon: Tv },
                { name: 'Gentle Wand™ Zero-Pinch Numbing', icon: Sparkles },
                { name: 'Warm Herbal Lavender Towel', icon: HeartHandshake },
              ].map((item) => {
                const isSelected = selectedAmenities.includes(item.name);
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    type="button"
                    className={`${styles.amenityPill} ${isSelected ? styles.amenityPillActive : ''}`}
                    onClick={() => toggleAmenity(item.name)}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                    {isSelected && <span className={styles.checkMark}>✓</span>}
                  </button>
                );
              })}
            </div>

            <div style={{ marginTop: '1.25rem' }}>
              <label className={styles.subLabel}>Complimentary Foyer Refreshment:</label>
              <div className={styles.refreshmentRow}>
                {[
                  'Freshly Brewed Kashmiri Kahwa',
                  'Organic Mint Herbal Infusion',
                  'Artisanal Espresso Roast',
                  'Chilled Sparkling Mineral Water'
                ].map((drink) => (
                  <button
                    key={drink}
                    type="button"
                    className={`${styles.drinkBtn} ${refreshment === drink ? styles.drinkBtnActive : ''}`}
                    onClick={() => setRefreshment(drink)}
                  >
                    <Coffee size={14} />
                    <span>{drink}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.btnRowDual}>
              <button 
                type="button" 
                className={styles.backBtn}
                onClick={() => setStep(1)}
              >
                Back
              </button>
              <button 
                type="button" 
                className={styles.nextBtn}
                onClick={() => setStep(3)}
              >
                <span>Generate My VIP Calm Passport</span>
                <Sparkles size={16} />
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className={styles.passportContainer}
          >
            <div className={styles.passportCard}>
              <div className={styles.passportTop}>
                <div className={styles.goldSeal}>
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <div className={styles.passportTitle}>Lumina VIP Calm Passport</div>
                  <div className={styles.passportSub}>Registered to Clifton & Gulberg Studios</div>
                </div>
              </div>

              <div className={styles.passportBody}>
                <div className={styles.passportRow}>
                  <span className={styles.passportKey}>Primary Consideration:</span>
                  <span className={styles.passportVal}>{anxietyTrigger}</span>
                </div>

                <div className={styles.passportRow}>
                  <span className={styles.passportKey}>Tailored Protocol:</span>
                  <span className={styles.passportVal}>Computer-Regulated Wand™ Micro-Anesthesia</span>
                </div>

                <div className={styles.passportRow}>
                  <span className={styles.passportKey}>Chosen Comforts:</span>
                  <span className={styles.passportVal}>{selectedAmenities.join(' • ')}</span>
                </div>

                <div className={styles.passportRow}>
                  <span className={styles.passportKey}>Foyer Hospitality:</span>
                  <span className={styles.passportVal}>{refreshment}</span>
                </div>
              </div>

              <div className={styles.passportFooter}>
                <div className={styles.guaranteeText}>
                  ★ 99.4% Verified Pain-Free Clinical Record. Our clinical team reviews your passport prior to seating.
                </div>
              </div>
            </div>

            <div className={styles.passportActions}>
              <a 
                href={`/booking?comfort=${encodeURIComponent(selectedAmenities.join(','))}`} 
                className={styles.primaryAction}
              >
                <span>Reserve Visit with My Calm Passport</span>
                <ArrowRight size={16} />
              </a>

              <a 
                href={`https://wa.me/923005864621?text=${encodeURIComponent(`Hi Lumina Studio, I created my VIP Calm Passport. My primary concern is: ${anxietyTrigger}. I would like to request ${selectedAmenities.join(', ')} for my visit.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappAction}
              >
                <MessageCircle size={16} />
                <span>Send Passport to WhatsApp Concierge</span>
              </a>

              <button 
                type="button" 
                onClick={resetQuiz} 
                className={styles.resetBtn}
              >
                <RotateCcw size={14} />
                <span>Modify Preferences</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
