# Findings

## Research
- **Aesthetics**: Premium, modern, minimalist. Lots of whitespace. Soft primary colors (light blue/teals). Smooth scroll animations.
- **Inspiration References**: 
  - *Halo Dental* & *Aventura Dental Arts* for minimalist UI and color palette.
  - *Premier Arts Dental* for clear, distinct Service Cards categorization.
- **Information Architecture (from HTML Analysis)**:
  - **Homepage**: Hero Section -> Trust Signals -> Service Pathways (Teasers) -> Doctor Profiles
  - **Services Hub**: Treatment Catalog (Cosmetic, General)
  - **Patient Portal**: Online Booking & Intake Forms. Primary Conversion Endpoint.

## Discoveries
- **Integrations & Tech Architecture (Zero-Cost Stack)**: 
  - **Hosting**: Vercel
  - **Booking**: Cal.com (Free Tier)
  - **Intake**: Tally.so (Free Tier)
  - **Chat**: WhatsApp API (Emergency Chat/Alerts to Reception)
  - **CMS**: Sanity.io (Free Tier)
- **Tech Stack Selected**: Next.js (React) for modular component structure, easy Vercel deployment, and smooth integration with Sanity.io. Styling will use standard conventions (Tailwind or CSS modules) focused on premium UI.

## Constraints
- **Modularity**: Code must be highly modular specifically for Doctor Profiles and Service details so they can be easily swapped or updated via the CMS or component props.
- **Flow**: High-Converting Component Hierarchy is strictly enforced to drive users to the "Frictionless 3-step appointment scheduling" conversion endpoint.
