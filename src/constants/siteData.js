import {
  Megaphone, Target, Search, Globe, MessageCircle, PenTool, Users, ShoppingBag
} from 'lucide-react';

export const P = '#7138F5';
export const GOLD = '#FFB400';
export const ease = [0.22, 1, 0.36, 1];

export const MEDIA = {
  heroVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
  heroPoster: 'https://picsum.photos/seed/brandtisers-hero/1600/900',
  showreel: 'https://www.w3schools.com/html/mov_bbb.mp4',
  showreelPoster: 'https://picsum.photos/seed/brandtisers-reel/1200/700',
  team: 'https://picsum.photos/seed/brandtisers-team/900/1100',
  office: 'https://picsum.photos/seed/brandtisers-office/900/700',
  gallery: [
    { src: 'https://picsum.photos/seed/bt-realestate/800/600', title: 'Real Estate Campaign', tag: 'Meta Ads', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { src: 'https://picsum.photos/seed/bt-seo/800/600', title: 'SEO Growth Story', tag: 'SEO' },
    { src: 'https://picsum.photos/seed/bt-web/800/600', title: 'Portal Development', tag: 'Web' },
    { src: 'https://picsum.photos/seed/bt-social/800/600', title: 'Viral Reel Series', tag: 'Social', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { src: 'https://picsum.photos/seed/bt-brand/800/600', title: 'Brand Creatives', tag: 'Design' },
    { src: 'https://picsum.photos/seed/bt-diwali/800/600', title: 'Diwali Offer Launch', tag: 'Festive', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  ],
};

export const brands = [
  'Godrej Properties', 'DLF', 'M3M India', 'SME PAISA', 'Ganga Anantam',
  'Elan The Mark', 'Elan Presidential', 'Silverglades Legacy', 'Geetanjali',
  'Value Max', 'SRE India Pvt Ltd', 'Key Dreams', 'Euro Woods', 'DIGI', 'KD'
];

export const ticker = [
  '🪔 Diwali Special: Free Growth Audit', '🔥 Meta Ads 4.8x Avg ROAS',
  '🚀 Google Page 1 Guarantee', '📱 WhatsApp 98% Open Rate',
  '💎 250+ Scaled Portals', '🎯 94% Lead Qualification', '✨ Dedicated Squads in Dwarka Mor'
];

export const services = [
  { icon: Megaphone, title: 'Meta Ads (FB & Instagram)', category: 'Paid Media', text: 'Target high-intent buyers with retargeting, catalog ads and custom lookalikes.', highlight: '4.8x Average ROAS', badge: '🔥 Highest Demand' },
  { icon: Target, title: 'Google Ads & PPC', category: 'Paid Media', text: 'Search, display and YouTube ads that capture customers already searching for you.', highlight: 'Instant Buyer Leads', badge: '⚡ Instant Results' },
  { icon: Search, title: 'Search Engine Optimization', category: 'Organic Growth', text: 'Technical audits, local map-pack dominance, on-page and backlink building.', highlight: 'Top 3 Rankings', badge: '📈 Long-Term Asset' },
  { icon: Globe, title: 'Website & Portal Development', category: 'Tech & Design', text: 'Ultra-fast, mobile-first sites built for UX and lead capture.', highlight: 'Sub-second Loads', badge: '💻 Custom Tech' },
  { icon: MessageCircle, title: 'WhatsApp Marketing & CRM', category: 'Direct Marketing', text: 'Broadcast funnels, green tick solutions and CRM sync with 98% open rates.', highlight: '98% Open Rate', badge: '💬 High Engagement' },
  { icon: PenTool, title: 'Graphic Design & Creatives', category: 'Tech & Design', text: 'Social creatives, brochures and banners that lift brand perception.', highlight: 'Scroll-Stopping Assets', badge: '🎨 Brand Identity' },
  { icon: Users, title: 'Social Media Marketing', category: 'Organic Growth', text: 'Reels, content calendars and community building on Instagram, Facebook, LinkedIn.', highlight: '3.2M+ Monthly Reach', badge: '🚀 Viral Reels' },
  { icon: ShoppingBag, title: 'E-commerce Ads & Scale', category: 'Paid Media', text: 'Shopify & WooCommerce ad strategy, cart recovery and marketplace acceleration.', highlight: 'Lower CAC', badge: '🛍️ D2C Scale' },
];

export const steps = [
  { step: '01', tag: 'Foundation', title: 'Deep Market & Funnel Audit', text: 'We analyse unit economics, ad history, competitor gaps and customer friction.' },
  { step: '02', tag: 'Preparation', title: 'High-Converting Creative Build', text: 'Hooks, landing wireframes and messaging tailored to your buyers.' },
  { step: '03', tag: 'Launch', title: 'Targeted Multi-Channel Blitz', text: 'Precision Meta, Google and WhatsApp campaigns with CRM lead sync.' },
  { step: '04', tag: 'Scale', title: 'Rapid Scale & CAC Reduction', text: 'We double down on winners and scale spend profitably every week.' },
];

export const faqs = [
  { q: 'How quickly can we expect results from Meta and Google Ads?', a: 'Campaigns usually deliver qualified clicks and inquiries within 48 to 72 hours. Full optimisation typically peaks in 14 to 21 days.' },
  { q: 'Why choose Brandtisers Media over other Delhi NCR agencies?', a: 'We work as an embedded revenue partner: dedicated strategists, transparent ad access, custom creatives and lead qualification funnels.' },
  { q: 'Can we visit your office for a consultation?', a: 'Yes. Visit us in Dwarka Mor (Sewak Park) or Vijay Enclave (Dashrath Puri), West Delhi.' },
  { q: 'Which industries do you have case studies in?', a: 'Real Estate (Godrej, DLF, M3M, Elan), FinTech (SME PAISA), Healthcare, Education and D2C E-commerce.' },
];


export const testimonials = [
  {
    platform: 'google',
    name: 'Ravi Kumar',
    role: 'Managing Director',
    company: 'Commercial & Residential Developments',
    quote: 'Brandtisers Media transformed our online presence. Their team delivered incredible real estate lead volume and boosted our sales pipeline.',
    highlight: '+180% Lead Volume',
    date: '2025-12-12',
    avatar: '',
  },
  {
    platform: 'facebook',
    name: 'Priya Sharma',
    role: 'Head of Marketing',
    company: 'Premier Brokerage Network',
    quote: 'Extremely satisfied with the web development and performance marketing. They built a lightning-fast, high-converting portal for our broker network.',
    highlight: 'Top 3 Google Rankings',
    date: '2025-10-08',
    avatar: '',
  },
  {
    platform: 'instagram',
    name: 'Aarav Mehta',
    role: 'Brand Manager',
    company: 'Lifestyle Brand',
    quote: 'Amazing creatives and social media campaigns. Our brand engagement has improved significantly.',
    highlight: 'Amazing Creativity',
    date: '2025-11-15',
    avatar: '',
    image: '',
  },
  {
    platform: 'whatsapp',
    name: 'Neha Gupta',
    role: 'Business Owner',
    company: 'Retail Business',
    quote: 'The team was very responsive and helped us generate quality leads through digital campaigns.',
    highlight: 'Great Support',
    date: '2025-11-20',
    avatar: '',
    reply: 'Thank you for your valuable feedback!',
  },
  {
    platform: 'linkedin',
    name: 'Ankit Verma',
    role: 'Founder',
    company: 'Technology Company',
    quote: 'A professional team with excellent digital marketing and web development expertise. Highly recommended.',
    highlight: 'Professional Partnership',
    date: '2025-12-01',
    avatar: '',
  },
  {
    platform: 'youtube',
    name: 'Karan Singh',
    role: 'Business Owner',
    company: 'E-commerce',
    quote: 'Great work on our website and marketing campaigns. The overall experience has been excellent.',
    highlight: 'Excellent Work',
    date: '2025-12-05',
    avatar: '',
  },
  {
    platform: 'x',
    name: 'Simran Kapoor',
    role: 'Marketing Professional',
    company: 'Digital Business',
    quote: 'Creative ideas, responsive communication and a great understanding of digital growth.',
    highlight: 'Creative Team',
    date: '2025-12-10',
    avatar: '',
  },
  {
    platform: 'trustpilot',
    name: 'Rahul Malhotra',
    role: 'Director',
    company: 'Business Solutions',
    quote: 'A reliable digital growth partner. Great communication and a professional approach.',
    highlight: 'Excellent Service',
    date: '2025-12-15',
    avatar: '',
  },
];



export const industries = [
  { name: 'Real Estate & Builders', note: 'Luxury, Commercial & Broker Funnels', emoji: '🏢' },
  { name: 'Finance & SME Loans', note: 'FinTech, SME Paisa & Wealth', emoji: '💳' },
  { name: 'Healthcare & Wellness', note: 'Hospitals, Clinics & Booking Funnels', emoji: '🏥' },
  { name: 'Lifestyle & D2C Stores', note: 'Catalog Ads & Reorders', emoji: '🛍️' },
  
  {
    name: 'Education & EdTech',
    emoji: '🎓',
    note: 'Schools, Universities & Online Learning',
  },
  {
    name: 'Travel & Hospitality',
    emoji: '✈️',
    note: 'Hotels, Resorts & Travel Agencies',
  },
  {
    name: 'Food & Beverage',
    emoji: '🍽️',
    note: 'Restaurants, Cafes & Food Brands',
  },
  {
    name: 'Automotive & Mobility',
    emoji: '🚗',
    note: 'Automobiles, EVs & Car Dealers',
  },
  {
    name: 'Fashion & Apparel',
    emoji: '👗',
    note: 'Clothing, Footwear & Fashion Labels',
  },
  {
    name: 'Beauty & Personal Care',
    emoji: '💄',
    note: 'Skincare, Cosmetics & Salon Brands',
  },
  {
    name: 'Home & Interior',
    emoji: '🏡',
    note: 'Furniture, Decor & Interior Design',
  },
  {
    name: 'Technology & SaaS',
    emoji: '💻',
    note: 'Software, IT & Tech Startups',
  },
  {
    name: 'Manufacturing & Industrial',
    emoji: '🏭',
    note: 'Factories, Machinery & B2B Brands',
  },
  {
    name: 'Logistics & Supply Chain',
    emoji: '🚚',
    note: 'Transport, Warehousing & Delivery',
  },
  {
    name: 'Fitness & Sports',
    emoji: '🏋️',
    note: 'Gyms, Fitness & Sports Brands',
  },
  {
    name: 'Events & Entertainment',
    emoji: '🎬',
    note: 'Events, Artists & Entertainment',
  },

];

export const companyStorySlides = [
  {
    step: '01',
    badge: 'Our Identity & Roots',
    heading: 'We are Brandtisers Media. Delhi NCR’s Growth Accelerator.',
    subheading: 'Bridging the gap between high-intent buyers and ambitious enterprises.',
    bullets: [
      'Inspired by seasoned entrepreneur Murari Sharan with deep expertise across unit economics.',
      'Headquartered in Dwarka Mor & Vijay Enclave, New Delhi, operating across Pan-India.',
      'We replace fluff and vanity metrics with verified qualified sales pipelines.'
    ],
    highlightStat: '4,000+ Scaled Brands',
    metricLabel: 'Clients Served'
  },
  {
    step: '02',
    badge: 'Enterprise Performance',
    heading: 'Engineered for Scale: Godrej, DLF, M3M & SME PAISA.',
    subheading: 'Proven success record with real estate giants and high-growth fintechs.',
    bullets: [
      'Over ₹50 Crore in ad spend managed profitably across Google Search & Meta platforms.',
      'Consistently achieving 4.8x average ROAS with custom retargeting architectures.',
      'Brokers like Geetanjali, Value Max, SRE India & Key Dreams trust our funnel systems.'
    ],
    highlightStat: '4.8x Avg ROAS',
    metricLabel: 'Performance Yield'
  },
  {
    step: '03',
    badge: 'Full-Stack Ecosystem',
    heading: 'Sub-Second Web Portals + WhatsApp Lead Automation.',
    subheading: 'We don’t just run ads — we build full conversion environments.',
    bullets: [
      'Lightning-fast custom web development built for high conversion velocity.',
      'Verified WhatsApp CRM funnels boasting a 98% open rate and instant auto-qualification.',
      'Google Page 1 rankings & local map-pack dominance engineered through white-hat SEO.'
    ],
    highlightStat: '98% Open Rate',
    metricLabel: 'Direct CRM Flow'
  },
  {
    step: '04',
    badge: 'The Brandtisers Promise',
    heading: 'Transparent Dashboards. No Guesswork. Pure Revenue.',
    subheading: 'Embedded in your business as a dedicated strategic revenue partner.',
    bullets: [
      'Full, unfiltered access to live Google & Meta ad manager dashboards.',
      'Dedicated creative squad drafting high-converting video hooks & viral reels weekly.',
      'Direct on-demand support from our executive team right here in West Delhi.'
    ],
    highlightStat: '98% Retention',
    metricLabel: 'Partnership Rate'
  }
];

export const heroHeadlines = [
  { words: ['Innovative', 'Strategies.', 'Proven', 'Results.'], accent: 'Your Digital Growth Partner.' },
  { words: ['High-Intent', 'Leads.', 'Maximum', 'ROAS.'], accent: 'Your Performance Marketing Engine.' },
  { words: ['Search', 'Dominance.', 'Unmatched', 'Scale.'], accent: 'Your SEO & Revenue Partner.' },
  { words: ['Fast', 'Funnels.', 'Verified', 'Inquiries.'], accent: 'Your Conversion Growth Machine.' }
];

export const rotatingHighlights = [
  {
    icon: Megaphone,
    badge: 'Meta & Google Ads',
    title: '4.8x Average Return On Ad Spend (ROAS)',
    desc: 'Target high-intent buyers with retargeting, custom lookalikes, and direct CRM sync within 48 hours.',
    metric: '4.8x Avg ROAS',
    highlightColor: 'from-[#7138F5]/10 to-[#9333ea]/10',
    border: 'border-[#7138F5]/30'
  },
  {
    icon: Search,
    badge: 'SEO & Search Dominance',
    title: 'Google Page 1 Ranking & NCR Map-Pack Dominance',
    desc: 'Technical site audits, local map-pack dominance, and high-authority backlinks for sustained organic growth.',
    metric: 'Top 3 Ranking',
    highlightColor: 'from-amber-500/10 to-[#FFB400]/15',
    border: 'border-[#FFB400]/40'
  },
  {
    icon: Globe,
    badge: 'Web Portals & Tech',
    title: 'Ultra-Fast, Sub-Second Loading Lead Portals',
    desc: 'Custom-built conversion funnels and mobile-first portals built exclusively to capture and qualify inquiries.',
    metric: '< 1s Speed',
    highlightColor: 'from-blue-500/10 to-indigo-500/10',
    border: 'border-blue-400/30'
  },
  {
    icon: MessageCircle,
    badge: 'Direct Funnels',
    title: 'WhatsApp Automation & Verified Green-Tick CRM',
    desc: 'Automated broadcast funnels with 98% open rates and immediate lead response workflows.',
    metric: '98% Open Rate',
    highlightColor: 'from-emerald-500/10 to-teal-500/10',
    border: 'border-emerald-400/30'
  }
];