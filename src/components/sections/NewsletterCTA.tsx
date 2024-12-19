/**
 * Newsletter call-to-action component with two variants: default and minimal.
 * Supports both light and dark themes.
 */
'use client';

export function NewsletterCTA({ 
  variant = 'default', 
  theme = 'light',
  className = '' 
}: NewsletterCTAProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // TODO: Implement newsletter subscription logic
    // Simulating API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className={`w-full px-8 ${className}`}>
      {variant === 'default' ? (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-800 via-secondary-800 to-accent-800 p-8 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(115,81,61,0.2),transparent_70%)]" />
          <div className="absolute inset-0 bg-grid-neutral-100/[0.04] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join Our Wellness Community
              </h2>
              <p className="text-lg text-neutral-200 mb-8">
                Get weekly insights on mental wellness, meditation techniques, and exclusive resources delivered straight to your inbox.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/90 text-neutral-800 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300 hover:bg-white"
                  required
                />
                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-primary-800 hover:bg-primary-900 text-white px-6 py-3 transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  {status === 'loading' ? (
                    'Subscribing...'
                  ) : status === 'success' ? (
                    'Subscribed!'
                  ) : (
                    <motion.span 
                      className="flex items-center justify-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Subscribe
                      <Send className="ml-2 h-4 w-4" />
                    </motion.span>
                  )}
                </Button>
              </div>
            </motion.form>
          </div>
        </div>
      ) : (
        <div className="relative py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto text-center mb-4"
          >
            <h3 className={`text-lg font-medium mb-2 ${
              theme === 'light' ? 'text-neutral-800' : 'text-neutral-100'
            }`}>
              Stay Updated
            </h3>
            <p className={`text-sm ${
              theme === 'light' ? 'text-neutral-600' : 'text-neutral-300'
            }`}>
              Join our newsletter for weekly wellness tips
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="max-w-sm mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className={`flex-1 px-4 py-2 rounded-lg transition-all duration-200
                  ${theme === 'light' 
                    ? 'bg-neutral-100 text-neutral-800 placeholder:text-neutral-500 focus:bg-white'
                    : 'bg-neutral-800/50 text-white placeholder:text-neutral-400 focus:bg-neutral-800'
                  }
                  focus:outline-none focus:ring-1 focus:ring-primary-500`}
                required
              />
              <Button
                type="submit"
                disabled={status === 'loading'}
                variant="outline"
                className={`px-6 py-2 transition-all duration-200
                  ${theme === 'light'
                    ? 'border-neutral-200 hover:border-primary-500 hover:text-primary-600 text-neutral-700'
                    : 'border-neutral-700 hover:border-primary-400 hover:text-primary-400 text-neutral-300'
                  }`}
              >
                {status === 'loading' ? (
                  <span className={theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'}>
                    Subscribing...
                  </span>
                ) : status === 'success' ? (
                  <span className={theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'}>
                    Subscribed!
                  </span>
                ) : (
                  <motion.span 
                    className="flex items-center justify-center"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Subscribe
                    <Send className={`ml-2 h-4 w-4 ${
                      theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
                    }`} />
                  </motion.span>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      )}
    </div>
  );
}


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Send } from 'lucide-react';

interface NewsletterCTAProps {
  variant?: 'default' | 'minimal';
  theme?: 'light' | 'dark';
  className?: string;
}
