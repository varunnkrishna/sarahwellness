'use client';

import { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { motion } from 'framer-motion';

export function StatsNewsletter() {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeStatus('loading');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubscribeStatus('success');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-neutral-100 lg:absolute lg:bottom-8 lg:left-8 lg:right-8"
    >
      <div className="space-y-4">
        {/* Newsletter Stats */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 text-sm gap-1 sm:gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-primary-500"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-bold text-lg"
            >
              93%
            </motion.span>
            <span className="text-primary-800 ml-1">stress reduction</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-primary-500"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-bold text-lg"
            >
              15K+
            </motion.span>
            <span className="text-primary-800 ml-1">subscribers</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-primary-500"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-bold text-lg"
            >
              4.9
            </motion.span>
            <span className="text-primary-800 ml-1">user rating</span>
          </motion.div>
        </div>

        {/* Newsletter Form */}
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onSubmit={handleSubscribe} 
          className="space-y-3"
        >
          <div className="space-y-1">
            <p className="text-base font-semibold text-primary-500">Join our weekly mindfulness newsletter</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button 
              type="submit"
              variant="primary"
              className="bg-secondary-500 hover:bg-secondary-600 text-white w-full sm:w-auto"
              disabled={subscribeStatus === 'loading'}
            >
              {subscribeStatus === 'loading' ? 'Subscribing...' : 
               subscribeStatus === 'success' ? 'Subscribed!' : 
               'Get Free Tips'}
            </Button>
          </div>
          {subscribeStatus === 'success' && (
            <p className="text-xs text-secondary-500">🎉 Welcome to our mindfulness community! Check your inbox soon.</p>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
}
