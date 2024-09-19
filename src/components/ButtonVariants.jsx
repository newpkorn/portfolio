import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const buttonVariants = {
    visible: {
        opacity: 1,
        transition: { duration: 0.3 }
    },
    hidden: {
        opacity: 0,
        transition: { duration: 0.3 }
    },
    hover: {
        scale: 1.1,
        rotate: 15,
        transition: { type: 'spring', stiffness: 300, damping: 10 }
    }
};

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.div
            className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full cursor-pointer"
            variants={buttonVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            whileHover="hover"
            onClick={scrollToTop}
        >
            <FaArrowUp />
        </motion.div>
    );
};

export default BackToTopButton;