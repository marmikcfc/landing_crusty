'use client';

import { Brain, Zap, Clock, Lock, BarChart3, Workflow } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Smart Learning',
    description: 'Learns your workflows and adapts to your business needs automatically.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process information instantly and make real-time decisions.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Work around the clock without fatigue or vacation days.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with industry standards.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Get insights into performance metrics and optimization opportunities.',
  },
  {
    icon: Workflow,
    title: 'Seamless Integration',
    description: 'Connect with your favorite tools and systems effortlessly.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to transform your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
