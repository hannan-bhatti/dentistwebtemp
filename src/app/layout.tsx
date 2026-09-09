import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Halo & Aventura Dental Arts',
  description: 'Premium, minimalist dental clinic focused on patient comfort and advanced treatments.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container header-content">
            <div className="logo">
              <a href="/">DentalArts</a>
            </div>
            <nav className="nav">
              <a href="/">Home</a>
              <a href="/services">Services</a>
              <a href="/booking" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>Book Now</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Halo & Aventura Dental Arts. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
