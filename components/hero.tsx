'use client';

import { ArrowRight, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
            <Zap size={18} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Meet Your AI Employee</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Work Smarter with <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Crusty AI</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Your 24/7 intelligent assistant that automates workflows, boosts productivity, and helps your team accomplish more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              <span>Start Free Trial</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-gray-900 rounded-lg hover:border-gray-400 transition font-medium"
            >
              Explore Features
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            ✓ No credit card required · ✓ 30-day free trial · ✓ Cancel anytime
          </p>
        </div>

        <div className="relative h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">⚡</span>
            </div>
            <p className="text-gray-600 font-medium">Intelligent Automation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
