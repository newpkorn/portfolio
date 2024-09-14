import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import HomeLogoDark from "../assets/HomeLogoDark.png";
import HomeLogoLight from "../assets/HomeLogoLight.png";

const Navbar = ({ darkMode }) => {

    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                {darkMode ?
                    <img src={HomeLogoDark} className="size-[100px]" alt="logo" />
                    :
                    <img src={HomeLogoLight} className="size-[100px]" alt="logo" />
                }
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/pknpk/" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/newpkorn" target="_blank">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/pkn.npk/" target="_blank">
                    <FaInstagram />
                </a>
            </div>
        </nav >
    )
}

export default Navbar