import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does it take to create a thumbnail?',
      answer: 'Typically, I deliver custom thumbnails within 24-48 hours for single designs. For larger projects or strategy packages, turnaround time is 3-5 business days. Rush orders can be accommodated with additional fees.'
    },
    {
      question: 'What file formats do you provide?',
      answer: "You'll receive high-resolution files in multiple formats: PNG (with transparent background), JPG (optimized for uploads), and PSD (editable Photoshop file). All files are optimized for various platforms including YouTube, Instagram, and other social media."
    },
    {
      question: 'Do you offer revisions?',
      answer: "Absolutely! Each project includes up to 3 rounds of revisions to ensure you're completely satisfied. I want your thumbnails to be perfect, so we'll work together until they exceed your expectations."
    },
    {
      question: 'Can you match my brand style?',
      answer: "Yes! I specialize in creating thumbnails that align with your existing brand identity. Just share your brand guidelines, previous content, or style preferences, and I'll ensure consistency across all designs."
    },
    {
      question: 'What information do you need to get started?',
      answer: "I'll need your content topic, target audience, preferred style/mood, any specific text or elements to include, and examples of thumbnails you like. The more details you provide, the better I can tailor the design to your needs."
    },
    {
      question: 'Do you offer ongoing thumbnail services?',
      answer: 'Yes! I offer monthly packages for creators who need consistent thumbnail creation. This includes priority turnaround, bulk discounts, and ongoing strategy refinement based on your content performance.'
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about working with me
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left p-6 focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    initial={false}
                    animate={{ rotate: openQuestion === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openQuestion === index ? (
                      <ChevronUp className="w-6 h-6 text-blue-800" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </motion.div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openQuestion === index && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: 'auto' },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="px-6 pb-6"
                  >
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default FAQ;