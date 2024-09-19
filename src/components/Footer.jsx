import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank">
                <FaLinkedin />
            </a>
            <a href={import.meta.env.VITE_GITHUB_URL} target="_blank">
                <FaGithub />
            </a>
            <a href={import.meta.env.VITE_INSTAGRAM_URL} target="_blank">
                <FaInstagram />
            </a>
        </div>
    )
}

export default Footer