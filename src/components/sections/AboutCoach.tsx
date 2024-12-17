'use client';

import Image from 'next/image';
import type { ReactElement } from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Heart, MessageCircle } from 'lucide-react';

interface Credential {
  icon: ReactElement;
  title: string;
  description: string;
}

const credentials: Credential[] = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Education",
    description: "Master's in Clinical Psychology, Certified Life Coach"
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Experience",
    description: "10+ years helping clients achieve their goals"
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Specialization",
    description: "Anxiety, Depression, Personal Growth"
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Approach",
    description: "Compassionate, Solution-focused therapy"
  }
];

export function AboutCoach() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white via-primary-50/30 to-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
              {/* Replace the src with your actual image path */}
              <Image
                src="/images/sarah.webp"
                alt="Your Mental Health Coach"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-primary-100 to-secondary-100 blur-3xl opacity-30 -m-4" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary-900/10" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600"
              >
                Meet Your Coach
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-primary-600"
              >
                Hi, I'm Sarah Johnson
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-gray-600 leading-relaxed">
                With over a decade of experience in mental health and personal development, 
                I'm passionate about helping individuals discover their inner strength and 
                create meaningful change in their lives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My approach combines evidence-based therapeutic techniques with practical 
                coaching strategies, creating a supportive environment where you can explore, 
                grow, and thrive.
              </p>
            </motion.div>

            {/* Credentials Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              {credentials.map((credential, index) => (
                <motion.div
                  key={credential.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2 text-primary-600">
                    {credential.icon}
                    <h3 className="font-semibold">{credential.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{credential.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative border-l-4 border-primary-500 pl-4 italic text-gray-600"
            >
              "My mission is to help you navigate life's challenges with confidence and create 
              the fulfilling life you deserve."
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutCoach;
