import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import HomeLogoDark from "../assets/HomeLogoDark.png";
import HomeLogoLight from "../assets/HomeLogoLight.png";

const Navbar = ({ darkMode }) => {
    const [isOpenHamberger, setIsOpenHamberger] = useState(false);

    const navBarMenu = ["home", "about", "technologies", "experiences", "projects", "certificates", "contact"];

    const toggleMenu = () => {
        setIsOpenHamberger(!isOpenHamberger);
    };

    useEffect(() => {
        if (isOpenHamberger) {
            const timer = setTimeout(() => {
                setIsOpenHamberger(false);
            }, 10000);

            return () => clearTimeout(timer);

        }
    }, [isOpenHamberger]);

    return (
        <nav className="w-full flex md:flex lg:flex justify-between mt-14 mb-14">
            {/* Logo */}
            <div className="flex flex-none w-50 items-start">
                <img
                    src={darkMode ? HomeLogoDark : HomeLogoLight}
                    className="w-[100px]"
                    alt="logo"
                />
            </div>

            {/* Hamburger menu (mobile) */}
            <div className="relative flex flex-col">
                <motion.div
                    className="flex flex-col items-end space-y-1.5 cursor-pointer md:hidden lg:hidden"
                    onClick={toggleMenu}
                    initial={false}
                    animate={isOpenHamberger ? 'open' : 'closed'}
                >
                    <motion.div
                        className={`w-[35px] h-[5px] ${darkMode ? 'bg-white' : 'bg-black'}`}
                        variants={{
                            open: { rotate: -45, translateY: 11 },
                            closed: { rotate: 0, translateY: 0 }
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        className={`w-[35px] h-[5px] ${darkMode ? 'bg-white' : 'bg-black'}`}
                        variants={{
                            open: { opacity: 0 },
                            closed: { opacity: 1 }
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        className={`w-[35px] h-[5px] ${darkMode ? 'bg-white' : 'bg-black'}`}
                        variants={{
                            open: { rotate: 45, translateY: -11 },
                            closed: { rotate: 0, translateY: 0 }
                        }}
                        transition={{ duration: 0.5 }}
                    />
                </motion.div>

                <motion.ul
                    className={`flex-col md:hidden items-center space-y-2`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={isOpenHamberger ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {navBarMenu.map((nav, index) => (
                        <li key={index} className='border-b border-#E0E0E0'>
                            <Link
                                to={nav}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={1000}
                                onClick={toggleMenu}
                            >
                                {nav.toUpperCase()}
                            </Link>
                        </li>
                    ))}
                </motion.ul>
            </div>

            {/* Full menu (desktop) */}
            <ul className="hidden md:flex justify-end items-center space-x-3 text-xs cursor-pointer">
                {navBarMenu.map((nav, index) => (
                    <li key={index}>
                        <Link
                            to={nav}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000}
                            className='hover:border-b-4 
                            border-yellow-400
                            hover:font-bold'
                        >
                            {nav.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>

    );
};

export default Navbar;