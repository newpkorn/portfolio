import { MdNightsStay, MdWbSunny } from "react-icons/md";

const Header = ({ darkMode, setDarkMode }) => {
    return (
        <header className={`flex justify-end items-center p-5 `}>
            <div
                className="fixed top-6 cursor-pointer text-2xl"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ?
                    <MdWbSunny className="text-neutral-50" />
                    :
                    <MdNightsStay className="text-neutral-950" />
                }
            </div>
        </header>
    )
}

export default Header;


