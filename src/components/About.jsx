import aboutImg from '../assets/about.png';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = ({ darkMode }) => {
    return (
        <section id='about'>
            <div
                className={`
                    ps-4
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
                        className="w-full lg:w-1/2 lg:p-8">
                        <div className="flex items-center justify-center">
                            <img src={aboutImg} alt="about" />
                        </div>
                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/2 lg:p-8">
                        <div className="flex justify-center lg:justify-start">
                            <p className='my-2 max-w-xl py-6 lg:text-justify' dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }}></p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About;