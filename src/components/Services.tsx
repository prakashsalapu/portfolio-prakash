'use client';
import { Film, Camera, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const services = [
  {
    icon: Film,
    title: 'YouTube Thumbnail Design',
    description:
      'Eye-catching thumbnails that boost click-through rates and grow your channel',
  },
  {
    icon: Camera,
    title: 'Instagram Reels Cover',
    description:
      'Stunning cover designs that make your reels stand out in the feed',
  },
  {
    icon: Palette,
    title: 'Branding Thumbnails',
    description:
      'Consistent branded thumbnail designs for business and personal brands',
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-[#060442] via-[#049dfb] to-[#060442] text-white scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Explore{' '}
            <span className="bg-gradient-to-r from-[#4ca4fc] via-[#38bdf8] to-[#a5f3fc] text-transparent bg-clip-text">
              Services
            </span>
          </h2>
          <p className="text-sm sm:text-md md:text-lg text-white/70 mt-3 max-w-2xl mx-auto">
            Boost your channel with crafted thumbnail strategies and eye-catching visuals.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {services.map((service, idx) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={idx}
                className={clsx(
                  "relative text-center rounded-2xl p-6 w-full max-w-xs transition-all duration-300 transform bg-white text-[#060442] shadow-md",
                  "hover:-translate-y-3 hover:shadow-2xl hover:ring-2 hover:ring-sky-300 hover:ring-offset-2 group"
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Glow Background on Hover */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-blue-300/10 to-sky-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-center items-center mb-5">
                    <div className="p-4 bg-gradient-to-tr from-blue-500 to-teal-400 rounded-full shadow-md">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-3 leading-tight transition-colors duration-300 group-hover:text-sky-600">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
