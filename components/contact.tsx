'use client';

import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-12">
          Start your free 30-day trial today. No credit card required.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Mail className="text-blue-600" size={32} />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Schedule a Demo
          </h3>
          <p className="text-gray-600 mb-8">
            Book a time that works best for you. Our team will walk you through personalized features for your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-bold text-lg"
            >
              <span>Schedule Demo with Cal.com</span>
            </a>
            <a
              href="mailto:hello@crusty.ai"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition font-bold text-lg"
            >
              <span>Contact Us</span>
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Or reply to our email - we typically respond within 2 hours during business hours.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div>
            <div className="text-4xl font-bold mb-2">10K+</div>
            <p className="text-blue-100">Active Users</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <p className="text-blue-100">Integrations</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">99.9%</div>
            <p className="text-blue-100">Uptime SLA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
