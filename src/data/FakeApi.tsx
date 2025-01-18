export const apis = [
  {
    title: "Pharmacies API",
    slug: "pharmacies-de-garde",
    description: "API complète des pharmacies de garde",
    availability: 99.9,
    requiresCredits: true,
    documentation: "/api/docs/pharmacies",
    version: "v1.0",
    descriptionMD: `# API Pharmacies de Garde
    
      Cette API permet d'accéder aux informations sur les pharmacies de garde en Algérie.
      
      ## Fonctionnalités principales
      
      - Liste des pharmacies de garde par wilaya
      - Recherche par commune
      - Informations détaillées sur chaque pharmacie
      - Mise à jour en temps réel`,
    documentationMD: `# Documentation technique
      
      ## Endpoints
      
      GET /api/pharmacies/garde
      GET /api/pharmacies/garde/{wilaya}
      GET /api/pharmacies/garde/{wilaya}/{commune}
      
      ## Authentication
      
      Bearer token requis pour tous les endpoints.`,

    provider: {
      name: "Ministère de la Santé",
      contact: "contact@sante.gov.dz",
    },
  },
  {
    title: "Wilayas API",
    slug: "wilayas",
    description: "Données géographiques des wilayas",
    availability: 100,
    requiresCredits: false,
    documentation: "/api/docs/wilayas",
    version: "v2.1",
    descriptionMD: `# API Wilayas
    
      Cette API fournit des données géographiques sur les 58 wilayas d'Algérie.
      
      ## Fonctionnalités principales
      
      - Liste des wilayas
      - Détails sur chaque wilaya
      - Codes postaux associés
      - Coordonnées géographiques`,
    documentationMD: `# Documentation technique
        
        ## Endpoints
        
        GET /api/wilayas
        GET /api/wilayas/{code}
        
        ## Authentication
        
        Aucune authentification requise.`,
    provider: {
      name: "Office National des Statistiques",
      contact: "contact@office.stats.gov.dz",
    },
  },
];
