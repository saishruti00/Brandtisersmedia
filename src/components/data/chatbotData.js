
export const chatbotFAQs = [
  {
    keywords: ["about", "company", "brandtisers", "who are you"],
    question: "Tell me about Brandtisers Media",
    answer:
      "Brandtisers Media is a performance-driven digital marketing agency in New Delhi. We help businesses grow through customized marketing strategies, lead generation, brand awareness and measurable results. We have experience across 15 sectors."
  },
  {
    keywords: ["services", "offer", "what do you do"],
    question: "What services do you offer?",
    answer:
      "We offer SEO, Social Media Marketing, Website Development, Graphic Designing, Meta Ads, Google Ads, WhatsApp Marketing, Influencer Marketing, Affiliate Marketing and Lead Generation."
  },
  {
    keywords: ["seo", "search engine", "ranking"],
    question: "Do you provide SEO services?",
    answer:
      "Yes! Our SEO services focus on improving Google rankings, increasing organic website traffic and helping potential customers discover your business."
  },
  {
    keywords: ["social media", "smm", "instagram", "facebook"],
    question: "Do you offer Social Media Marketing?",
    answer:
      "Yes! We provide Social Media Marketing and Management services to improve brand visibility, audience engagement and business growth."
  },
  {
    keywords: ["google ads", "ppc", "google advertising"],
    question: "Can you manage Google Ads?",
    answer:
      "Yes! We create targeted Google Ads campaigns to help businesses increase website traffic, generate leads and improve sales opportunities."
  },
  {
    keywords: ["meta ads", "facebook ads", "instagram ads"],
    question: "Do you run Meta Ads?",
    answer:
      "Yes! We manage Meta advertising campaigns across Facebook, Instagram and Messenger to help businesses reach relevant audiences and generate leads."
  },
  {
    keywords: ["website", "web development", "web design"],
    question: "Do you develop websites?",
    answer:
      "Yes! We develop professional, responsive and user-friendly websites designed to improve the online experience."
  },
  {
    keywords: ["graphic", "design", "creative", "logo"],
    question: "Do you offer Graphic Designing?",
    answer:
      "Yes! We provide graphic design services including branding visuals, advertising creatives, layouts and logo designs."
  },
  {
    keywords: ["clients", "brands", "worked with"],
    question: "Which brands have you worked with?",
    answer:
      "Our experience includes collaborations with Godrej Properties, DLF, M3M India, Ganga Anantam, Elan the Mark, Elan Presidential, Silverglades Legacy, Geetanjali, Value Max, SRE India, Key Dreams and Euro Woods."
  },
  {
    keywords: ["industries", "sectors"],
    question: "Which industries do you serve?",
    answer:
      "We have experience across 15 sectors, including real estate, finance, healthcare, lifestyle and more."
  },
  {
    keywords: ["consultation", "appointment", "audit"],
    question: "How can I book a consultation?",
    answer:
      "You can request a free consultation by calling +91 7701910068 or emailing info@brandtisersmedia.com."
  },
  {
    keywords: ["contact", "phone", "call", "number", "email"],
    question: "How can I contact you?",
    answer:
      "Call us at +91 7701910068, 7838808903 or 8802081802. Email: info@brandtisersmedia.com or brandtisersmedia@gmail.com."
  },
  {
    keywords: ["address", "location", "office", "where"],
    question: "Where is your office?",
    answer:
      "Our listed addresses are A-91, First Floor, Dwarka Mor, Sewak Park, Dwarka, New Delhi 110059 and 1/46, 2nd Floor, Vijay Enclave, Dashrath Puri, Dabri Marg, New Delhi 110045."
  }
];

export const getBotAnswer = (message) => {
  const input = message.toLowerCase().trim();

  if (!input) {
    return "Please enter a question.";
  }

  const greetings = ["hi", "hello", "hey", "namaste"];

  if (greetings.includes(input)) {
    return "Hello! Welcome to Brandtisers Media. How can I help you?";
  }

  const matchedFAQ = chatbotFAQs
    .map((faq) => ({
      faq,
      score: faq.keywords.reduce(
        (score, keyword) =>
          score + (input.includes(keyword) ? keyword.length : 0),
        0
      )
    }))
    .sort((a, b) => b.score - a.score)[0];

  if (matchedFAQ && matchedFAQ.score > 0) {
    return matchedFAQ.faq.answer;
  }

  return "I can help with Brandtisers Media's services, company information and contact details. For other questions, please contact our team at +91 7701910068.";
};
