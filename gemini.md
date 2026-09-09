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
*(To be finalized in Trigger phase)*
