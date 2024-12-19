'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { NewsletterCTA } from '../sections/NewsletterCTA';

const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Programs', href: '/programs' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { name: 'Individual Therapy', href: '/programs#individual' },
      { name: 'Group Sessions', href: '/programs#group' },
      { name: 'Meditation Classes', href: '/programs#meditation' },
      { name: 'Wellness Workshops', href: '/programs#workshops' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  },
];

const contactInfo = [
  { icon: Mail, text: 'hello@mentalwellness.com', href: 'mailto:hello@mentalwellness.com' },
  { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, text: '123 Wellness Street, CA 94105', href: 'https://maps.google.com' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com' },
  { icon: Twitter, href: 'https://twitter.com' },
  { icon: Instagram, href: 'https://instagram.com' },
  { icon: Linkedin, href: 'https://linkedin.com' },
];

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-200">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="py-16">
          <NewsletterCTA variant="minimal" theme="dark"/>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 py-16 border-t border-neutral-800">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Mental Wellness Coach</h3>
            <p className="text-neutral-400 mb-6">
              Empowering individuals to achieve mental wellness through personalized guidance and support.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {React.createElement(social.icon, { size: 20 })}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="px-8 py-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center text-neutral-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {React.createElement(contact.icon, { size: 16, className: 'mr-2' })}
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="px-8 py-6 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              &copy; {new Date().getFullYear()} Mental Wellness Coach. All rights reserved.
            </p>
            <p className="text-neutral-400 text-sm">
              Designed with &hearts; by{' '}
              <a
                href="mailto:varun@veblabs.com"
                className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Varun Krishna
              </a>
              {' '}• {' '}
              <a
                href="https://www.linkedin.com/in/varunkrishna90/"
                className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Available for hire
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
