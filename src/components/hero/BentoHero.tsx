'use client';

import Image from 'next/image';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { useState } from 'react';

export function BentoHero() {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeStatus('loading');
    // Here you would typically make an API call to your newsletter service
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <div className="px-0 lg:px-8 overflow-x-hidden">
      <div className="w-full py-16 lg:py-16 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary-50 via-primary-50 to-accent-100 relative overflow-hidden rounded-2xl">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid-primary-100/30 [mask-image:radial-gradient(white,transparent_85%)] z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent z-0" />
        
        {/* Floating shapes */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-secondary-200/20 to-accent-200/20 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-tr from-primary-200/20 to-secondary-200/20 rounded-full blur-3xl z-0" />
        
        <Container className="relative z-10">
          <div className="sm:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column */}
              <div className="space-y-8 lg:space-y-10 text-center sm:text-left">
                <div className="space-y-6">
                  {/* Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-100 text-secondary-600 font-medium text-sm mx-auto sm:mx-0">
                    🎯 Your Journey to Mental Wellness Starts Here
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary-500 leading-[1.1]">
                    We've All Felt Like Life Is{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-accent-500">
                      Just Too Much
                    </span>{' '}
                    Sometimes
                  </h1>
                  <p className="text-lg sm:text-xl font-medium text-primary-600 leading-relaxed max-w-2xl mx-auto sm:mx-0">
                    You're not alone. Together, we can uncover your inner strength, set boundaries, 
                    and create the life you truly deserve.
                  </p>
                </div>

                {/* CTA Buttons with enhanced styling */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center sm:justify-start">
                  <Button
                    size="lg"
                    className="bg-primary-600 text-white hover:bg-secondary-600 hover:text-white w-full sm:w-auto"
                  >
                    Book a Session
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 bg-white/5 text-black hover:bg-white/10 w-full sm:w-auto"
                  >
                    Learn More
                  </Button>
                </div>

                {/* Trust Indicators with enhanced design */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pt-4 justify-center sm:justify-start">
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-primary-800 font-medium">Daily Guidance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <span className="text-primary-800 font-medium">Personalized Care</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <span className="text-primary-800 font-medium">Safe Space</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Image Section */}
              <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-400/30 via-accent-400/20 to-transparent rounded-2xl"></div>
                
                {/* Main Image */}
                <Image
                  src="/images/hero-background.jpg"
                  alt="Person meditating peacefully"
                  fill
                  className="object-cover object-left-top rounded-2xl"
                  priority
                />

                {/* Floating Stats Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-neutral-100">
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
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
