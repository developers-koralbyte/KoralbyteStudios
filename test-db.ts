{
  "entities": {
    "Inquiry": {
      "title": "Inquiry",
      "description": "General contact inquiry submitted from the Contact Page",
      "type": "object",
      "properties": {
        "name": { "type": "string", "description": "Name of the person inquiring" },
        "email": { "type": "string", "description": "Email address of the person" },
        "website": { "type": "string", "description": "Website URL (optional)" },
        "phone": { "type": "string", "description": "Phone number (optional)" },
        "socials": { "type": "string", "description": "Social media URL/handle (optional)" },
        "service": { "type": "string", "description": "Service of interest" },
        "message": { "type": "string", "description": "Inquiry details" },
        "createdAt": { "type": "timestamp" }
      },
      "required": ["name", "email", "service", "message", "createdAt"]
    },
    "AuditRequest": {
      "title": "Audit Request",
      "description": "Request for a brand or free audit",
      "type": "object",
      "properties": {
        "fullName": { "type": "string", "description": "Full Name" },
        "businessName": { "type": "string", "description": "Business Name" },
        "email": { "type": "string", "description": "Email Address" },
        "website": { "type": "string", "description": "Website URL" },
        "challenge": { "type": "string", "description": "Current biggest challenge" },
        "auditType": { "type": "string", "enum": ["free", "brand"], "description": "Type of audit requested" },
        "createdAt": { "type": "timestamp" }
      },
      "required": ["fullName", "businessName", "email", "website", "challenge", "auditType", "createdAt"]
    },
    "PortfolioItem": {
      "title": "Portfolio Item",
      "description": "A case study or portfolio piece",
      "type": "object",
      "properties": {
        "title": { "type": "string" },
        "category": { "type": "string" },
        "image": { "type": "string", "description": "Main cover image URL" },
        "industry": { "type": "string" },
        "challenge": { "type": "string" },
        "solution": { "type": "string" },
        "fullImages": { "type": "array", "items": { "type": "string" } },
        "createdAt": { "type": "timestamp" },
        "order": { "type": "number", "description": "For sorting" }
      },
      "required": ["title", "category", "image", "industry"]
    }
  },
  "firestore": {
    "/inquiries/{inquiryId}": {
      "schema": { "$ref": "#/entities/Inquiry" },
      "description": "Stores general inquiries"
    },
    "/audits/{auditId}": {
      "schema": { "$ref": "#/entities/AuditRequest" },
      "description": "Stores free and brand audit requests"
    },
    "/portfolio/{portfolioId}": {
      "schema": { "$ref": "#/entities/PortfolioItem" },
      "description": "Stores portfolio case studies"
    }
  }
}
