import { MdNightsStay, MdWbSunny } from "react-icons/md";

const Header = ({ darkMode, setDarkMode }) => {
    return (
        <header className="fixed top-0 w-full h-20 pt-2 pr-2 flex justify-end items-start bg-transparent backdrop-blur-md z-50 md:h-28 lg:h-28 lg:p-4">
            <div
                className="cursor-pointer text-2xl "
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? <MdWbSunny className="text-neutral-50" /> : <MdNightsStay className="text-neutral-950" />}
            </div>
        </header>
    );
};

export default Header;
