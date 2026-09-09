# Gemini.md (The Law)

## Data Schema
This represents the Data Payload expected from Sanity.io CMS to populate the frontend components.

### Processed Output (Payload) Shape
```json
{
  "siteConfig": {
    "clinicName": "String",
    "whatsappNumber": "String",
    "calComLink": "String",
    "tallyFormUrl": "String"
  },
  "hero": {
    "headline": "String",
    "subheadline": "String",
    "ctaText": "String",
    "ctaLink": "String (Cal.com URL)"
  },
  "trustSignals": [
    {
      "author": "String",
      "rating": "Number (1-5)",
      "reviewText": "String",
      "source": "String (e.g., Google)"
    }
  ],
  "services": [
    {
      "id": "String",
      "title": "String",
      "category": "String (Cosmetic, General, Surgical)",
      "shortDescription": "String",
      "iconUrl": "String",
      "detailsUrl": "String"
    }
  ],
  "doctors": [
    {
      "id": "String",
      "name": "String",
      "specialty": "String",
      "bio": "String",
      "imageUrl": "String"
    }
  ]
}
```

## Maintenance Log
**Date**: September 10, 2026
**Action**: Phase 5 (Trigger) Completed.
**Details**:
- Successfully wired Next.js Server Components to fetch from Sanity.io. Fallback gracefully implemented.
- Cal.com calendar and Tally.so intake forms embedded via React components in the Patient Portal (`/booking`).
- Website successfully pushed to the production repository: `https://github.com/hannan-bhatti/dentistwebtemp.git`.
- **Note for Vercel**: Deployment on Vercel is triggered automatically when pushing to the `main` branch. Ensure the `.env` variables are added to the Vercel project settings.
