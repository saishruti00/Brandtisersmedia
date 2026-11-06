
import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { chatbotFAQs, getBotAnswer } from "../data/chatbotData";
import "./Chatbot.css";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! 👋 Welcome to Brandtisers Media. How can I help you today?"
    }
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end"
      });
    }
  }, [messages, isOpen]);

  const sendMessage = (question) => {
    const text = question.trim();
    if (!text) return;

    const answer = getBotAnswer(text);

    setMessages((previous) => [
      ...previous,
      { role: "user", text },
      { role: "bot", text: answer }
    ]);

    setInput("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="bm-chatbot">
      {isOpen && (
        <section className="bm-chat-window">
          <div className="bm-chat-header">
            <div className="bm-chat-avatar">
              <Bot size={23} />
            </div>

            <div className="bm-chat-heading">
              <strong>Brandtisers Assistant</strong>
              <span>● Online • Here to help</span>
            </div>

            <button
              className="bm-chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              <X size={20} />
            </button>
          </div>

          <div className="bm-chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`bm-chat-message ${message.role}`}
              >
                {message.text}
              </div>
            ))}

            <div className="bm-chat-suggestions">
              {chatbotFAQs.slice(0, 5).map((faq, index) => (
                <button
                  key={index}
                  onClick={() => sendMessage(faq.question)}
                >
                  {faq.question}
                </button>
              ))}
            </div>

            <div ref={bottomRef} />
          </div>

          <form className="bm-chat-input" onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask us anything..."
              aria-label="Your question"
            />

            <button type="submit" aria-label="Send message">
              <Send size={18} />
            </button>
          </form>

          <div className="bm-chat-footer">
            Powered by Brandtisers Media
          </div>
        </section>
      )}

      <button
        className="bm-chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
}
