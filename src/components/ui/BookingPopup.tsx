'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Clock } from 'lucide-react';
import { Button } from './Button';

/**
 * A popup component that encourages users to book a free consultation session.
 * Appears after a delay and can be dismissed.
 */
export function BookingPopup() {
  const [isOpen, setIsOpen] = useState(false);

  // Show popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Store user's choice in localStorage
  const handleChoice = (choice: 'book' | 'ignore') => {
    localStorage.setItem('mental_health_choice', choice);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[calc(100%-2rem)] md:w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 md:p-8 mx-4 md:mx-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="text-center space-y-4 pt-2">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-primary-500" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary-900">
                    Your Mental Health Matters
                  </h3>
                  <p className="text-neutral-600">
                    Take the first step towards a healthier mind today.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-secondary-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">First consultation is FREE!</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <Button
                    onClick={() => {
                      handleChoice('book');
                      window.open('https://cal.com/varun-krishna-0518r1/30min', '_blank');
                    }}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                  >
                    Book Your Free Session Now
                  </Button>
                  <Button
                    onClick={() => handleChoice('ignore')}
                    variant="outline"
                    className="w-full border-neutral-200 text-neutral-600 hover:bg-neutral-50 py-3 rounded-xl font-medium transition-colors"
                  >
                    Maybe Later
                  </Button>
                  <p className="text-xs text-neutral-500 pt-2">
                    Your journey to better mental health begins with a single step.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
