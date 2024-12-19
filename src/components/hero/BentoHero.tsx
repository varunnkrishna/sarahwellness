'use client';

import Image from 'next/image';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { StatsNewsletter } from './StatsNewsletter';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-100 text-secondary-600 font-medium text-sm mx-auto sm:mx-0"
                  >
                    🎯 Your Journey to Mental Wellness Starts Here
                  </motion.div>
                  
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary-500 leading-[1.1]"
                  >
                    We've All Felt Like Life Is{' '}
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-accent-500"
                    >
                      Just Too Much
                    </motion.span>{' '}
                    Sometimes
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-lg sm:text-xl font-medium text-primary-600 leading-relaxed max-w-2xl mx-auto sm:mx-0"
                  >
                    You're not alone. Together, we can uncover your inner strength, set boundaries, 
                    and create the life you truly deserve.
                  </motion.p>
                </motion.div>

                {/* CTA Buttons with enhanced styling */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 mt-8 justify-center sm:justify-start"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="bg-primary-600 text-white hover:bg-secondary-600 hover:text-white w-full sm:w-auto transition-all duration-300"
                    >
                      Book a Session
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/20 bg-white/5 text-black hover:bg-white/10 w-full sm:w-auto transition-all duration-300"
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Trust Indicators with enhanced design */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pt-4 justify-center sm:justify-start"
                >
                  {[
                    {
                      icon: <svg className="w-6 h-6 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>,
                      text: "Daily Guidance"
                    },
                    {
                      icon: <svg className="w-6 h-6 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>,
                      text: "Personalized Care"
                    },
                    {
                      icon: <svg className="w-6 h-6 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>,
                      text: "Safe Space"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="bg-secondary-100 p-3 rounded-full">
                        {item.icon}
                      </div>
                      <span className="text-primary-800 font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Right Column - Image and Newsletter */}
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Image Section */}
                <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
                  {/* Gradient Overlay */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-secondary-400/30 via-accent-400/20 to-transparent rounded-2xl"
                  />
                  
                  {/* Main Image */}
                  <Image
                    src="/images/hero-background.jpg"
                    alt="Person meditating peacefully"
                    fill
                    className="object-cover object-left-top rounded-2xl"
                    priority
                  />

                  {/* Stats and Newsletter - Desktop Only */}
                  <div className="hidden lg:block">
                    <StatsNewsletter />
                  </div>
                </div>

                {/* Stats and Newsletter - Mobile Only */}
                <div className="block lg:hidden">
                  <StatsNewsletter />
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
