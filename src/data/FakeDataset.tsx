export const datasets = [
  {
    title: "Pharmacies de Garde",
    slug: "pharmacies-de-garde",
    description:
      "Accédez en temps réel aux pharmacies de garde dans toute l'Algérie",
    keywords: ["santé", "pharmacie", "urgence"],
    downloads: 1245,
    views: 5890,
    price: 2,
    category: "Santé",

    descriptionMD: `# Dataset des Pharmacies de Garde
        
            Ce jeu de données contient les informations sur les pharmacies de garde en Algérie.
            
            ## Contenu
            
            - Liste complète des pharmacies
            - Horaires de garde
            - Localisation
            - Contacts
            
            ## Mise à jour
            
            Les données sont mises à jour quotidiennement.`,
    fileInfo: {
      size: "2.5 MB",
      records: 15000,
      lastUpdate: "2024-03-15",
      format: "CSV",
    },
    provider: {
      name: "Ministère de la Santé",
      contact: "contact@sante.gov.dz",
      logo: "/placeholder.svg",
    },
    relatedApi: "/api/pharmacies-de-garde",
    preview: [
      {
        id: 1,
        name: "Pharmacie Centrale",
        address: "123 Rue ABC",
        wilaya: "Alger",
      },
      {
        id: 2,
        name: "Pharmacie du Port",
        address: "45 Avenue XYZ",
        wilaya: "Oran",
      },
    ],
  },
  {
    title: "Wilayas",
    slug: "wilayas",
    description: "Données détaillées sur les 58 wilayas d'Algérie",
    keywords: ["géographie", "administration", "territoire"],
    downloads: 3456,
    views: 12890,
    price: 1,
    category: "Géographie",

    descriptionMD: `# Dataset des Wilayas
        
            Ce jeu de données contient des informations détaillées sur les 58 wilayas d'Algérie.
            
            ## Contenu
            
            - Liste complète des wilayas
            - Superficie
            - Population
            - Chef-lieu
            
            ## Mise à jour
            
            Les données sont mises à jour mensuellement.`,
    fileInfo: {
      size: "5 MB",
      records: 58000,
      lastUpdate: "2024-03-10",
      format: "CSV",
    },
    provider: {
      name: "Ministère de l'Intérieur",
      contact: "contact@interieur.gov.dz",
      logo: "/placeholder.svg",
    },
    relatedApi: "/api/wilayas",
    preview: [
      {
        id: 1,
        name: "Alger",
        superficie: "273 km²",
        population: "3415811",
        chefLieu: "Alger",
      },
      {
        id: 2,
        name: "Oran",
        superficie: "2114 km²",
        population: "1454078",
        chefLieu: "Oran",
      },
    ],
  },
  {
    title: "Codes Postaux",
    slug: "codes-postaux",
    description: "Base de données complète des codes postaux algériens",
    keywords: ["adresse", "postal", "localisation"],
    downloads: 2789,
    views: 8900,
    price: 1,
    category: "Adresses",

    descriptionMD: `# Dataset des Codes Postaux
        
            Ce jeu de données contient la liste complète des codes postaux en Algérie.
            
            ## Contenu
            
            - Liste des codes postaux
            - Localisation
            - Wilaya
            
            ## Mise à jour
            
            Les données sont mises à jour annuellement.`,
    fileInfo: {
      size: "1 MB",
      records: 10000,
      lastUpdate: "2024-03-12",
      format: "CSV",
    },
    provider: {
      name: "Algérie Poste",
      contact: "contact@poste.dz",
      logo: "/placeholder.svg",
    },
    relatedApi: "/api/codespostaux",
    preview: [
      {
        id: 1,
        codePostal: "16000",
        wilaya: "Alger",
      },
      {
        id: 2,
        codePostal: "31000",
        wilaya: "Oran",
      },
    ],
  },
];
