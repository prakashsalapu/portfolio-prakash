import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import personImage from "./Prakash-new-1.jpg";

// Count-up logic for stats
const stat = ({ value, suffix, duration }: { value: number; suffix?: string; duration: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = value / (duration * 150);
    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#dbeafe] via-[#bfdbfe] to-[#e0e7ff] text-transparent bg-clip-text"
    >
      {count.toLocaleString()}
      {suffix}
    </motion.div>
  );
};

const AboutStats = () => {
  return (
    <section
      id="about"
      className="py-10 px-5 sm:px-10 text-black"
      style={{
        background: 'radial-gradient(circle at center, #eaf6ff 0%, #c1eaff 70%)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-1/2 w-full space-y-6 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-[#082c58] mb-4 sm:mb-6 leading-tight">
            Hey, I’m
            <br />
            <span className="text-4xl sm:text-5xl bg-gradient-to-r from-[#4086f7] to-[#1316c2] text-transparent bg-clip-text">
              Bhanu Prakash Salapu
            </span>
          </h1>


          <p className="mb-6 text-gray-800 text-base sm:text-lg leading-relaxed">
            A digital creator and <strong>Thumbnail Designer</strong> helping
            YouTubers boost <strong>Click's</strong> with eye-catching visuals.
            Turning ideas into scroll-stopping designs that grab attention and{" "}
            <strong>Grow</strong> channels.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 mb-4 w-full">
            <a
              href="#contact"
              className="w-full sm:w-auto text-center px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-sky-400 to-blue-600 text-white hover:from-sky-400 hover:to-blue-600 shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              Let’s Collaborate →
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto text-center px-5 py-2 rounded-full font-semibold text-[#0d2680] bg-white hover:bg-black hover:text-white transition duration-300 ease-in-out shadow-sm hover:shadow-lg transform hover:scale-105"
            >
              View Services
            </a>
          </div>
        </motion.div>

        {/* Right: Image + Badge */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-1/2 w-full flex justify-center items-center mt-6 md:mt-4 relative"
        >
          {/* Profile Image */}
          <div className="w-[220px] h-[280px] sm:w-[280px] sm:h-[360px] md:w-[360px] md:h-[420px] relative rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 ease-in-out">
            <img
              src={personImage}
              alt="Prakash Profile"
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* 🔧 Experience Circle Position - Mobile View Top-Left */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute top-1 right-1 sm:top-[-24px] sm:right-9 sm:left-auto w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] bg-white border-[5px] sm:border-[6px] border-[#1543e8] rounded-full shadow-lg flex items-center justify-center z-10"
          >
            <div className="text-center leading-tight">
              <p className="text-[8px] sm:text-[10px] text-blue-600">Year</p>
              <p className="text-sm sm:text-lg font-bold text-blue-600">1.5+</p>
              <p className="text-[8px] sm:text-[10px] text-blue-600">Experience</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Box */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mt-10 sm:-mt-4 px-2 sm:px-4 z-10 transition-all duration-700 ease-in-out"
      >
        <div className="relative mx-auto w-full max-w-6xl rounded-[2rem] overflow-hidden bg-gradient-to-r from-[#d6f3ff] via-[#aee8ff] to-[#8cd3ff] p-[3px] shadow-xl ring-4 ring-[#3bb4ff]">
          <div className="bg-gradient-to-br from-[#1e1b4b] via-[#1e3a8a] to-[#0f172a] rounded-[2rem] py-10 px-6 sm:px-12">
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white/100">
              {[
                { value: 100, suffix: 'K+', label: 'Thumbnail Clicks' },
                { value: 100, suffix: '+', label: 'Designs Created' },
                { value: 5, suffix: '+', label: 'Creator Clients' }
              ].map((statItem, idx) => (
                <div key={idx} className="transition-all duration-300 hover:scale-105 text-white">
                  <div>{stat({ value: statItem.value, suffix: statItem.suffix, duration: 2 })}</div>
                  <p className="text-sm sm:text-base mt-2 text-white/80">{statItem.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutStats;
