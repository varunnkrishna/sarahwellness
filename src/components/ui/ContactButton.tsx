'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export function ContactButton() {
  return (
    <motion.a
      href="https://www.linkedin.com/in/varunkrishna90/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 bg-primary-600 hover:bg-primary-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-medium"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>Get This Template</span>
      <ExternalLink className="w-4 h-4" />
    </motion.a>
  );
}
