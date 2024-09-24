import { useState, useEffect } from 'react';
import myImg from '../assets/myIMG.png';
import avatarImg from '../assets/about.png';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = ({ darkMode }) => {
  const [currentImage, setCurrentImage] = useState(avatarImg);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
      setTimeout(() => {
        setCurrentImage(prevImage => (prevImage === myImg ? avatarImg : myImg));
      }, 500); // swap back the image from half-round. (500ms)
    }, 5000); // change image every 5 seconds

    return () => clearInterval(interval); // clean interval when component unmounted
  }, []);

  return (
    <section id='about'>
      <div
        className={`
                    border-b
                    ${darkMode ? 'border-neutral-900' : 'border-neutral-300'}
        `}>
        <h2 className="my-20 text-center text-4xl">
          About
          <span className="text-neutral-500"> Me</span>
        </h2>
        <div className="flex flex-wrap">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex justify-center w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center my-2 max-w-xl py-6">
              <motion.img
                className='rounded-xl w-auto h-96 object-cover'
                src={currentImage}
                alt="about"
                animate={{ rotateY: isFlipped ? 0 : 180 }} // turn around by isFlipped
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }} // time to turn around
              />
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center lg:justify-start">
              <p className={`
                  my-2 max-w-xl py-6 lg:text-justify
                  ${darkMode ? '' : 'text-neutral-500'}
                `}
                dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }}>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
