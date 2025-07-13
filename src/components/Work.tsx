'use client';
import { motion } from 'framer-motion';


import work1 from './pic01.webp';
import work2 from './pic02.webp';
import work3 from './pic03.webp';
import work4 from './pic04.webp';
import work5 from './pic05.webp';
import work6 from './pic06.webp';
import work7 from './pic07.webp';
import work8 from './pic08.webp';
import work9 from './pic09.webp';
import work10 from './pic10.webp';
import work11 from './pic11.webp';
import work12 from './pic12.webp';

const works = [
  { title: ' Review/Reaction Thumbnail ', image: work1 },
  { title: ' Documentary Thumbnail', image: work2 },
  { title: 'Travel/Lifestyle Thumbnail', image: work3},
  { title: 'Finance/Trading Thumbnail', image: work4},
  { title: 'Movie Thumbnail', image: work5 },
  { title: 'Podcast Thumbnail', image: work6},
  { title: 'Documentary Thumbnail', image: work7 },
  { title: 'Documentary Thumbnail ', image: work8 },
  { title: ' Educational Thumbnail', image: work9 },
  { title: 'Documentary Thumbnail', image: work10 },
  { title: 'Documentary Thumbnail', image: work11},
  { title: 'Review/Reaction Thumbnail', image: work12},
];

const Work = () => {
  return (
    <section
      id="work"
      className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-[#060442] via-[#049dfb] to-[#060442] text-white scroll-mt-28"
    >
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white pb-4">
          My{' '}
          <span className="bg-gradient-to-r from-[#02caf2] via-[#38bdf8] to-[#a5f3fc] text-transparent bg-clip-text">
            <strong>Work</strong>
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {works.map((item, idx) => (
          <motion.a
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{
              scale: 1.03,
            }}
            className="group bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 w-full max-w-sm mx-auto cursor-pointer hover:shadow-2xl hover:ring-2 hover:ring-cyan-400"
          >
            {/* Image */}
            <div className="w-full aspect-video overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Title and YouTube */}
            <div className="p-4 flex justify-between items-center bg-white">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                {item.title}
              </h3>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Work;
 