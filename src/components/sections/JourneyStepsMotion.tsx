'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Brain, Heart, Shield } from 'lucide-react';
import { Button } from "../ui/Button";
import Link from 'next/link';

const steps = [
  {
    title: "Understanding Your Mind",
    description: "Learn to recognize thought patterns and emotional triggers that impact your well-being. Begin with self-awareness and discover how your mind works in different situations.",
    Icon: Brain,
    color: "text-primary-100",
    gradient: "from-primary-500 via-primary-600 to-primary-700",
    cardGradient: "from-primary-600 to-primary-700"
  },
  {
    title: "Building Connections",
    description: "Develop meaningful relationships and learn to communicate effectively with others. Strengthen your support system and create lasting bonds that contribute to your mental well-being.",
    Icon: Heart,
    color: "text-secondary-100",
    gradient: "from-secondary-500 via-secondary-600 to-secondary-700",
    cardGradient: "from-secondary-600 to-secondary-700"
  },
  {
    title: "Growing Stronger",
    description: "Develop coping strategies and build emotional resilience for life's challenges. Learn to adapt, grow, and thrive in the face of adversity while maintaining your mental health.",
    Icon: Shield,
    color: "text-accent-100",
    gradient: "from-accent-500 via-accent-600 to-accent-700",
    cardGradient: "from-accent-700 to-accent-900"
  }
];

export function JourneyStepsMotion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const sectionIndex = Math.min(
        Math.floor(latest * steps.length),
        steps.length - 1
      );
      setActiveIndex(sectionIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="px-8" id="journey">
      <div ref={containerRef} className="relative min-h-screen py-20">
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          {/* Warm, earthy background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-secondary-800 to-accent-800" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(115,81,61,0.2),transparent_70%)]" />
          <div className="absolute inset-0 bg-grid-neutral-100/[0.04] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]" />
          
          {/* Border overlay for depth */}
          <div className="absolute inset-0 ring-1 ring-neutral-100/10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-neutral-200"
            >
              Your Journey to Wellness
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-neutral-200 max-w-3xl mx-auto"
            >
              The path to mental wellness doesn't have to be walked alone. Here's how we'll take this journey together, one step at a time.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Text Content */}
            <div className="space-y-32 py-20">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0.3,
                    y: activeIndex === index ? 0 : 20
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${step.cardGradient} border border-neutral-100/10 backdrop-blur-sm shadow-xl`}>
                    {/* Card inner gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-50`} />
                    
                    {/* Content */}
                    <div className="relative p-8">
                      <h2 className="text-4xl font-bold text-neutral-200 mb-6">
                        {step.title}
                      </h2>
                      <p className="text-xl text-white/90">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom gradient line */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-100/20 to-transparent" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sticky Icon Display */}
            <div className="lg:sticky lg:top-1/3 h-[50vh] lg:h-[60vh] flex items-center justify-center">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Icon background effects */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-700 via-secondary-700 to-accent-700 blur-3xl" />
                <div className={`absolute inset-0 bg-gradient-to-r ${steps[activeIndex].gradient} rounded-full opacity-80`} />
                <div className="relative">
                  {React.createElement(steps[activeIndex].Icon, {
                    className: `w-64 h-64 ${steps[activeIndex].color} drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`,
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button
            variant="secondary"
            size="lg"
            className="bg-white/90 hover:bg-secondary-600 text-neutral-700 hover:text-white text-lg px-8 py-4 relative"
            onClick={() => window.location.href = '/contact'}
          >
            Begin Your Wellness Journey
          </Button>
        </motion.div>
      </div>
    </div>
  );
}