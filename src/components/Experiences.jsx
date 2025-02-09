import PropTypes from 'prop-types';
import { useState } from 'react';
import { EXPERIENCES } from '../constants/experiences';
import { FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Experinces = ({ darkMode }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="experiences">
      <div
        className={`
          pb-9
          border-b
          ${darkMode ? 'border-neutral-900' : 'border-neutral-300'}
        `}
      >
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl font-medium"
        >
          EXPERIENCES
        </motion.h2>

        <div>
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <p
                  className={`
                  mb-2 text-sm 
                  ${darkMode ? 'text-neutral-400' : ''}`}
                >
                  {exp.year}
                </p>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">
                  {exp.role} -{' '}
                  <span
                    className={`
                      text-sm
                      font-bold
                      ${darkMode ? 'text-purple-100' : 'text-neutral-500'}`}
                  >
                    {exp.company}
                  </span>
                </h6>

                <p
                  className={`
                    lg:text-justify
                    mb-4 
                    ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}
                  dangerouslySetInnerHTML={{ __html: exp.description }}
                ></p>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:flex">
                  {exp.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`
                        mr-2 mt-1 
                        rounded-md 
                        bg-neutral-900 
                        px-2 py-1 text-sm 
                        font-medium 
                        ${darkMode ? 'text-purple-800' : 'text-white'}`}
                      dangerouslySetInnerHTML={{ __html: skill }}
                    ></span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Button to Open Modal */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowModal(true)}
            className={`
              cursor-pointer 
              flex justify-between 
              px-3 
              py-2 
              rounded-full 
              bg-gray-800
              tracking-wider 
              shadow-xl 
              hover:scale-105 
              duration-500 
              hover:ring-1 
              font-mono 
              w-[150px]
              ${
                darkMode
                  ? 'bg-gray-900 text-white hover:bg-orange-500'
                  : 'bg-gray-800 text-white hover:bg-orange-500'
              } 
            `}
          >
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              ></path>
            </svg>
          </button>

          <a href="mailto:pakorn.soikham@gmail.com">
            <button
              className={`
              flex items-center justify-between
              px-4 py-2 
              rounded-full 
              tracking-wider 
              shadow-xl 
              hover:scale-105 
              duration-500 
              hover:ring-1 
              font-mono 
              w-[160px] 
              ml-4
              ${
                darkMode
                  ? 'bg-gray-900 text-white hover:bg-orange-500'
                  : 'bg-gray-800 text-white hover:bg-orange-500'
              }
            `}
            >
              Hire Me
              <FaEnvelope className="w-5 h-5 animate-bounce" />
            </button>
          </a>
        </div>

        {/* Full-Screen Modal */}
        {showModal && (
          <div
            className="
              fixed 
              inset-0 
              z-50 
              flex 
              items-center 
              justify-center 
              bg-black 
              bg-opacity-50"
          >
            <div
              className="
                w-full h-full 
                bg-white 
                relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="
                  absolute 
                  top-4 
                  right-4 
                  text-black 
                  text-2xl 
                  p-2 
                  z-50"
              >
                &times;
              </button>
              <iframe
                src="https://drive.google.com/file/d/1R9AZocf5q2BBJS6PVfSbRk-5iP2p0xAt/preview"
                className="w-full h-full"
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

Experinces.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Experinces;
