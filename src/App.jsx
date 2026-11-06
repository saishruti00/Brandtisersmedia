
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Chatbot from "./components/Chatbot";
import { Footer } from "./components/sections/Footer";

import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-[#1a084c] text-white">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        <Chatbot />

        <Toaster
          position="top-right"
          containerStyle={{ zIndex: 9999 }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
