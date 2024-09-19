import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import HomeLogoDark from "../assets/HomeLogoDark.png";
import HomeLogoLight from "../assets/HomeLogoLight.png";

const Navbar = ({ darkMode }) => {
    const [isOpenHamberger, setIsOpenHamberger] = useState(false);
    const [activeSection, setActiveSection] = useState('');

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

    useEffect(() => {
        const handleScroll = () => {
            const sections = navBarMenu.map(menu => document.getElementById(menu));
            const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

            sections.forEach((section) => {
                if (section && section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
                    setActiveSection(section.getAttribute('id'));
                    // console.log('Active section:', section.getAttribute('id')); // Add this line for debugging
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navBarMenu]);


    return (
        <nav className="
            flex w-5/6 
            fixed 
            top-0
            z-50 
            justify-between 
            mt-10
            mb-14 
            bg-transparent"
        >
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
                        <li key={index} className={`border-b border-#E0E0E0 ${activeSection === nav ? 'font-bold border-b-4 border-orange-500' : ''}`}>
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
                            offset={nav === 'certificates' ? -200 : -100}  // Adjust offset for certificates
                            duration={1000}
                            className={`hover:border-b-4 border-orange-500 hover:font-bold ${activeSection === nav ? 'border-b-2 border-orange-500' : ''}`}
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
