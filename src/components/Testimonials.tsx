'use client';
import { useEffect, useRef, useState } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

import brgh from './brgh-entertainments.jpg';
import bsdvp from './bsdvp.jpg';
import askAbhi from './ask-abhi-now.jpg';
import dokkulo from './dokkulo-reviews.jpg';
import nithin from './nithin-kolluru.jpg';
import karthifer from './karthifer.jpg';

const testimonials = [
  {
    name: 'DOKKULO REVIEWS',
    role: 'Movie Reviewer',
    content: 'His work makes my videos look 10x more professional. The colors, layout, and creativity are always on point  and he delivers faster than expected!',
    avatarImg: dokkulo,
    rating: 5,
  },
  {
    name: 'BSDVP TECH TELUGU',
    role: 'EdTech YouTuber',
    content: 'Prakash delivers clean, standout designs with impressive speed and quality. He quickly understands our vision and consistently exceeds expectations.',
    avatarImg: bsdvp,
    rating: 5,
  },
  {
    name: 'ASK ABHI NOW',
    role: 'EdTech YouTuber',
    content: 'Prakash’s thumbnails are eye-catching, high-quality, and boost engagement. He’s creative, professional, and truly understands YouTube audiences',
    avatarImg: askAbhi,
    rating: 5,
  },
  {
    name: 'RGH CREATIONS',
    role: 'Short Film Maker',
    content: 'Prakash’s thumbnails set the perfect tone for my short films. They look cinematic, professional, and instantly grab attention.',
    avatarImg: brgh,
    rating: 5,
  },
  {
    name: 'NITHIN KOLLURU',
    role: 'EdTech YouTuber',
    content: 'Prakash just gets it. I send a rough idea, and he turns it into a thumbnail that pops! Super easy to work with, and the quality is always 🔥',
    avatarImg: nithin,
    rating: 5,
  },
  {
    name: 'KARTHIFER',
    role: 'Reaction & Roasting YouTuber',
    content: 'Prakash nails the vibe every time! His bold and expressive thumbnails make my roast and reaction videos pop. Viewers click even before I speak!',
    avatarImg: karthifer,
    rating: 5,
  },
];

const extendedTestimonials = [...testimonials, ...testimonials];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cardCount, setCardCount] = useState(3);

  const updateCardCount = () => {
    setCardCount(window.innerWidth < 640 ? 1 : 3);
  };

  useEffect(() => {
    updateCardCount();
    window.addEventListener('resize', updateCardCount);
    return () => window.removeEventListener('resize', updateCardCount);
  }, []);

  const scrollByCards = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth / cardCount;
    const newScroll =
      direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({ left: newScroll, behavior: 'smooth' });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth / cardCount;
    const totalScroll = container.scrollWidth;
    const third = totalScroll / 3;

    container.scrollLeft = third;

    let interval: NodeJS.Timeout;

    const startAutoScroll = () => {
      interval = setInterval(() => {
        if (!isHovered && container) {
          const maxScrollLeft = container.scrollWidth - container.clientWidth;
          const isAtEnd = container.scrollLeft + scrollAmount >= maxScrollLeft;

          if (isAtEnd) {
            container.scrollLeft = third;
          } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }
        }
      }, 3000);
    };

    startAutoScroll();

    return () => clearInterval(interval);
  }, [isHovered, cardCount]);

  return (
    <section
      className="py-20 px-4"
      style={{
        background: 'radial-gradient(circle at center, #eaf6ff 0%, #c1eaff 70%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-[#0d0a38]">
            What Creators{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#0d0d0f] max-w-xl mx-auto">
            Real feedback from creators who trusted me with their storytelling.
          </p>
        </div>

        {/* Arrows */}
        <div className="relative">
          <button
            className="flex absolute top-1/2 left-0 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-blue-200 transition"
            onClick={() => scrollByCards('left')}
          >
            <ArrowLeft size={20} />
          </button>
          <button
            className="flex absolute top-1/2 right-0 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-blue-200 transition"
            onClick={() => scrollByCards('right')}
          >
            <ArrowRight size={20} />
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex overflow-x-auto no-scrollbar scroll-smooth gap-6 snap-x snap-mandatory px-2 sm:px-6 touch-pan-x"
          >
            {extendedTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[95%] sm:w-[33.33%] snap-center px-2 sm:px-0"
              >
                <div className="bg-white rounded-2xl h-full p-5 group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 flex flex-col justify-between min-h-[300px]">
                  {/* Quote + Stars */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
                      <Quote className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-yellow-400 flex space-x-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 text-sm mb-4 italic">“{t.content}”</p>

                  {/* Avatar */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 p-[2px] rounded-full overflow-hidden mr-4 flex-shrink-0 border-none transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-300/50">
                      <img
                        src={t.avatarImg}
                        alt={t.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.role}</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full w-0 group-hover:w-full transition-all duration-1000 delay-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;