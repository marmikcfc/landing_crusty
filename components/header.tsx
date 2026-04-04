'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">C</span>
          </div>
          <span className="text-xl font-bold text-gray-900">Crusty</span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`absolute md:static top-16 left-0 right-0 md:right-auto bg-white md:bg-transparent border-b md:border-0 ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-8`}>
          <a href="#features" className="block md:inline px-4 md:px-0 py-3 md:py-0 text-gray-600 hover:text-gray-900 transition">Features</a>
          <a href="#pricing" className="block md:inline px-4 md:px-0 py-3 md:py-0 text-gray-600 hover:text-gray-900 transition">Pricing</a>
          <a href="#testimonials" className="block md:inline px-4 md:px-0 py-3 md:py-0 text-gray-600 hover:text-gray-900 transition">Testimonials</a>
          <a href="#faq" className="block md:inline px-4 md:px-0 py-3 md:py-0 text-gray-600 hover:text-gray-900 transition">FAQ</a>
          <a href="#contact" className="block md:inline px-4 md:px-0 py-3 md:py-0 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition font-medium">Get Started</a>
        </div>
      </nav>
    </header>
  );
}
