'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechStartup Co',
    image: '👩‍💼',
    content: 'Crusty has been a game-changer for our team. We\'ve reduced manual work by 60% and can now focus on strategic initiatives.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Operations Manager, Global Retail',
    image: '👨‍💼',
    content: 'The automation capabilities are incredible. We handle 3x more customers without hiring additional staff.',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Marketing Director, Digital Agency',
    image: '👩‍🎨',
    content: 'Implementation was seamless and the ROI is measurable. Highly recommend to any growing business.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Founder, SaaS Platform',
    image: '👨‍💻',
    content: 'The analytics dashboard gives us real-time insights. Crusty is not just a tool, it\'s a strategic asset.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Loved by Teams Worldwide
          </h2>
          <p className="text-xl text-gray-600">
            See how companies are transforming with Crusty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition"
            >
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
