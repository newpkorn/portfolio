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
        <section id="footer">
            <div className="m-8 p-12 flex items-center justify-center gap-4 text-3xl">
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
        </section>
    );
}

export default Footer;
