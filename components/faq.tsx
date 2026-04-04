'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does Crusty work?',
    answer: 'Crusty uses advanced AI algorithms to understand your workflows and automate repetitive tasks. Simply connect your tools and define your workflows through our intuitive interface.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we use enterprise-grade encryption and comply with GDPR, HIPAA, and SOC 2 standards. Your data is stored in secure data centers with regular backups.',
  },
  {
    question: 'Can I integrate with my existing tools?',
    answer: 'Absolutely! Crusty integrates with 500+ popular tools including Slack, Salesforce, HubSpot, Notion, and many more. Custom integrations are also available.',
  },
  {
    question: 'What is the trial period?',
    answer: 'We offer a 30-day free trial with full access to all Professional features. No credit card required to get started.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time. No long-term contracts or hidden fees.',
  },
  {
    question: 'Do you offer team collaboration?',
    answer: 'Yes, the Professional and Enterprise plans include full team collaboration features, role-based permissions, and audit logs.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Crusty.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-gray-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pt-2 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
