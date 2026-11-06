import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Sparkles,
  ArrowUpRight,
  Clock,
  Calendar,
  User,
  TrendingUp,
  Tag,
  Mail,
  ChevronRight,
  BookmarkCheck,
  Flame,
  ArrowRight,
  Wrench,
  Layers,
} from 'lucide-react';
// Corrected relative path to src/components/ui/Common
import { Magnetic } from '../components/ui/Common';

/* =========================================
   MARKETING TOOLS & PLATFORMS DATA
========================================= */
const MARKETING_TOOLS = [
  {
    name: 'Grammarly',
    category: 'Content & Copy',
    color: '#15C39A',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.422 0 9.818 4.396 9.818 9.818 0 5.422-4.396 9.818-9.818 9.818-5.422 0-9.818-4.396-9.818-9.818 0-5.422 4.396-9.818 9.818-9.818zm4.72 6.545c-.287 0-.573.11-.79.327l-5.012 5.012-2.193-2.193a1.118 1.118 0 00-1.58 1.58l2.983 2.983c.437.437 1.144.437 1.58 0l5.802-5.802a1.118 1.118 0 00-.79-1.907z" />
      </svg>
    ),
  },
  {
    name: 'Moz Pro',
    category: 'SEO & Authority',
    color: '#0083B0',
    icon: (
      <span className="text-xl font-black tracking-tighter text-[#0083B0]">
        MOZ
      </span>
    ),
  },
  {
    name: 'Yoast SEO',
    category: 'On-Page SEO',
    color: '#A4286A',
    icon: (
      <span className="font-extrabold italic text-[#A4286A] text-lg">
        Yoast
      </span>
    ),
  },
  {
    name: 'GlooMaps',
    category: 'Sitemaps & UX',
    color: '#28A745',
    icon: (
      <div className="flex items-center gap-1">
        <span className="h-4 w-4 rounded bg-[#28A745] flex items-center justify-center text-[10px] text-white font-black">GM</span>
        <span className="font-bold text-[#101535] text-xs">GlooMaps</span>
      </div>
    ),
  },
  {
    name: 'Search Console',
    category: 'Search Indexing',
    color: '#4285F4',
    icon: (
      <div className="flex items-center gap-1 font-bold text-xs">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
        <span className="text-[#515b7c] font-medium text-[10px] ml-0.5">Console</span>
      </div>
    ),
  },
  {
    name: 'Shopify',
    category: 'E-Commerce CMS',
    color: '#95BF47',
    icon: (
      <svg className="h-6 w-6 text-[#95BF47]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.64 6.78c-.04-.26-.24-.46-.5-.49l-4.52-.36c-.19-.01-.36-.12-.45-.29L12.56 2.5c-.17-.32-.61-.39-.87-.14l-8.6 8.35c-.19.19-.25.48-.15.73l3.35 8.7c.09.24.32.4.58.4h10.26c.26 0 .49-.16.58-.4l3.05-8.7c.1-.28.02-.59-.2-.77l-1.02-.89z"/>
      </svg>
    ),
  },
  {
    name: 'Google Analytics',
    category: 'Attribution & GA4',
    color: '#F9AB00',
    icon: (
      <div className="flex items-center gap-1.5">
        <div className="flex h-5 items-end gap-0.5">
          <span className="w-1.5 h-2 rounded-t bg-[#F9AB00]"></span>
          <span className="w-1.5 h-3.5 rounded-t bg-[#F9AB00]"></span>
          <span className="w-1.5 h-5 rounded-t bg-[#E37400]"></span>
        </div>
        <span className="font-bold text-xs text-[#101535]">Analytics</span>
      </div>
    ),
  },
  {
    name: 'Mailchimp',
    category: 'Email Automation',
    color: '#FFE01B',
    icon: (
      <div className="flex items-center gap-1">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFE01B] text-xs font-black text-black">🐵</span>
        <span className="font-extrabold text-xs text-[#101535]">Mailchimp</span>
      </div>
    ),
  },
  {
    name: 'Ubersuggest',
    category: 'Keyword Research',
    color: '#FF6B35',
    icon: (
      <span className="font-black tracking-tight text-[#FF6B35] text-sm">
        Ubersuggest
      </span>
    ),
  },
  {
    name: 'Google AdSense',
    category: 'Monetization',
    color: '#4285F4',
    icon: (
      <div className="flex items-center gap-1 font-bold text-xs text-[#101535]">
        <span className="inline-block h-3.5 w-3.5 rounded-sm bg-gradient-to-tr from-[#FBBC05] to-[#4285F4]"></span>
        AdSense
      </div>
    ),
  },
  {
    name: 'Google Ads',
    category: 'PPC & Search',
    color: '#4285F4',
    icon: (
      <div className="flex items-center gap-1 font-extrabold text-xs text-[#101535]">
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#4285F4] text-[9px] text-white">G</span>
        Google Ads
      </div>
    ),
  },
  {
    name: 'Meta Ads',
    category: 'Paid Social & CBO',
    color: '#0668E1',
    icon: (
      <span className="font-black text-sm tracking-tight text-[#0668E1]">
        facebook <span className="font-normal text-xs text-[#515b7c]">Ads</span>
      </span>
    ),
  },
  {
    name: 'LinkedIn Ads',
    category: 'B2B Lead Gen',
    color: '#0A66C2',
    icon: (
      <div className="flex items-center gap-1 text-xs font-bold text-[#101535]">
        <span>Linked</span>
        <span className="rounded bg-[#0A66C2] px-1 text-white text-[11px]">in</span>
        <span className="text-[#515b7c]">Ads</span>
      </div>
    ),
  },
  {
    name: 'X (Twitter) Ads',
    category: 'Real-Time Reach',
    color: '#1DA1F2',
    icon: (
      <div className="flex items-center gap-1 text-xs font-bold text-[#101535]">
        <svg className="h-4 w-4 text-[#1DA1F2]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
        </svg>
        <span>Ads</span>
      </div>
    ),
  },
  {
    name: 'Keyword Planner',
    category: 'Search Intent & CPC',
    color: '#34A853',
    icon: (
      <div className="flex items-center gap-1 text-xs font-bold text-[#101535]">
        <span className="text-[#34A853]">Google</span>
        <span className="text-[10px] font-medium text-[#7e87a5]">Planner</span>
      </div>
    ),
  },
];

