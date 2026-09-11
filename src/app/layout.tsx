import type { Metadata } from 'next';
import './globals.css';
import { LuminaLogo } from '@/components/LuminaLogo';
import { MobileNavigation } from '@/components/MobileNavigation';
import { Phone, Calendar, Clock, MapPin, ArrowRight, Sparkles, MessageCircle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Lumina Dental Studio | Pakistan's Premier Aesthetic Dental Lounge",
  description: "Experience boutique, pain-free dental care in Clifton, Karachi & Gulberg, Lahore. Handcrafted Swiss porcelain veneers, German 3D guided implants, and bespoke digital smile design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Top Announcement Bar */}
        <div className="top-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={14} color="#38bdf8" />
            <span><strong>Accepting New Patients:</strong> Priority Emergency Consultations Across Karachi & Lahore</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span>Patient Desk: <strong>+92 (21) 3587-4621</strong></span>
            <a href="https://wa.me/923005864621" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <MessageCircle size={14} /> WhatsApp Care Desk
            </a>
          </div>
        </div>

        {/* Header */}
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/">
              <LuminaLogo />
            </Link>

            <nav className="nav-links">
              <Link href="/#services" className="nav-link">Treatments</Link>
              <Link href="/#transformations" className="nav-link">Smile Gallery</Link>
              <Link href="/#experience" className="nav-link">The Experience</Link>
              <Link href="/#specialists" className="nav-link">Specialists</Link>
              <Link href="/#reviews" className="nav-link">Patient Stories</Link>
              <Link href="/#faq" className="nav-link">FAQ</Link>
            </nav>

            <div className="nav-actions">
              <a href="tel:+922135874621" className="header-phone">
                <Phone size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span>(021) 3587-4621</span>
              </a>
              <Link href="/booking" className="btn-primary" style={{ padding: '0.65rem 1.45rem', fontSize: '0.875rem', whiteSpace: 'nowrap' }}>
                <Calendar size={15} style={{ flexShrink: 0 }} />
                <span>Book Visit</span>
              </Link>
            </div>

            {/* Mobile Navigation Drawer & Quick Actions */}
            <MobileNavigation />
          </div>
        </header>

        <main>{children}</main>

        {/* Luxury Footer */}
        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <Link href="/" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
                  <LuminaLogo variant="light" />
                </Link>
                <p style={{ maxWidth: '340px', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '0.925rem' }}>
                  Pakistan&apos;s premier boutique cosmetic and reconstructive dental lounge. Redefining the patient journey through soothing wellness, hospital-grade German sterilization, and virtually painless British-accredited care.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', background: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.75rem', borderRadius: '6px' }}>
                    <ShieldCheck size={13} color="#38bdf8" /> PMDC Registered
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', background: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.75rem', borderRadius: '6px' }}>
                    AACD Global Member
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', background: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.75rem', borderRadius: '6px' }}>
                    5.0 ★ Google Top Clinic
                  </span>
                </div>
              </div>

              <div className="footer-col">
                <h4>Treatments</h4>
                <ul>
                  <li><Link href="/services#cosmetic">Handcrafted Porcelain Veneers</Link></li>
                  <li><Link href="/services#cosmetic">Enlighten Laser Whitening</Link></li>
                  <li><Link href="/services#general">Holistic Airflow Hygiene</Link></li>
                  <li><Link href="/services#surgical">Guided 3D Dental Implants</Link></li>
                  <li><Link href="/services">Full Mouth Aesthetic Rehabilitation</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Practice</h4>
                <ul>
                  <li><Link href="/#experience">The Comfort Sanctuary</Link></li>
                  <li><Link href="/#specialists">Our Specialists</Link></li>
                  <li><Link href="/#transformations">Before & After Gallery</Link></li>
                  <li><Link href="/#faq">Sterilization & Safety</Link></li>
                  <li><Link href="/booking">Patient Reservation Portal</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Studio Hours &amp; Patient Care</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <MapPin size={18} color="#38bdf8" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <span>Suite 302, Executive Tower, Marine Promenade<br/>Clifton Block 4, Karachi, Pakistan</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Clock size={16} color="#38bdf8" style={{ flexShrink: 0 }} />
                    <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Phone size={16} color="#38bdf8" style={{ flexShrink: 0 }} />
                    <span>Direct: +92 (21) 3587-4621</span>
                  </div>
                  <div style={{ marginTop: '0.5rem' }}>
                    <Link href="/booking" className="btn-primary" style={{ width: '100%', fontSize: '0.85rem', padding: '0.65rem 1rem' }}>
                      Reserve Consultation Online <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div>
                &copy; {new Date().getFullYear()} Lumina Dental Studio. All rights reserved. Precision Dentistry & Aesthetic Arts.
              </div>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href="#privacy">Privacy & Patient Charter</a>
                <a href="#terms">Sterilization Standards</a>
                <a href="#accessibility">Overseas Patients Protocol</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
