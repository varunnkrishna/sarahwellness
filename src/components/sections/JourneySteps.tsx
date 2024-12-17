'use client';

import { useEffect, useRef, useState } from 'react';
import { Brain, Heart, Shield } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: Brain,
    title: "Understanding Your Mind",
    subtitle: "Begin with self-awareness",
    description: "Learn to recognize thought patterns and emotional triggers that impact your well-being.",
    gradient: "from-primary-500/10 via-primary-500/5 to-transparent",
    iconColor: "text-primary-600",
    illustration: (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent rounded-3xl" />
        <div className="relative p-8">
          <div className="aspect-square max-w-md mx-auto">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary-100 rounded-full animate-pulse" />
            <Brain className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-primary-600" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border-2 border-primary-200 rounded-full animate-[spin_20s_linear_infinite]" />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    icon: Heart,
    title: "Building Connections",
    subtitle: "Strengthen your support system",
    description: "Develop meaningful relationships and learn to communicate effectively with others.",
    gradient: "from-secondary-500/10 via-secondary-500/5 to-transparent",
    iconColor: "text-secondary-600",
    illustration: (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-transparent rounded-3xl" />
        <div className="relative p-8">
          <div className="aspect-square max-w-md mx-auto">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 gap-4">
              <Heart className="w-24 h-24 text-secondary-400 animate-bounce" />
              <Heart className="w-24 h-24 text-secondary-500 animate-bounce delay-100" />
              <Heart className="w-24 h-24 text-secondary-600 animate-bounce delay-200" />
              <Heart className="w-24 h-24 text-secondary-700 animate-bounce delay-300" />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    icon: Shield,
    title: "Growing Stronger",
    subtitle: "Build resilience and confidence",
    description: "Develop coping strategies and build emotional resilience for life's challenges.",
    gradient: "from-accent-500/10 via-accent-500/5 to-transparent",
    iconColor: "text-accent-600",
    illustration: (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-transparent rounded-3xl" />
        <div className="relative p-8">
          <div className="aspect-square max-w-md mx-auto">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Shield className="w-40 h-40 text-accent-600" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 border-4 border-accent-200 rounded-full animate-[spin_15s_linear_infinite]" />
                <div className="absolute w-56 h-56 border-4 border-accent-100 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export function JourneySteps() {
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate progress based on container position
      const startOffset = 100; // Start earlier
      const scrollRange = viewportHeight * 0.6; // Shorter range for quicker transitions
      
      const progress = Math.max(0, (startOffset - containerRect.top) / scrollRange);
      const stepCount = steps.length - 1;
      const currentStep = Math.min(Math.floor(progress * stepCount), stepCount);
      
      setActiveStep(currentStep);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-white py-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-900">
            Your Journey to Wellness
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            The path to mental wellness doesn't have to be walked alone. Here's how we'll take this journey together, one step at a time.
          </p>
        </div>

        <div className="relative min-h-[50vh]">
          {/* Left side with steps */}
          <div className="lg:w-1/2 sticky top-24" ref={stepsRef}>
            {/* Progress Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-neutral-200">
              <div 
                className="absolute top-0 w-full bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 transition-all duration-700 ease-out"
                style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
            </div>

            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative pl-16 pr-8 py-8 transition-all duration-700 ease-out ${
                  index === activeStep
                    ? 'opacity-100 translate-x-0'
                    : index < activeStep
                    ? 'opacity-90 -translate-x-4'
                    : 'opacity-90 translate-x-4'
                }`}
              >
                {/* Step Number with Icon */}
                <div className={`absolute left-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-700 ease-out ${
                  index <= activeStep ? 'bg-gradient-to-br from-secondary-500 to-primary-500' : 'bg-neutral-200'
                }`}>
                  <span className="text-white font-semibold">{step.id}</span>
                </div>

                {/* Content Card */}
                <div 
                  className={`relative p-8 rounded-2xl bg-white shadow-lg overflow-hidden transform transition-all duration-700 ease-out ${
                    index === activeStep ? 'scale-105' : 'scale-100'
                  }`}
                >
                  {/* Background Gradient */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient}`}
                    style={{ opacity: index === activeStep ? 0.15 : 0 }}
                  />
                  
                  {/* Icon */}
                  <div className="relative mb-4">
                    <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                  </div>

                  {/* Text Content */}
                  <div className="relative space-y-4">
                    <h3 className="text-2xl font-semibold text-primary-900">{step.title}</h3>
                    <p className="text-primary-600">{step.subtitle}</p>
                    <p className="text-primary-500 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side with illustration */}
          <div className="hidden lg:block lg:w-1/2 lg:ml-auto sticky top-24 h-[calc(100vh-6rem)]">
            <div className="w-full h-full flex items-center justify-center">
              {steps[activeStep]?.illustration}
            </div>
          </div>

          {/* Spacer for scroll */}
          <div className="lg:w-1/2 lg:ml-auto h-[120vh]" />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-secondary-500 to-primary-500 text-white rounded-lg font-medium hover:from-secondary-600 hover:to-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl">
            Begin Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}