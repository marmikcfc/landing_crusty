'use client';

import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't let manual work slow you down
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of teams already using Crusty to automate their workflows.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-bold text-lg"
          >
            <span>Start Your Free Trial</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
