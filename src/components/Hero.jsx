import PropTypes from 'prop-types'
import { HERO_CONTENT } from "../constants/hero";
import profilePic from "../assets/images/profile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  }
});

const Hero = ({ darkMode }) => {
  return (
    <section id="home">
      <div
        className={`
          pb-24
          lg:mb-35
          transition-all duration-300
          border-b
          ${darkMode ? 'border-neutral-900' : 'border-neutral-300'}
        `}>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="
                        flex flex-col 
                        items-center 
                        lg:items-start">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-4xl lg:font-thin tracking-tight lg:mt-16 lg:text-6xl sm:font-bold">
                NEW PAKORN
              </motion.h1>

              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="bg-gradient-to-r 
                                    from-pink-300 
                                    via-slate-500 
                                    to-purple-500 
                                    bg-clip-text 
                                    text-3xl 
                                    tracking-tight 
                                    text-transparent"
              >
                Fontend Deverloper
              </motion.span>

              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className={`
                  my- max-w-xl py-6 
                  font-light 
                  tracking-tighter 
                  lg:text-justify
                  ${darkMode ? '' : 'text-neutral-500'}
                `}>
                {HERO_CONTENT}
              </motion.p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                src={profilePic} alt="PK"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  darkMode: PropTypes.bool.isRequired,
}

export default Hero;
