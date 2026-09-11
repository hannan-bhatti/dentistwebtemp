'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldAlert, Clock, MapPin } from 'lucide-react';
import styles from './LiveLoungeTicker.module.css';

export function LiveLoungeTicker() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.tickerBar}>
      <div className="container">
        <div className={styles.tickerInner}>
          <div className={styles.statusLeft}>
            <span className={styles.radarWrapper}>
              <span className={styles.radarPing} />
              <span className={styles.radarDot} />
            </span>
            <span className={styles.studioStatus}>
              <strong>Clifton Studio:</strong> Live Concierge Active
            </span>
            <span className={styles.divider}>•</span>
            <span className={styles.waitTimeBadge}>
              Zero Wait Time (Avg 3 Mins)
            </span>
            {timeString && (
              <>
                <span className={styles.divider}>•</span>
                <span className={styles.liveClock}>
                  <Clock size={12} style={{ display: 'inline', marginRight: '3px' }} />
                  {timeString} PKT
                </span>
              </>
            )}
          </div>

          <div className={styles.statusRight}>
            <span className={styles.slotNote}>
              Next Opening: <strong>Today at 2:30 PM</strong> (Dr. Ayesha)
            </span>
            <Link href="/booking" className={styles.priorityLink}>
              <span>Reserve Priority Slot</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
