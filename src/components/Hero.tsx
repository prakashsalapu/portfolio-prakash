'use client';

import { motion } from 'framer-motion';
import img from './heroimg.png';

const words = (text: string): string[] => text.split(' ');

const wordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-screen bg-[#041c3a] flex items-center justify-center px-4 sm:px-8 overflow-hidden">
      {/* Glow BG */}
      <div className="absolute w-[1000px] h-[1000px] bg-[#178ecf]/20 blur-[120px] rounded-full top-[-25%] left-[-20%] z-0" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-7xl w-full gap-10 sm:gap-24 mt-2 sm:mt-20">
        {/* Image Section */}
        <div className="relative flex items-center justify-center mt-1 sm:mt-0 mb-2 sm:mb-0">
         <div className="absolute inset-0 w-[300px] h-[300px] sm:w-[460px] sm:h-[460px] md:w-[650px] md:h-[650px] rounded-full bg-gradient-to-br from-[#14ffe9] via-[#00c3ff] to-[#2a9df4] opacity-40 blur-[100px] z-0" />
          <div className="absolute bottom-[-18px] w-[260px] h-[60px] sm:w-[380px] sm:h-[80px] md:w-[580px] md:h-[200px] rounded-full bg-black/70 blur-2xl opacity-30 z-0" />

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] z-10"

          >
            <img
              src={img}
              alt="Hero Avatar"
              className="w-full h-full object-contain rounded-full"
            />
          </motion.div>
        </div>

        {/* Text Section */}
       <div className="text-center flex flex-col items-center text-white max-w-3xl z-10 mt-2 sm:mt-16">
          {/* Headline 1 */}
          <div className="flex flex-wrap justify-center text-2xl sm:text-4xl font-extrabold mb-1 sm:mb-4 leading-snug whitespace-normal px-2">
            {words('Thumbnail Strategy').map((word, i) => (
              <motion.span
                key={i}
                className="mr-2"
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Headline 2 */}
          <div className="flex flex-wrap justify-center text-xl sm:text-4xl font-extrabold mb-2 sm:mb-4 leading-tight whitespace-nowrap">
            {words('that get').map((word, i) => (
              <motion.span
                key={i}
                className="mr-2"
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                custom={i + 3}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Headline 3 */}
          <div className="text-2xl sm:text-5xl font-bold leading-tight mt-2 sm:mt-4 whitespace-nowrap">
            <motion.span
              className="bg-gradient-to-r from-[#00e0ff] via-[#14ffe9] to-[#2a9df4] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradientMove"
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              custom={6}
            >
              Click - Views - Growth
            </motion.span>
          </div>

          {/* Scroll Down */}
          <motion.div
            className="mt-2 sm:mt-10 mb-4 sm:mb-0 flex items-center justify-center gap-3 animate-bounce"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
           <p className="text-white text-sm sm:text-base">Scroll Down</p>
           <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center text-white">
            ↓
          </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

