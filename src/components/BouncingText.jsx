import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const BouncingText = ({ text }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        bounce: 0.5,
      }
    },
    hidden: {
      opacity: 0,
      y: -100
    }
  };

  const letters = text.split("");

  return (
    <motion.h2
      variants={container}
      initial="hidden"
      whileInView="visible"
      className="text-center text-3xl"
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          className={`inline-block ${char === " " ? 'mx-1' : (index < text.length - 3 ? '' : 'text-neutral-500')}`} // Separate text color between Find and Me
        >
          {char === "" ? "\u00A0" : char} {/* define space */}
        </motion.span>
      ))}
    </motion.h2>
  );
};

BouncingText.propTypes = {
  text: PropTypes.string.isRequired
};

export default BouncingText;