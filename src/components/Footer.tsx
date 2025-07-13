import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { StarIcon } from 'lucide-react';

const Footer = () => (
  <footer className="relative bg-gradient-to-br from-[#132c4b] to-[#18365d] text-white min-h-[7vh] sm:min-h-[10vh] flex items-end pt-3 sm:pt-6 pb-2 sm:pb-5 overflow-hidden">
  
  {/* Animated Star */}
    <div className="absolute -top-4 -left-4 sm:-top-10 sm:-left-10 opacity-10 animate-[spin_20s_linear_infinite]">
  <StarIcon className="text-blue-300 w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
</div>

  {/* Floating Glows */}
  <div className="absolute bottom-6 right-6 w-16 h-16 bg-blue-500/20 blur-2xl rounded-full animate-pulse" />
  <div className="absolute top-0 right-1/4 w-14 h-14 bg-pink-500/10 blur-2xl rounded-full animate-ping" />

  <div className="w-full max-w-7xl mx-auto px-4 z-10 relative animate-fade-in">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-center">
      
      {/* Footer Text */}
      <p className="text-xs sm:text-sm text-slate-200 max-w-xl text-center md:text-left md:ml-8">
        &copy; 2025 Prakash Salapu | Designed with passion. All rights reserved
      </p>

      {/* Social Icons */}
      <div className="flex gap-3 sm:gap-5">
        <a
          href="mailto: bhanuprakash8305@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Prakash%2C%0AI%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20your%20services."
          className="group bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-3"
          aria-label="Email"
        >
          <FaEnvelope className="text-white group-hover:text-blue-400 text-[14px] sm:text-[20px]" />
        </a>
        <a
          href="https://www.linkedin.com/in/iamprakashfx/"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:-rotate-3"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-white group-hover:text-blue-300 text-[14px] sm:text-[20px]" />
        </a>
        <a
          href="https://www.instagram.com/iamprakashfx?igsh=MW5qeG4zYXVudTVpYw=="
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-3"
          aria-label="Instagram"
        >
          <FaInstagram className="text-white group-hover:text-pink-400 text-[14px] sm:text-[20px]" />
        </a>
      </div>
    </div>
  </div>
</footer>

);

export default Footer;


