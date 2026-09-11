'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Sparkles, MessageCircle, ArrowRight, ShieldCheck, Check, Info } from 'lucide-react';
import styles from './SmileCalculator.module.css';

type TreatmentType = 'veneers' | 'whitening' | 'implants' | 'hygiene';

export function SmileCalculator() {
  const [treatment, setTreatment] = useState<TreatmentType>('veneers');
  const [veneerCount, setVeneerCount] = useState<number>(8);
  const [implantCount, setImplantCount] = useState<number>(1);
  const [gumContouring, setGumContouring] = useState<boolean>(false);
  const [nightGuard, setNightGuard] = useState<boolean>(true);
  const [isSimulationSelected, setIsSimulationSelected] = useState<boolean>(true);

  // Prices in PKR
  const VENEER_UNIT_PRICE = 45000;
  const WHITENING_PRICE = 28000;
  const IMPLANT_UNIT_PRICE = 95000;
  const HYGIENE_PRICE = 8500;
  const GUM_CONTOURING_PRICE = 15000;
  const NIGHT_GUARD_PRICE = 12000;

  const { total, timeCommitment, emiMonthly } = useMemo(() => {
    let base = 0;
    let time = '1 visit (45 mins)';

    if (treatment === 'veneers') {
      base = veneerCount * VENEER_UNIT_PRICE;
      time = '2 visits (7–10 days)';
    } else if (treatment === 'whitening') {
      base = WHITENING_PRICE;
      time = '1 in-studio session (60 mins)';
    } else if (treatment === 'implants') {
      base = implantCount * IMPLANT_UNIT_PRICE;
      time = 'Same-day provisional placement';
    } else if (treatment === 'hygiene') {
      base = HYGIENE_PRICE;
      time = '1 session (45 mins)';
    }

    if (treatment === 'veneers' || treatment === 'whitening' || treatment === 'implants') {
      if (gumContouring) base += GUM_CONTOURING_PRICE;
      if (nightGuard) base += NIGHT_GUARD_PRICE;
    }

    const emi = Math.round(base / 6);

    return { total: base, timeCommitment: time, emiMonthly: emi };
  }, [treatment, veneerCount, implantCount, gumContouring, nightGuard]);

  const whatsappMessage = encodeURIComponent(
    `Hi Lumina Studio! I calculated an estimate for ${
      treatment === 'veneers' ? `${veneerCount} Swiss Porcelain Veneers` :
      treatment === 'whitening' ? 'Enlighten Laser Whitening' :
      treatment === 'implants' ? `${implantCount} Guided 3D Implant(s)` : 'Holistic Hygiene'
    } (Estimated Total: Rs. ${total.toLocaleString()}). I would like to schedule a consultation with Dr. Ayesha.`
  );

  return (
    <section className={styles.sectionWrapper} id="calculator">
      <div className="container">
        <div className={styles.headerBox}>
          <span className="section-tag">
            <Calculator size={13} style={{ display: 'inline', marginRight: '5px' }} />
            Interactive Smile Estimator
          </span>
          <h2 className="section-title">Design & Estimate Your Transformation</h2>
          <p className="section-subtitle">
            Transparent, zero-surprise investment planning. Calculate your customized smile makeover with 0% EMI installment options.
          </p>
        </div>

        <div className={styles.calculatorCard}>
          {/* Left Column: Selectors */}
          <div className={styles.configColumn}>
            {/* Treatment Selector */}
            <div className={styles.fieldSection}>
              <label className={styles.fieldLabel}>Select Primary Treatment</label>
              <div className={styles.treatmentGrid}>
                {[
                  { key: 'veneers', label: 'Swiss Porcelain Veneers', sub: 'Rs. 45,000 / tooth' },
                  { key: 'whitening', label: 'Enlighten Laser Whitening', sub: 'Rs. 28,000 full smile' },
                  { key: 'implants', label: 'Guided 3D Implants', sub: 'Rs. 95,000 / unit' },
                  { key: 'hygiene', label: 'Airflow Preventive Spa', sub: 'Rs. 8,500 session' },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    className={`${styles.treatmentPill} ${treatment === item.key ? styles.treatmentPillActive : ''}`}
                    onClick={() => setTreatment(item.key as TreatmentType)}
                  >
                    <span className={styles.pillTitle}>{item.label}</span>
                    <span className={styles.pillSub}>{item.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Veneer Count Selector */}
            {treatment === 'veneers' && (
              <motion.div 
                className={styles.fieldSection}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
              >
                <div className={styles.labelRow}>
                  <label className={styles.fieldLabel}>Number of Teeth to Restore</label>
                  <span className={styles.countPreview}>{veneerCount} Veneers</span>
                </div>
                <div className={styles.countGrid}>
                  {[
                    { count: 4, title: '4 Teeth', desc: 'Central Focus' },
                    { count: 6, title: '6 Teeth', desc: 'Social Six (Canine to Canine)' },
                    { count: 8, title: '8 Teeth', desc: 'Full Smile Window (Most Popular)' },
                    { count: 10, title: '10 Teeth', desc: 'Full Upper Aesthetic Arch' },
                  ].map((option) => (
                    <button
                      key={option.count}
                      type="button"
                      className={`${styles.countButton} ${veneerCount === option.count ? styles.countButtonActive : ''}`}
                      onClick={() => setVeneerCount(option.count)}
                    >
                      <div className={styles.countBtnTitle}>{option.title}</div>
                      <div className={styles.countBtnDesc}>{option.desc}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Implant Count Selector */}
            {treatment === 'implants' && (
              <motion.div 
                className={styles.fieldSection}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
              >
                <div className={styles.labelRow}>
                  <label className={styles.fieldLabel}>Number of Dental Implants Needed</label>
                  <span className={styles.countPreview}>{implantCount} Unit(s)</span>
                </div>
                <div className={styles.countGrid}>
                  {[1, 2, 3, 4].map((n) => (
                    <button
                      key={n}
                      type="button"
                      className={`${styles.countButton} ${implantCount === n ? styles.countButtonActive : ''}`}
                      onClick={() => setImplantCount(n)}
                    >
                      <div className={styles.countBtnTitle}>{n} {n === 1 ? 'Implant' : 'Implants'}</div>
                      <div className={styles.countBtnDesc}>3D Guided Surgery</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Curated Aesthetic Add-ons */}
            {(treatment === 'veneers' || treatment === 'whitening' || treatment === 'implants') && (
              <div className={styles.fieldSection}>
                <label className={styles.fieldLabel}>Clinical & Protective Enhancements</label>
                <div className={styles.addonList}>
                  <label className={styles.addonItem}>
                    <input
                      type="checkbox"
                      checked={gumContouring}
                      onChange={(e) => setGumContouring(e.target.checked)}
                      className={styles.checkbox}
                    />
                    <div>
                      <div className={styles.addonTitle}>Laser Gingival Gum Symmetry & Contouring</div>
                      <div className={styles.addonDesc}>Even out gumlines to reveal ideal golden-ratio tooth proportions (+Rs. 15,000)</div>
                    </div>
                  </label>

                  <label className={styles.addonItem}>
                    <input
                      type="checkbox"
                      checked={nightGuard}
                      onChange={(e) => setNightGuard(e.target.checked)}
                      className={styles.checkbox}
                    />
                    <div>
                      <div className={styles.addonTitle}>Bespoke Night Guard for Enamel Protection</div>
                      <div className={styles.addonDesc}>Custom-milled night retainer shielding your porcelain from nighttime clenching (+Rs. 12,000)</div>
                    </div>
                  </label>

                  <label className={styles.addonItem}>
                    <input
                      type="checkbox"
                      checked={isSimulationSelected}
                      onChange={(e) => setIsSimulationSelected(e.target.checked)}
                      className={styles.checkbox}
                    />
                    <div>
                      <div className={styles.addonTitle}>AI 3D Digital Smile Simulation</div>
                      <div className={styles.addonDesc}>Preview photorealistic 3D outcome before procedure commences (Complimentary)</div>
                    </div>
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Live Summary & Quote */}
          <div className={styles.summaryColumn}>
            <div className={styles.summaryBox}>
              <span className={styles.summaryBadge}>
                <Sparkles size={13} color="#38bdf8" />
                Live Clinical Estimate
              </span>

              <div className={styles.totalBlock}>
                <div className={styles.totalLabel}>Estimated Total Investment</div>
                <div className={styles.totalAmount}>Rs. {total.toLocaleString()}</div>
                <div className={styles.totalSub}>Inclusive of German Lab Milling & Swiss Ceramics</div>
              </div>

              <div className={styles.divider} />

              <div className={styles.infoRow}>
                <span className={styles.infoKey}>Expected Timeline:</span>
                <span className={styles.infoVal}>{timeCommitment}</span>
              </div>

              <div className={styles.infoRow}>
                <span className={styles.infoKey}>Pain Rating:</span>
                <span className={styles.infoVal} style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>0/10 (Gentle Wand™)</span>
              </div>

              <div className={styles.emiCard}>
                <div className={styles.emiHeader}>
                  <Info size={15} color="#0e7490" />
                  <strong>0% EMI Bank Installment Option</strong>
                </div>
                <div className={styles.emiAmount}>
                  Rs. {emiMonthly.toLocaleString()} <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>/ month (6 Months)</span>
                </div>
                <div className={styles.emiBanks}>
                  Via Standard Chartered, Habib Metro & Bank Alfalah
                </div>
              </div>

              <div className={styles.actionBlock}>
                <a
                  href={`https://wa.me/923005864621?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  <MessageCircle size={18} />
                  <span>Send Estimate to WhatsApp Concierge</span>
                </a>

                <a href="/booking" className={styles.bookBtn}>
                  <span>Book Consultation for This Treatment</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className={styles.assuranceNote}>
                <ShieldCheck size={14} color="#10b981" />
                <span>Exact treatment plans confirmed following digital 3D intraoral scans.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
