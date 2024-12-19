'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Heart, Shield } from 'lucide-react';

/**
 * Component that displays common pain points and challenges in mental health journey.
 * Each point is presented with an icon and description.
 */
export function PainPoints() {
  const journeyPoints = [
    {
      icon: Brain,
      title: "Feeling Overwhelmed?",
      points: [
        "Struggling with constant stress and anxiety",
        "Finding it hard to focus or make decisions",
        "Feeling exhausted but unable to rest"
      ],
      gradient: "from-primary-500/10 via-primary-500/5 to-transparent"
    },
    {
      icon: Heart,
      title: "Seeking Connection?",
      points: [
        "Difficulty maintaining meaningful relationships",
        "Feeling isolated despite being around others",
        "Wanting to open up but not knowing how"
      ],
      gradient: "from-secondary-500/10 via-secondary-500/5 to-transparent"
    },
    {
      icon: Shield,
      title: "Ready for Change?",
      points: [
        "Recognizing patterns that no longer serve you",
        "Wanting to build healthier boundaries",
        "Seeking guidance but unsure where to start"
      ],
      gradient: "from-accent-500/10 via-accent-500/5 to-transparent"
    }
  ];

  return (
    <div className="w-full py-24 px-8 bg-gradient-to-b from-neutral-10 via-white to-neutral-50">
      <div className="w-full mx-auto">
        {/* Bento-style container with gradient background */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-neutral-80 via-neutral-50/90 to-primary-50/80 shadow-xl overflow-hidden backdrop-blur-sm">
          {/* Decorative background elements */}
          <div className="max-w-7xl mx-auto">
            <div className="absolute inset-0 bg-grid-neutral-100/25" />
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-100/30 via-transparent to-secondary-100/30" />
              <div className="absolute inset-0 bg-gradient-to-bl from-accent-100/20 via-transparent to-primary-100/20" />
              {/* Radial gradient overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary-200/20 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary-200/20 via-transparent to-transparent" />
            </div>
            <div className="absolute inset-0 backdrop-blur-[2px]" style={{ opacity: 0.1 }} />
          
            {/* Content container */}
            <div className="relative px-4 sm:px-6 lg:px-8 py-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent leading-tight py-1">
                  Where Are You in Your Journey?
                </h2>
                <p className="text-xl text-primary-600 max-w-3xl mx-auto">
                  Everyone's path to mental wellness is unique. Identify where you are today, 
                  and let's take the next step together.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="absolute hidden md:block top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-100 via-secondary-100 to-accent-100 -translate-y-1/2 z-0" />

                {journeyPoints.map((point, index) => (
                  <div key={index} className="relative group">
                    {/* Card with hover effects */}
                    <Card className="relative z-10 h-full transition-all duration-500 hover:scale-105 hover:shadow-xl bg-white/80 backdrop-blur-sm border-neutral-200/50 hover:border-primary-200">
                      <CardContent className="p-8">
                        {/* Icon with gradient background */}
                        <div className={`w-16 h-16 rounded-2xl mb-6 relative overflow-hidden group-hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br ${point.gradient}`}>
                          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
                          <div className="relative h-full flex items-center justify-center">
                            <point.icon className="w-8 h-8 text-primary-600" />
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-2xl font-semibold mb-6 text-primary-900 group-hover:text-primary-600 transition-colors duration-300">
                          {point.title}
                        </h3>
                        <ul className="space-y-4">
                          {point.points.map((text, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-primary-700">
                              <svg
                                className="w-5 h-5 text-secondary-500 mt-1 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span>{text}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-16 text-center">
                <p className="text-2xl font-semibold text-primary-900 mb-8">
                  Ready to begin your transformation?
                </p>
                <button className="px-8 py-4 bg-gradient-to-r from-secondary-500 to-primary-500 text-white rounded-lg font-medium hover:from-secondary-600 hover:to-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start Your Journey Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
