import { MdNightsStay, MdWbSunny } from "react-icons/md";

const Header = ({ darkMode, setDarkMode }) => {
    return (
        <header className="fixed top-0 w-full flex justify-end items-center p-4 lg:py-16 lg:p-6 bg-transparent backdrop-blur-md z-50">
            <div
                className="cursor-pointer text-2xl"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? <MdWbSunny className="text-neutral-50" /> : <MdNightsStay className="text-neutral-950" />}
            </div>
        </header>
    );
};

export default Header;
