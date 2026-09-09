import type { Metadata } from 'next';
import './globals.css';
import { LuminaLogo } from '@/components/LuminaLogo';
import { Phone, Calendar, Clock, MapPin, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lumina Dental Studio | Artistry in Modern Dentistry',
  description: 'Experience boutique, pain-free dental care in Miami Beach. Handcrafted porcelain veneers, gentle laser hygiene, and 3D digital smile design.',
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
            <span><strong>Accepting New Patients:</strong> Same-Day Emergency Consultations Available</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span>Concierge: <strong>(800) 586-4621</strong></span>
            <a href="https://wa.me/18005864621" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <MessageCircle size={14} /> WhatsApp Chat
            </a>
          </div>
        </div>

        {/* Glassmorphic Header */}
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
              <a href="tel:8005864621" className="header-phone">
                <Phone size={16} color="var(--primary)" />
                <span>(800) 586-4621</span>
              </a>
              <Link href="/booking" className="btn-primary" style={{ padding: '0.65rem 1.45rem', fontSize: '0.875rem' }}>
                <Calendar size={15} />
                <span>Book Visit</span>
              </Link>
            </div>
          </div>
        </header>

        <main>{children}</main>

        {/* Luxury Footer */}
        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <Link href="/" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
                  <LuminaLogo />
                </Link>
                <p style={{ maxWidth: '340px', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '0.925rem' }}>
                  A boutique cosmetic and reconstructive dental lounge in Miami Beach. Redefining the patient journey through calm, bespoke, and virtually painless care.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', background: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.75rem', borderRadius: '6px' }}>
                    AACD Accredited
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', background: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.75rem', borderRadius: '6px' }}>
                    5.0 ★ Google Top Clinic
                  </span>
                </div>
              </div>

              <div className="footer-col">
                <h4>Treatments</h4>
                <ul>
                  <li><Link href="/services#cosmetic">Porcelain Veneers</Link></li>
                  <li><Link href="/services#cosmetic">Laser Teeth Whitening</Link></li>
                  <li><Link href="/services#general">Holistic Hygiene & Care</Link></li>
                  <li><Link href="/services#surgical">Guided 3D Implants</Link></li>
                  <li><Link href="/services">Full Mouth Rehabilitation</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Practice</h4>
                <ul>
                  <li><Link href="/#experience">The Comfort Suite</Link></li>
                  <li><Link href="/#specialists">Our Doctors</Link></li>
                  <li><Link href="/#transformations">Before & After</Link></li>
                  <li><Link href="/#faq">Insurance & 0% Financing</Link></li>
                  <li><Link href="/booking">Patient Portal</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Studio Hours & Concierge</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <MapPin size={18} color="#38bdf8" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <span>450 Ocean Promenade, Suite 300<br/>Miami Beach, FL 33139</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Clock size={16} color="#38bdf8" style={{ flexShrink: 0 }} />
                    <span>Mon – Fri: 8:00 AM – 6:00 PM</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Phone size={16} color="#38bdf8" style={{ flexShrink: 0 }} />
                    <span>Direct: (800) 586-4621</span>
                  </div>
                  <div style={{ marginTop: '0.5rem' }}>
                    <Link href="/booking" className="btn-primary" style={{ width: '100%', fontSize: '0.85rem', padding: '0.65rem 1rem' }}>
                      Schedule Online <ArrowRight size={14} />
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
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#accessibility">Accessibility</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
