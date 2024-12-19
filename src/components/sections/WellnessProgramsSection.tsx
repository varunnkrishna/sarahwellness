'use client';

import { useState } from 'react';
import type { ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Clock, Users, CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/Button';

interface Program {
  icon: ReactElement;
  title: string;
  duration: string;
  tagline: string;
  benefits: string[];
  description: string;
}

const programs: Program[] = [
  {
    icon: <Heart className="w-12 h-12 text-primary-600" />,
    title: "One-on-One Support",
    duration: "50-minute sessions",
    tagline: "Your dedicated space for growth and healing",
    benefits: [
      "Personalized attention and strategies",
      "Flexible scheduling to fit your life",
      "Safe space to explore your thoughts",
      "Ongoing support between sessions"
    ],
    description: "Begin your journey with focused, one-on-one sessions tailored to your unique needs. Together, we'll work at your pace, building the tools and insights you need for lasting well-being."
  },
  {
    icon: <Users className="w-12 h-12 text-secondary-600" />,
    title: "Group Wellness",
    duration: "90-minute sessions",
    tagline: "Connect, share, and grow together",
    benefits: [
      "Learn from shared experiences",
      "Build a supportive community",
      "Practice skills in a safe group setting",
      "More affordable ongoing support"
    ],
    description: "Join a caring community of individuals on similar journeys. Our small groups provide the perfect balance of support, learning, and connection, helping you realize you're never alone."
  },
  {
    icon: <Clock className="w-12 h-12 text-accent-600" />,
    title: "Wellness Workshop",
    duration: "4-week program",
    tagline: "Intensive skills for lasting change",
    benefits: [
      "Structured learning approach",
      "Practical tools and exercises",
      "Weekly accountability",
      "Lifetime access to resources"
    ],
    description: "Ready for transformative change? Our workshops combine education, practice, and support to help you build a strong foundation for mental wellness. Perfect for those seeking structured growth."
  }
];

export function WellnessProgramsSection() {
  const [activeProgram, setActiveProgram] = useState<number | null>(null);

  return (
    <section className="w-full bg-gradient-to-b from-secondary-50 via-white to-primary-50 py-24 relative" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 leading-tight py-1"
          >
            Finding Your Perfect Path
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-600 max-w-3xl mx-auto"
          >
            Every journey is unique, and that's why we offer different ways to support your growth. 
            Choose the path that feels right for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card 
                className={`h-full bg-white/90 backdrop-blur-sm transition-all duration-300 cursor-pointer hover:shadow-lg border border-white/20 ${
                  activeProgram === index ? 'shadow-xl scale-105' : ''
                }`}
              >
                <div className="p-8">
                  <motion.div 
                    className="mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {program.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                    {program.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">{program.duration}</p>
                  <p className="text-secondary-600 font-medium mb-4">{program.tagline}</p>
                  
                  <AnimatePresence>
                    {activeProgram === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 border-t border-primary-100 pt-4"
                      >
                        <p className="text-gray-700">{program.description}</p>
                        <ul className="space-y-3">
                          {program.benefits.map((benefit, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start"
                            >
                              <CheckCircle2 className="w-5 h-5 text-accent-500 mt-1 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-6">
                    <Button
                      variant="outline"
                      className="mt-4 text-primary-600 hover:text-primary-700 hover:bg-primary-50/50 p-0 border-none"
                      onClick={() => setActiveProgram(index === activeProgram ? null : index)}
                    >
                      <span className="flex items-center">
                        Learn More
                        <ChevronRight className={`ml-1 h-4 w-4 transition-transform ${index === activeProgram ? 'rotate-90' : ''}`} />
                      </span>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-white/50 backdrop-blur-sm p-12 rounded-2xl border border-white/20"
        >
          <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
            Not Sure Which Path to Take?
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Let's talk about your goals and find the perfect fit together. Schedule a free consultation 
            to discuss your unique needs and preferences.
          </p>
          <Button 
            size="lg" 
            className="inline-flex items-center justify-center gap-2 px-6"
          >
            <span>Schedule Free Consultation</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default WellnessProgramsSection;
