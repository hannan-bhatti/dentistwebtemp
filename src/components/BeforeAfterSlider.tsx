'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, MoveHorizontal } from 'lucide-react';
import styles from './BeforeAfterSlider.module.css';

interface BeforeAfterSliderProps {
  imageSrc?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  imageSrc = '/images/smile-transformation.jpg',
  beforeLabel = 'Before: Enamel Wear & Fluorosis',
  afterLabel = 'After: 8 Swiss Porcelain Veneers'
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div className={styles.wrapper}>
      <div 
        ref={containerRef}
        className={styles.container}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchMove={handleTouchMove}
        role="slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-label="Before and after smile comparison slider"
        tabIndex={0}
      >
        {/* Layer 1: AFTER Image (Right half centered) */}
        <div className={styles.imageLayer}>
          <div className={styles.imageCropperRight}>
            <Image
              src={imageSrc}
              alt={afterLabel}
              fill
              className={styles.imgRight}
              priority
            />
          </div>
          <div className={styles.badgeAfter}>
            <Sparkles size={12} color="#0e7490" />
            <span>{afterLabel}</span>
          </div>
        </div>

        {/* Layer 2: BEFORE Image (Left half centered with clip-path) */}
        <div 
          className={styles.imageLayer}
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className={styles.imageCropperLeft}>
            <Image
              src={imageSrc}
              alt={beforeLabel}
              fill
              className={styles.imgLeft}
              priority
            />
          </div>
          <div className={styles.badgeBefore}>
            <span>{beforeLabel}</span>
          </div>
        </div>

        {/* Divider Bar & Handle */}
        <div 
          className={styles.divider}
          style={{ left: `${sliderPosition}%` }}
        >
          <motion.div 
            className={styles.handle}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
          >
            <MoveHorizontal size={18} color="#083344" />
          </motion.div>
        </div>

        {/* Interactive Prompt Hint */}
        <div className={styles.dragHint}>
          <span>Drag to Compare</span>
        </div>
      </div>
    </div>
  );
}
