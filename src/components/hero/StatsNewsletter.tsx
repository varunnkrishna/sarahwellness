'use client';

import { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

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
    <div className="w-full bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-neutral-100 lg:absolute lg:bottom-8 lg:left-8 lg:right-8">
      <div className="space-y-4">
        {/* Newsletter Stats */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 text-sm gap-2">
          <div className="text-primary-500">
            <span className="font-bold text-lg">93%</span>
            <span className="text-primary-800 ml-1">stress reduction</span>
          </div>
          <div className="text-primary-500">
            <span className="font-bold text-lg">15K+</span>
            <span className="text-primary-800 ml-1">subscribers</span>
          </div>
          <div className="text-primary-500">
            <span className="font-bold text-lg">4.9</span>
            <span className="text-primary-800 ml-1">user rating</span>
          </div>
        </div>

        {/* Newsletter Form */}
        <form onSubmit={handleSubscribe} className="space-y-3">
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
        </form>
      </div>
    </div>
  );
}
