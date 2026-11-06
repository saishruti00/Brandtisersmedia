import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, X, MessageCircle } from 'lucide-react';

/* =========================================
   AGENCY VIDEO SHOWREEL MODAL
========================================= */
export function VideoModal({ item, onClose }) {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!item) return;

    const handleKey = (e) => e.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.title || 'Video Player'}
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 p-3 backdrop-blur-md sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 260 }}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0d091a] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Title & Controls */}
            <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent p-4">
              <span className="text-xs font-bold text-white/90 drop-shadow-sm">
                {item.title || 'Brandtisers Agency Showreel'}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label={muted ? 'Unmute' : 'Mute'}
                  onClick={() => setMuted(!muted)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-white/30"
                >
                  {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </button>
                <button
                  type="button"
                  aria-label="Close modal"
                  onClick={onClose}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-white/30"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black">
              <video
                className="h-full w-full object-cover"
                src={item.video}
                poster={item.poster || item.src}
                autoPlay
                controls
                playsInline
                muted={muted}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* =========================================
   WHATSAPP FLOATING BUTTON (Position Adjusted)
========================================= */
export function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/917701910068?text=Hi%20Brandtisers%20Team%2C%20I%20want%20to%20discuss%20growth%20marketing%20for%20my%20business."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="pulse-ring fixed bottom-6 left-6 z-[80] flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 active:scale-95 sm:h-13 sm:w-13"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <MessageCircle size={24} className="sm:h-6 sm:w-6" />
    </a>
  );
}