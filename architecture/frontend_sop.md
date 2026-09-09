# Frontend Component Architecture (SOP)

## Goal
Establish a strict, modular frontend architecture for the Premium Dental Clinic using Next.js App Router and CSS Modules.

## Layers & Routing
1. **Pages (App Router)**:
   - `/`: Homepage (Hero, Trust Signals, Services Teaser, Doctors).
   - `/services`: Treatment Catalog.
   - `/booking`: Patient Portal (Booking & Intake).
2. **Components**:
   - `Hero`: Primary CTA and value prop.
   - `TrustSignals`: Reviews and ratings.
   - `ServiceCard`: Reusable component for both homepage and services page.
   - `DoctorProfile`: Bios and specialties.

## State & Data Flow (Data-First Rule)
- Data is strictly shaped by `gemini.md`.
- All components must accept props reflecting the Data Schema.
- Currently using `src/lib/mockData.ts` as the data source. When Sanity.io is connected, the data fetching logic will swap seamlessly since the schema remains identical.

## Styling Invariants
- **CSS Modules**: All components must use `Component.module.css`.
- **Variables**: Defined in `globals.css` (soft primary colors, light blues, teals, whitespace).
- **Animations**: Use Framer Motion for smooth scroll effects.
