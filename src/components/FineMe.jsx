import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 15,
    transition: { type: 'spring', stiffness: 300, damping: 10 }
  },
  initial: {
    scale: 1,
    rotate: 0
  }
};

const FineMe = () => {
  return (
    <section id="fine-me" >
      <div className='p-24'>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl">
          Find
          <span className="text-neutral-500"> Me</span>
        </motion.h2>

        <div className="flex justify-center pt-5 gap-4 text-2xl">
          <motion.a
            href={import.meta.env.VITE_LINKEDIN_URL}
            target="_blank"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href={import.meta.env.VITE_GITHUB_URL}
            target="_blank"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href={import.meta.env.VITE_INSTAGRAM_URL}
            target="_blank"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
          >
            <FaInstagram />
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default FineMe