import React, { useState } from 'react';
import { Music2, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navLinks = [
    { name: 'Premium', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Download', href: '#' }
  ];

  const dropdownLinks = [
    { name: 'Account', href: '#' },
    { name: 'Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Log out', href: '#' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-95 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Music2 size={32} className="text-green-500" />
            <span className="text-2xl font-bold text-white">Spotify</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="h-6 w-px bg-gray-700"></div>
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <span>Profile</span>
                <ChevronDown className={`transform transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-[#282828] rounded-md shadow-lg py-1 animate-fade-in">
                  {dropdownLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#3E3E3E] transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-white"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black z-50 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 lg:hidden`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <Music2 size={32} className="text-green-500" />
              <span className="text-2xl font-bold text-white">Spotify</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-lg text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-gray-700 my-4"></div>
            {dropdownLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-lg text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;