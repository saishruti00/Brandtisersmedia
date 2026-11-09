
export const portfolioCategories = [
  "VIDEOS",
  "ADS",
  "SOCIAL MEDIA",
  "LOGOS",
  "PRODUCTS",
  "BRANDING",
  "WEBSITES",
];

export const portfolioProjects = [
  // VIDEOS
  {
    id: 1,
    title: "Creative Brand Campaign",
    category: "VIDEOS",
    type: "video",
    videoId: "cfVesymkSdI",
    description: "Creative video production and brand storytelling.",
  },
  {
    id: 2,
    title: "Premium Brand Film",
    category: "VIDEOS",
    type: "video",
    videoId: "loM9EDXN6PU",
    description: "Professional brand film and promotional content.",
  },
  {
    id: 3,
    title: "Digital Marketing Campaign",
    category: "VIDEOS",
    type: "video",
    videoId: "QAHMGmvV65o",
    description: "Engaging video content for digital platforms.",
  },
  {
    id: 4,
    title: "Social Media Reel",
    category: "SOCIAL MEDIA",
    type: "video",
    videoId: "tbSqVMEkq8s",
    description: "Short-form social media creative.",
  },
  {
    id: 5,
    title: "Creative Social Reel",
    category: "SOCIAL MEDIA",
    type: "video",
    videoId: "GlB9N7VoimA",
    description: "Creative short-form video production.",
  },

  // ADS
  {
    id: 6,
    title: "Creative Advertising Design",
    category: "ADS",
    type: "image",
    image:
      "https://brandtisersmedia.com/wp-content/uploads/2026/07/Artboard-1-copy-100-1.jpg",
    description: "Creative advertising and campaign design.",
  },
  {
    id: 7,
    title: "Digital Campaign Creative",
    category: "ADS",
    type: "image",
    image:
      "https://brandtisersmedia.com/wp-content/uploads/2026/07/Artboard-2-copy-100-1.jpg",
    description: "Visual communication for digital campaigns.",
  },

  // PRODUCTS
  {
    id: 8,
    title: "Product Photography 01",
    category: "PRODUCTS",
    type: "image",
    image:
      "https://brandtisersmedia.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-06-at-11.45.56-AM-1-1.jpeg",
  },
  {
    id: 9,
    title: "Product Photography 02",
    category: "PRODUCTS",
    type: "image",
    image:
      "https://brandtisersmedia.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-06-at-11.45.56-AM-2-1.jpeg",
  },
  {
    id: 10,
    title: "Product Creative 03",
    category: "PRODUCTS",
    type: "image",
    image:
      "https://brandtisersmedia.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-06-at-11.51.15-AM-2-1.jpeg",
  },
  {
    id: 11,
    title: "Product Creative 04",
    category: "PRODUCTS",
    type: "image",
    image:
      "https://brandtisersmedia.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-06-at-11.51.15-AM-3-1.jpeg",
  },

  // LOGOS
  {
    id: 12,
    title: "Pack N Go",
    category: "LOGOS",
    type: "image",
    image:
      "https://brandtisersmedia.com/wp-content/uploads/2026/07/pack-n-go-Logo-scaled.png",
    fit: "contain",
  },
  {
    id: 13,
    title: "Eurowood",
    category: "LOGOS",
    type: "image",
    image:
      "https://brandtisersmedia.com/wp-content/uploads/2026/07/eurowood-2-logo.jpg",
    fit: "contain",
  },

  // BRANDING
  {
    id: 14,
    title: "Brand Identity Design",
    category: "BRANDING",
    type: "image",
    image:
      "https://brandtisersmedia.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-06-at-11.54.39-AM-3.jpeg",
  },
  {
    id: 15,
    title: "Creative Brand Identity",
    category: "BRANDING",
    type: "image",
    image:
      "https://brandtisersmedia.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-06-at-11.54.39-AM-1.jpeg",
  },

  // WEBSITES
  {
    id: 16,
    title: "Glow Beauty Website",
    category: "WEBSITES",
    type: "image",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=1000&q=85",
    description: "Modern beauty e-commerce website concept.",
  },
  {
    id: 17,
    title: "Luxe Jewels Website",
    category: "WEBSITES",
    type: "image",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1000&q=85",
    description: "Premium jewellery e-commerce website concept.",
  },
  {
    id: 18,
    title: "FitZone Website",
    category: "WEBSITES",
    type: "image",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&q=85",
    description: "Fitness website design concept.",
  },
];

export const getProjectThumbnail = (project) => {
  if (project.type === "video") {
    return `https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`;
  }

  return project.image;
};

export const getProjectUrl = (project) => {
  if (project.type === "video") {
    return `https://www.youtube.com/embed/${project.videoId}?autoplay=1&rel=0`;
  }

  return project.image;
};
