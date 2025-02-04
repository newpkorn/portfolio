import PropTypes from 'prop-types';
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
// import HomeLogoDark from '../assets/images/HomeLogoDark.png';
// import HomeLogoLight from '../assets/images/HomeLogoLight.png';

const Navbar = ({ darkMode }) => {
  const [isOpenHamberger, setIsOpenHamberger] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navBarMenu = useMemo(
    () => [
      'home',
      'about',
      'technologies',
      'experiences',
      'projects',
      'certificates',
      'contact',
    ],
    []
  );

  const toggleMenu = () => {
    setIsOpenHamberger(!isOpenHamberger);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (!isOpenHamberger && window.scrollY > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isOpenHamberger]);

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
      const sections = navBarMenu.map((menu) => document.getElementById(menu));
      const scrollPos =
        window.pageYOffset || document.documentElement.scrollTop;
      const offset = 100;

      sections.forEach((section) => {
        if (
          section &&
          section.offsetTop - offset <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navBarMenu]);

  return (
    <nav
      className={`
        sticky top-0 z-50 w-auto my-10
        flex justify-between
        transition-transform duration-300 ease-in-out
        bg-transparent backdrop-blur-md
        ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
        ${darkMode ? 'text-white' : ''}`}
    >
      <div
        className="
            container 
            flex 
            justify-between 
            p-5 
            mx-auto 
            md:p-8 
            lg:p-8"
      >
        {/* Logo */}

        <div
          className="
            flex 
            flex-none 
            items-start 
            cursor-pointer"
        >
          <Link
            to={navBarMenu[0]}
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            <img
              // src={darkMode ? HomeLogoDark : HomeLogoLight}
              className="-mt-6 w-[70px] md:w-[100px] lg:w-[100px]"
              src="/favicon.ico"
              alt="logo"
            />
          </Link>
        </div>

        {/* Hamburger menu (mobile) */}
        <div className="relative flex flex-col">
          <motion.div
            className="
              flex 
              flex-col 
              items-end 
              space-y-1.5 
              cursor-pointer 
              md:hidden 
              lg:hidden"
            onClick={toggleMenu}
            initial={false}
            animate={isOpenHamberger ? 'open' : 'closed'}
          >
            <motion.div
              className={`w-[35px] h-[5px] ${
                darkMode ? 'bg-white' : 'bg-black'
              }`}
              variants={{
                open: { rotate: -45, translateY: 11 },
                closed: { rotate: 0, translateY: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className={`
                w-[35px] 
                h-[5px] 
                ${darkMode ? 'bg-white' : 'bg-black'}
              `}
              variants={{
                open: { opacity: 0 },
                closed: { opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className={`
                w-[35px] 
                h-[5px] 
                ${darkMode ? 'bg-white' : 'bg-black'}
              `}
              variants={{
                open: { rotate: 45, translateY: -11 },
                closed: { rotate: 0, translateY: 0 },
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          <motion.ul
            className={`
              flex-col 
              md:hidden 
              items-center 
              space-y-2 
              bg-transparent 
              backdrop-blur-3xl
            `}
            initial={{ opacity: 0, height: 0 }}
            animate={
              isOpenHamberger
                ? { opacity: 1, height: 'auto' }
                : { opacity: 0, height: 0 }
            }
            transition={{ duration: 0.3 }}
          >
            {navBarMenu.map((menu, index) => (
              <li
                key={index}
                className={`
                  border-b 
                  border-#E0E0E0 
                  ${
                    activeSection === menu
                      ? 'font-bold border-b-4 border-orange-500'
                      : ''
                  }`}
              >
                <Link
                  to={menu}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={toggleMenu}
                >
                  {menu.toUpperCase()}
                </Link>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Full menu (desktop) */}
        <ul
          className="
            hidden 
            md:flex 
            justify-end 
            items-center 
            space-x-3 
            text-xs 
            cursor-pointer"
        >
          {navBarMenu.map((menu, index) => (
            <li key={index}>
              <Link
                to={menu}
                spy={true}
                smooth={true}
                offset={menu === 'contact' ? 200 : -100}
                duration={100}
                className={`
                  hover:border-b-4 
                  border-orange-500 
                  hover:font-bold 
                  ${
                    activeSection === menu ? 'border-b-2 border-orange-500' : ''
                  }`}
              >
                {menu.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Navbar;
