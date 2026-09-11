'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Sparkles, Music } from 'lucide-react';
import styles from './SoundscapePlayer.module.css';

export function SoundscapePlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  const startSoundscape = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 1.2);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // 432Hz Harmonic Solfeggio soothing chord: 216Hz, 324Hz, 432Hz, 540Hz
      const frequencies = [216, 324, 432, 540];
      const oscs: OscillatorNode[] = [];

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const lfo = ctx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(0.18 + idx * 0.06, ctx.currentTime);

        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(1.2, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start();

        const individualVolume = idx === 0 ? 0.35 : idx === 1 ? 0.2 : idx === 2 ? 0.25 : 0.15;
        oscGain.gain.setValueAtTime(individualVolume, ctx.currentTime);

        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
        oscs.push(osc);
      });

      oscillatorsRef.current = oscs;
      setIsPlaying(true);
    } catch (e) {
      console.warn('AudioContext not permitted or unsupported', e);
    }
  };

  const stopSoundscape = () => {
    if (audioCtxRef.current && gainNodeRef.current) {
      try {
        gainNodeRef.current.gain.linearRampToValueAtTime(0, audioCtxRef.current.currentTime + 0.6);
        setTimeout(() => {
          oscillatorsRef.current.forEach(osc => {
            try { osc.stop(); } catch (_) {}
          });
          oscillatorsRef.current = [];
          if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
            audioCtxRef.current.close();
          }
          setIsPlaying(false);
        }, 700);
      } catch (err) {
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(false);
    }
  };

  const togglePlayback = () => {
    if (isPlaying) {
      stopSoundscape();
    } else {
      startSoundscape();
    }
  };

  useEffect(() => {
    return () => {
      stopSoundscape();
    };
  }, []);

  return (
    <motion.div 
      className={styles.playerCard}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className={styles.leftMeta}>
        <div className={styles.iconCircle}>
          <Music size={18} color="var(--primary)" />
        </div>
        <div>
          <div className={styles.titleRow}>
            <span className={styles.playerTitle}>Lumina 432Hz Calm Lounge Atmosphere</span>
            <span className={styles.activeTag}>
              <Sparkles size={11} /> Acoustic Sanctuary
            </span>
          </div>
          <p className={styles.playerDesc}>
            Experience the soothing frequency played through Bose noise-canceling headphones in our Clifton &amp; Gulberg treatment suites.
          </p>
        </div>
      </div>

      <div className={styles.controlsRow}>
        {/* Animated Soundwave Visualizer */}
        <div className={styles.waveVisualizer}>
          {[40, 75, 100, 60, 85, 45, 90, 65].map((height, i) => (
            <motion.span
              key={i}
              className={styles.waveBar}
              animate={{
                height: isPlaying ? [`${height * 0.3}%`, `${height}%`, `${height * 0.2}%`] : '18%',
                opacity: isPlaying ? [0.6, 1, 0.7] : 0.35,
              }}
              transition={{
                repeat: Infinity,
                duration: 1.1 + (i % 3) * 0.25,
                ease: 'easeInOut',
                delay: i * 0.12,
              }}
            />
          ))}
        </div>

        <button 
          onClick={togglePlayback}
          className={`${styles.playBtn} ${isPlaying ? styles.isPlaying : ''}`}
          aria-label={isPlaying ? 'Pause acoustic atmosphere' : 'Play acoustic atmosphere'}
        >
          {isPlaying ? (
            <>
              <VolumeX size={16} />
              <span>Mute Ambience</span>
            </>
          ) : (
            <>
              <Volume2 size={16} />
              <span>Preview Lounge Audio</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
