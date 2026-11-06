export const chatbotFAQs = [
  {
    keywords: ["services", "offer"],
    question: "What services do you offer?",
    answer:
      "Brandtisers Media offers SEO, Social Media Marketing, Website Development, Graphic Designing, Meta Ads, Google Ads and Lead Generation."
  },
  {
    keywords: ["contact", "phone"],
    question: "How can I contact you?",
    answer:
      "You can contact Brandtisers Media at +91 7701910068."
  }
];

export const getBotAnswer = (message) => {
  const input = message.toLowerCase();

  const matchedFAQ = chatbotFAQs.find((faq) =>
    faq.keywords.some((keyword) => input.includes(keyword))
  );

  return matchedFAQ
    ? matchedFAQ.answer
    : "Please contact Brandtisers Media at +91 7701910068 for more information.";
};