/* =========================================
   MOCK BLOG DATA (Replace or wire to CMS/API)
========================================= */
const CATEGORIES = [
  'All Articles',
  'Performance Marketing',
  'SEO & Growth',
  'Meta & Google Ads',
  'Funnel Optimization',
  'Web & UI/UX',
];

const BLOG_POSTS = [
  {
    id: 'meta-roas-framework-2025',
    title: 'The 2025 Meta Ads Architecture: How We Scaled Real Estate Inquiries by 312%',
    slug: 'the-2025-meta-ads-architecture-real-estate',
    excerpt:
      'CBO vs ABO, advantage+ shopping campaigns, and dynamic creative testing: the exact framework we deployed to deliver 4.8x ROAS for luxury NCR developers.',
    category: 'Meta & Google Ads',
    featured: true,
    cover:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    date: 'Oct 24, 2025',
    readTime: '6 min read',
    author: {
      name: 'Mohit Sharma',
      role: 'Head of Growth',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    metrics: '+312% Qualified Leads',
  },
  {
    id: 'high-converting-landing-pages',
    title: 'The Anatomy of a 14.8% Conversion Rate Landing Page for High-Ticket Services',
    slug: 'high-converting-landing-pages-framework',
    excerpt:
      'Stop losing 80% of paid ad traffic. Here is the micro-copy structure, visual hierarchy, and instant-load blueprint that drives verified buyer inquiries.',
    category: 'Funnel Optimization',
    cover:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    date: 'Oct 19, 2025',
    readTime: '5 min read',
    author: {
      name: 'Shruti V.',
      role: 'Funnel Architect',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    },
    metrics: '14.8% Avg. CVR',
  },
  {
    id: 'local-seo-ncr-dominance',
    title: 'Zero-Click Searches & Google SGE: Local SEO Guide for Delhi-NCR Businesses',
    slug: 'local-seo-ncr-dominance-guide',
    excerpt:
      'How to claim top 3 map pack positions, dominate high-intent keywords, and leverage programmatic schema for hyper-local authority.',
    category: 'SEO & Growth',
    cover:
      'https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=800&q=80',
    date: 'Oct 12, 2025',
    readTime: '8 min read',
    author: {
      name: 'Brandtisers Team',
      role: 'SEO Strategists',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    metrics: '#1 Rank Blueprint',
  },
  {
    id: 'google-pmax-vs-search',
    title: 'Performance Max vs Traditional Search in 2025: Where Should Your Budget Go?',
    slug: 'performance-max-vs-search-ads-budget',
    excerpt:
      'Avoid budget cannibalization. A deep dive into asset group isolation, negative keywords at scale, and high-intent bidding strategies.',
    category: 'Performance Marketing',
    cover:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    date: 'Oct 05, 2025',
    readTime: '7 min read',
    author: {
      name: 'Mohit Sharma',
      role: 'Head of Growth',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    metrics: '38% Lower CPL',
  },
  {
    id: 'nextjs-web-vitals-conversion',
    title: 'How Sub-Second Web Vitals Directly Improved Our Clients’ Ad Quality Scores',
    slug: 'nextjs-web-vitals-conversion-rate',
    excerpt:
      'Fast websites don’t just look good; they bring down CPCs on Google Ads and Meta. Here’s how our modern stack trims page weight to under 400kb.',
    category: 'Web & UI/UX',
    cover:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    date: 'Sep 28, 2025',
    readTime: '4 min read',
    author: {
      name: 'Shruti V.',
      role: 'Tech Lead',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    },
    metrics: '99/100 Core Vitals',
  },
  {
    id: 'short-form-video-conversions',
    title: 'The Direct-Response Reels & TikTok Formula Generating B2B Inquiries',
    slug: 'short-form-video-direct-response-framework',
    excerpt:
      'Hooks in the first 1.8 seconds, high-tension retention patterns, and frictionless lead-form triggers designed for modern attention spans.',
    category: 'Performance Marketing',
    cover:
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    date: 'Sep 15, 2025',
    readTime: '5 min read',
    author: {
      name: 'Brandtisers Team',
      role: 'Creative Directors',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    metrics: '5.2x Watch Retention',
  },
];

/* =========================================
   BLOG PAGE COMPONENT
========================================= */
export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All Articles' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured post (Top spotlight)
  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="relative isolate min-h-screen bg-gradient-to-b from-[#FAF6FF] via-[#FFFDFB] to-white text-[#101535]">
      {/* Ambient background glows matching Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-[5%] h-[500px] w-[500px] rounded-full bg-[#7138F5]/[0.08] blur-[120px]" />
        <div className="absolute -right-40 top-[15%] h-[500px] w-[500px] rounded-full bg-[#A78BFA]/[0.10] blur-[120px]" />
        <div className="absolute bottom-[20%] left-[30%] h-[400px] w-[450px] rounded-full bg-[#FF9F1C]/[0.07] blur-[130px]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(#7138F5 0.7px, transparent 0.7px)',
            backgroundSize: '28px 28px',
            maskImage:
              'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          }}
        />
      </div>

      <div className="mx-auto max-w-[1240px] px-4 pt-12 pb-24 sm:px-6 lg:px-8">
        {/* =========================================
            HEADER / HERO
        ========================================= */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#7138F5]/25 bg-white px-3.5 py-1 text-xs font-bold text-[#7138F5] shadow-sm">
            <Sparkles size={13} className="text-[#7138F5]" />
            Brandtisers Growth Intel & Playbooks
          </div>

          <h1 className="text-[34px] font-black leading-[1.12] tracking-[-0.04em] sm:text-[48px] md:text-[54px]">
            Actionable Growth Plays.{' '}
            <span className="block bg-gradient-to-r from-[#7138F5] via-[#8B5CF6] to-[#F46B68] bg-clip-text text-transparent">
              Zero Fluff. Pure ROAS.
            </span>
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-[#515b7c] sm:text-base md:text-lg">
            Real case breakdowns, media buying blueprints, SEO algorithms, and funnel
            architecture directly from the trenches of Delhi-NCR’s top performance agency.
          </p>

          {/* Search Bar */}
          <div className="relative mx-auto mt-8 max-w-lg">
            <div className="relative flex items-center rounded-full border border-[#ded5ec] bg-white/95 p-1.5 shadow-[0_10px_30px_rgba(113,56,245,0.08)] backdrop-blur-md transition-all focus-within:border-[#7138F5] focus-within:ring-2 focus-within:ring-[#7138F5]/20">
              <Search size={18} className="ml-3.5 text-[#7138F5]" />
              <input
                type="text"
                placeholder="Search strategies (e.g. Meta ads, SEO, ROAS)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent px-3 text-xs font-semibold text-[#101535] placeholder-[#9098b5] focus:outline-none sm:text-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="mr-2 text-xs font-bold text-[#7138F5] hover:underline"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* =========================================
            CATEGORY TABS
        ========================================= */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative rounded-full px-4 py-2 text-xs font-bold transition-all sm:text-sm ${
                  isActive
                    ? 'bg-[#7138F5] text-white shadow-[0_6px_20px_rgba(113,56,245,0.35)]'
                    : 'border border-[#ded5ec] bg-white/80 text-[#515b7c] hover:border-[#7138F5]/40 hover:bg-white hover:text-[#101535]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* =========================================
            FEATURED SPOTLIGHT ARTICLE
        ========================================= */}
        {selectedCategory === 'All Articles' && !searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group relative mt-12 overflow-hidden rounded-3xl border border-[#e8ddf7] bg-white shadow-[0_20px_50px_rgba(113,56,245,0.08)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(113,56,245,0.15)]"
          >
            <div className="grid grid-cols-1 items-center lg:grid-cols-12">
              {/* Media image */}
              <div className="relative h-64 overflow-hidden sm:h-80 lg:col-span-7 lg:h-[420px]">
                <img
                  src={featuredPost.cover}
                  alt={featuredPost.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101535]/60 via-transparent to-transparent lg:hidden" />

                {/* Badge top-left */}
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#F46B68] to-[#FF9F1C] px-3 py-1 text-[11px] font-extrabold text-white shadow-md">
                    <Flame size={12} />
                    Featured Spotlight
                  </span>
                  <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#101535] backdrop-blur-md">
                    {featuredPost.metrics}
                  </span>
                </div>
              </div>

              {/* Content info */}
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
                <div>
                  <div className="flex items-center gap-3 text-xs font-bold text-[#7138F5]">
                    <span className="rounded-md bg-[#F0E8FF] px-2.5 py-1">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1 text-[#626b88]">
                      <Clock size={12} /> {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="mt-4 text-xl font-black leading-snug tracking-tight text-[#101535] transition-colors group-hover:text-[#7138F5] sm:text-2xl lg:text-[26px]">
                    {featuredPost.title}
                  </h2>

                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#515b7c]">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#f0e8f8] pt-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                    <div>
                      <p className="text-xs font-bold text-[#101535]">
                        {featuredPost.author.name}
                      </p>
                      <p className="text-[10px] font-semibold text-[#7e87a5]">
                        {featuredPost.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF6FF] text-[#7138F5] transition-all group-hover:bg-[#7138F5] group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* =========================================
            BLOG GRID
        ========================================= */}
        <div className="mt-14">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-black tracking-tight text-[#101535]">
              {selectedCategory === 'All Articles' ? 'Latest Growth Dispatches' : selectedCategory}
              <span className="ml-2 text-sm font-semibold text-[#7e87a5]">
                ({filteredPosts.length})
              </span>
            </h3>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-[#ded5ec] bg-white/60 p-12 text-center">
              <Tag className="mx-auto text-[#7138F5]" size={32} />
              <h4 className="mt-3 text-lg font-bold text-[#101535]">No articles found</h4>
              <p className="mt-1 text-sm text-[#515b7c]">
                Try adjusting your search keyword or browse a different category filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {filteredPosts.map((post, i) => (
                  <motion.article
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#e8ddf7] bg-white shadow-[0_10px_30px_rgba(113,56,245,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#7138F5]/40 hover:shadow-[0_20px_45px_rgba(113,56,245,0.12)]"
                  >
                    <div>
                      {/* Card Cover */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F0E8FF]">
                        <img
                          src={post.cover}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Metric Badge */}
                        <div className="absolute bottom-3 left-3">
                          <span className="rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-extrabold text-[#7138F5] shadow-sm backdrop-blur-md">
                            {post.metrics}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 sm:p-6">
                        <div className="flex items-center justify-between text-[11px] font-bold">
                          <span className="rounded-md bg-[#FAF6FF] px-2.5 py-0.5 text-[#7138F5]">
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1 text-[#7e87a5]">
                            <Clock size={11} /> {post.readTime}
                          </span>
                        </div>

                        <h4 className="mt-3 text-base font-extrabold leading-snug tracking-tight text-[#101535] transition-colors group-hover:text-[#7138F5]">
                          {post.title}
                        </h4>

                        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#515b7c]">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Author & CTA Footer */}
                    <div className="flex items-center justify-between border-t border-[#f4eefb] px-5 py-4 sm:px-6">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="h-8 w-8 rounded-full border border-white object-cover shadow-xs"
                        />
                        <div className="text-left">
                          <p className="text-[11px] font-bold text-[#101535]">
                            {post.author.name}
                          </p>
                          <p className="text-[9px] font-semibold text-[#8a92ac]">
                            {post.date}
                          </p>
                        </div>
                      </div>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF6FF] text-[#7138F5] transition-transform group-hover:scale-110 group-hover:bg-[#7138F5] group-hover:text-white">
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* =========================================
            ✨ DIGITAL MARKETING TOOLS & PLATFORMS SECTION
            (Seamless & Transparent - No Outer Card Background)
        ========================================= */}
        <section className="relative mt-24">
          <div className="mx-auto max-w-3xl text-center">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#7138F5]/20 bg-[#FAF6FF] px-3.5 py-1 text-xs font-extrabold text-[#7138F5] shadow-xs">
              <Layers size={13} className="text-[#7138F5]" />
              Battle-Tested Growth Stack
            </div>

            <h3 className="mt-3 text-2xl font-black tracking-tight text-[#101535] sm:text-3xl lg:text-4xl">
              Digital Marketing Tools You’ll{' '}
              <span className="bg-gradient-to-r from-[#7138F5] via-[#8B5CF6] to-[#F46B68] bg-clip-text text-transparent">
                Become Proficient In
              </span>
            </h3>

            <p className="mt-3 text-xs leading-relaxed text-[#515b7c] sm:text-sm md:text-base">
              As modern growth strategists, we rely on industry-standard platforms every single day. 
              Our articles and playbooks walk you through the exact setup, attribution triggers, 
              and bidding tactics across each of these vital technologies.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 sm:gap-4">
            {MARKETING_TOOLS.map((tool, idx) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="group relative flex flex-col items-center justify-center rounded-2xl border border-[#ded5ec]/70 bg-white/70 backdrop-blur-xs p-4 py-5 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#7138F5]/40 hover:bg-white hover:shadow-[0_12px_28px_rgba(113,56,245,0.10)]"
              >
                {/* Logo Display */}
                <div className="flex h-10 w-full items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  {tool.icon}
                </div>

                {/* Name */}
                <h5 className="mt-2.5 text-xs font-bold text-[#101535] group-hover:text-[#7138F5] transition-colors">
                  {tool.name}
                </h5>

                {/* Category Pill */}
                <span className="mt-1 text-[10px] font-semibold text-[#8a92ac]">
                  {tool.category}
                </span>

                {/* Subtle indicator dot on hover */}
                <div
                  className="absolute bottom-1.5 h-1 w-6 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ backgroundColor: tool.color || '#7138F5' }}
                />
              </motion.div>
            ))}
          </div>

          {/* Sub-note */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-[#ded5ec]/50 pt-6 text-xs text-[#7e87a5]">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Live API Integrations
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7138F5]"></span>
              Step-by-Step SOP Breakdowns
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF9F1C]"></span>
              Agency-Tested Ad Strategies
            </span>
          </div>
        </section>

        {/* =========================================
            NEWSLETTER / GROWTH CONSULTATION CTA
        ========================================= */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-[#7138F5]/30 bg-gradient-to-br from-[#101535] via-[#1a1442] to-[#7138F5] px-6 py-12 text-center text-white shadow-[0_25px_60px_rgba(113,56,245,0.25)] sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FF9F1C]/20 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#7138F5]/40 blur-[90px]" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold text-[#FFD166] backdrop-blur-md">
              <Sparkles size={12} />
              The Weekly ROAS Dispatch
            </span>

            <h3 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
              Get the confidential funnels that drive verified inquiries.
            </h3>

            <p className="mt-3 text-xs leading-relaxed text-white/80 sm:text-sm md:text-base">
              Join 2,400+ founders and CMOs receiving our weekly teardown of ad creatives,
              funnel mechanics, and conversion hacks. No spam, ever.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/20 px-5 py-2.5 text-sm font-bold text-emerald-300"
              >
                <BookmarkCheck size={18} />
                You’re in! Check your inbox for our latest audit breakdown.
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="mx-auto mt-7 flex max-w-md flex-col gap-2.5 sm:flex-row"
              >
                <div className="relative flex-1">
                  <Mail
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/50"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-full border border-white/20 bg-white/10 py-3 pl-10 pr-4 text-xs font-medium text-white placeholder-white/50 backdrop-blur-md focus:border-white focus:outline-none sm:text-sm"
                  />
                </div>

                <Magnetic>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F46B68] to-[#FF9F1C] px-6 py-3 text-xs font-black text-white shadow-lg transition-transform hover:scale-105 active:scale-95 sm:w-auto sm:text-sm"
                  >
                    Join VIP List
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </Magnetic>
              </form>
            )}

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-[11px] font-medium text-white/60">
              <span>✦ Instant Unsubscribe Anytime</span>
              <span>✦ Real Delhi-NCR Case Studies</span>
              <span>✦ Zero Agency Fluff</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}