import PropTypes from 'prop-types';
import { FaJs } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';
import { SiExpress } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { DiMsqlServer } from 'react-icons/di';
import { SiRobotframework } from 'react-icons/si';
import { SiPostman } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { VscTerminalUbuntu } from 'react-icons/vsc';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Technologies = ({ darkMode }) => {
  const iconVariants = (duration) => ({
    inital: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  });

  return (
    <section id="technologies">
      <div
        className={`
          flex flex-col
          items-center
          my-20
          pb-24
          border-b
          ${darkMode ? 'border-neutral-900' : 'border-neutral-300'}
        `}
      >
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl font-medium"
        >
          TECHNOLOGIES
        </motion.h2>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="flex justify-center items-center rounded-xl border-4 border-neutral-800 p-6 mx-4 my-2"
          >
            <FaJs className="text-7xl text-yellow-400" />
          </motion.div>

          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="flex justify-center items-center rounded-xl border-4 border-neutral-800 p-6 mx-4 my-2"
          >
            <FaHtml5 className="text-7xl text-orange-600" />
          </motion.div>

          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="flex justify-center items-center rounded-xl border-4 border-neutral-800 p-6 mx-4 my-2"
          >
            <FaCss3Alt className="text-7xl text-blue-600" />
          </motion.div>

          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="flex justify-center items-center rounded-xl border-4 border-neutral-800 p-6 mx-4 my-2"
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>

          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="flex justify-center items-center rounded-xl border-4 border-neutral-800 p-6 mx-4 my-2"
          >
            <SiExpress className="text-7xl" />
          </motion.div>

          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="flex justify-center items-center rounded-xl border-4 border-neutral-800 p-6 mx-4 my-2"
          >
            <SiMongodb className="text-7xl text-green-500" />
          </motion.div>

          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="flex justify-center items-center rounded-xl border-4 border-neutral-800 p-6 mx-4 my-2"
          >
            <SiMysql className="text-7xl text-sky-600" />
          </motion.div>

          <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="flex justify-center items-center rounded-xl border-4 border-neutral-800 p-6 mx-4 my-2"
          >
            <DiMsqlServer className="text-7xl text-[#CC2927]" />
          </motion.div>

          <motion.div
            variants={iconVariants(1.0)}
            initial="initial"
            animate="animate"
            className="flex justify-center items-center rounded-xl border-4 border-neutral-800 p-6 mx-4 my-2"
          >
            <FaNodeJs className="text-7xl text-green-500" />
          </motion.div>

          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="flex justify-center items-center rounded-xl border-4 border-neutral-800 p-6 mx-4 my-2"
          >
            <SiRobotframework className="text-7xl text-[#00C800]" />
          </motion.div>

          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="flex justify-center items-center rounded-xl border-4 border-neutral-800 p-6 mx-4 my-2"
          >
            <SiPostman className="text-7xl text-[#FF6C37]" />
          </motion.div>

          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="flex justify-center items-center rounded-xl border-4 border-neutral-800 p-6 mx-4 my-2"
          >
            <VscVscode className="text-7xl text-[#007ACC]" />
          </motion.div>

          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="flex justify-center items-center rounded-xl border-4 border-neutral-800 p-6 mx-4 my-2"
          >
            <VscTerminalUbuntu className="text-7xl text-[#E95420]" />
          </motion.div>

          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="flex justify-center items-center rounded-xl border-4 border-neutral-800 p-6 mx-4 my-2"
          >
            <FaGithub className="text-7xl text-[${darkMode ? #FFFFFF : #181717}]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

Technologies.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Technologies;
