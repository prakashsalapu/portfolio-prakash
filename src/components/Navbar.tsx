'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = ['Home', 'About', 'Work', 'Services', 'Contact'];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll behavior (visible on scroll up or top — desktop only)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isDesktop = window.innerWidth >= 640;

      if (isDesktop) {
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 60);
      } else {
        setIsVisible(true); // Always visible in mobile
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Smooth scroll to section and set active tab
  const handleClick = (item: string) => {
    setActiveTab(item);
    setMenuOpen(false);
    const section = document.getElementById(item.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-full z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}
    >
      {/* Desktop View */}
      <div className="hidden sm:flex justify-center">
        <ul className="flex gap-6 bg-white/90 px-6 py-3 rounded-full shadow-lg backdrop-blur-md">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => handleClick(item)}
              className={`px-5 py-2 rounded-full cursor-pointer text-[17px] font-medium transition-all duration-300 ${
                activeTab === item
                  ? 'bg-gradient-to-r from-blue-400 to-sky-500 text-white shadow-md scale-105'
                  : 'text-black hover:bg-gradient-to-r hover:from-blue-400 hover:to-sky-500 hover:text-black hover:shadow-md hover:scale-105'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Hamburger (Always fixed on top right) */}
      <div className="sm:hidden fixed top-4 right-4 z-[60]">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 bg-black/80 backdrop-blur-md rounded-md text-white shadow-md"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`sm:hidden fixed top-14 right-0 w-[70%] bg-white rounded-l-xl shadow-xl z-40 transform transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col px-4 py-5 space-y-3 text-[16px] font-medium">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => handleClick(item)}
              className={`px-4 py-2 rounded-full text-center transition-all duration-300 ease-in-out cursor-pointer ${
                activeTab === item
                  ? 'bg-gradient-to-r from-blue-500 to-sky-500 text-white shadow-md'
                  : 'text-black hover:bg-gradient-to-r hover:from-blue-700 hover:to-sky-700 hover:text-white shadow-md'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

