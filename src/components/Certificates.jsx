import PropTypes from "prop-types";
import { useEffect, useRef, useState } from 'react';
import { CERTIFICATES } from "../constants";
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Certificates = ({ darkMode }) => {
  const carouselRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null); // State to store the selected certificate for modal

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrameId;
    let scrollSpeed = 1;

    const scroll = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0;
        // stopScroll()
      } else {
        carousel.scrollLeft += scrollSpeed;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    const startScroll = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    const stopScroll = () => {
      cancelAnimationFrame(animationFrameId);
    };

    startScroll();

    carousel.addEventListener('mouseenter', stopScroll);
    carousel.addEventListener('mouseleave', startScroll);

    return () => {
      stopScroll();
      carousel.removeEventListener('mouseenter', stopScroll);
      carousel.removeEventListener('mouseleave', startScroll);
    };
  }, []);

  // Function to open modal
  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedCert(null);
  };

  // Function to get the index of the selected certificate
  const getCertIndex = (cert) => {
    return CERTIFICATES.findIndex(c => c === cert);
  };

  // Function to show the previous certificate
  const showPrevCert = () => {
    if (selectedCert) {
      const currentIndex = getCertIndex(selectedCert);
      const prevIndex = (currentIndex - 1 + CERTIFICATES.length) % CERTIFICATES.length;
      setSelectedCert(CERTIFICATES[prevIndex]);
    }
  };

  // Function to show the next certificate
  const showNextCert = () => {
    if (selectedCert) {
      const currentIndex = getCertIndex(selectedCert);
      const nextIndex = (currentIndex + 1) % CERTIFICATES.length;
      setSelectedCert(CERTIFICATES[nextIndex]);
    }
  };

  return (
    <section id='certificates' className="pt-[var(--navbar-height)]">
      <div
        className={`
                    w-full
                    overflow-hidden 
                    py-12
                    pb-24
                    mb-20
                    border-b
                    ${darkMode ? 'border-neutral-900' : 'border-neutral-300 border-t border-neutral-300'}
                `}>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl font-bold"
        >
          Certifications
        </motion.h2>

        <div
          ref={carouselRef}
          className="flex overflow-x-hidden space-x-4 p-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          {[...CERTIFICATES, ...CERTIFICATES].map((cert, index) => (
            <img
              key={index}
              src={cert.image}
              alt={cert.name}
              className="h-40 mb-4 cursor-pointer"
              onClick={() => openModal(cert)}
            />
          ))}
        </div>

        <div className="flex justify-end">
          <a href={import.meta.env.VITE_MY_LEARNING_PATH} target='_blank' className=' hover:text-orange-400 hover:underline text-neutral-400 text-sm'>
            See more
          </a>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="
               fixed 
               inset-0 
               z-50 
               flex 
               items-center 
               justify-center 
               bg-black bg-opacity-50"
              onClick={closeModal}
            >
              <div
                className={`
                    p-6 rounded-lg
                    ${darkMode ?
                    'bg-neutral-950 bg-opacity-85 text-white'
                    :
                    'bg-neutral-100 bg-opacity-85 text-black'}
              `}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold mb-4">{selectedCert.name}</h3>
                <p>Author: {selectedCert.author}</p>
                <p>Year: {selectedCert.year}</p>
                <p>Tag: {selectedCert.tag}</p>
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="mt-4 w-auto h-auto md:h-96 lg:h-96"
                />
                {/* Navigation buttons in modal */}
                <div className="flex justify-between mt-4">
                  <button
                    onClick={showPrevCert}
                    className="p-2 bg-gray-800 text-white rounded-full"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={showNextCert}
                    className="p-2 bg-gray-800 text-white rounded-full"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

Certificates.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Certificates;
