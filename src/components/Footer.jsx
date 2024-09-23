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

const Footer = () => {
  return (
    <section id="footer" className='pt-12 pb-12'>
      <div className="flex items-center justify-center gap-4 p-12 text-3xl">
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
      <div className="text-center text-sm text-neutral-400">
        <p>
          &copy; {new Date().getFullYear()} Made with&nbsp;
          <a
            href="https://material-tailwind.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline">
            Material Tailwind
          </a>
          &nbsp;by newpk.
        </p>
        <p className='pt-1'>All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
