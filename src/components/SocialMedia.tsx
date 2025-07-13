import { motion } from 'framer-motion';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const socialCards = [
  {
    name: 'Instagram',
    icon: Instagram,
    bg: 'bg-gradient-to-br from-pink-500 via-red-400 to-yellow-300',
    link: 'https://www.instagram.com/iamprakashfx?igsh=MW5qeG4zYXVudTVpYw==',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    bg: 'bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400',
    link: 'https://www.linkedin.com/in/iamprakashfx/',
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    bg: 'bg-gradient-to-br from-green-500 via-[#24c969] to-green-300',
    link: 'https://wa.me/919000157795?text=Hi%20Prakash!%20I%27m%20interested%20in%20your%20design%20services',
  },
];

const SocialMini = () => {
  return (
    <section className="py-8 sm:py-12 bg-gradient-to-br from-[#eaf6ff] via-[#d8f1ff] to-[#eaf6ff]">
      <div className="max-w-5xl mx-auto px-3 sm:px-6">
        <h2 className="text-center text-lg sm:text-3xl font-bold text-gray-800 mb-6">
          Let’s{' '}
          <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 px-1">
          {socialCards.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`
                ${platform.bg} text-white 
                w-[80px] h-[65px] sm:w-[120px] sm:h-[100px] 
                rounded-xl p-2 sm:p-4 
                flex flex-col justify-center items-center text-center
                shadow-md hover:shadow-xl transition-shadow
              `}
            >
              <div className="flex justify-center items-center">
                <platform.icon className="w-5 h-5 sm:w-8 sm:h-8" />
              </div>
              <div className="text-xs sm:text-sm font-semibold mt-1">
                {platform.name}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMini;


