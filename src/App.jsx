import { useState } from "react"
import About from "./components/About"
import Experinces from "./components/Experiences"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
import Contact from "./components/Contact"
import Certificates from "./components/Certificates"
import Footer from "./components/Footer"
import BackToTopButton from "./components/ButtonVariants"

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Navbar darkMode={darkMode} />
      <div className={`
        overflow-x-hidden
        antialiased
        selection:bg-orange-500
        selection:text-white
        ${darkMode ? 'text-neutral-100' : ''}`}
      >
        <div className="fixed top-0 -z-10 h-full w-full">
          {darkMode ?
            (
              <div className="
                absolute 
                top-0 
                z-[-2] 
                h-full 
                w-full 
                bg-neutral-950 
                bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
              </div>
            )
            :
            (
              <div className="
              absolute 
              inset-0 
              -z-10 
              h-full 
              w-full 
              bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
              bg-[size:14px_24px]">
                <div className="
                  absolute 
                  left-0 
                  right-0 
                  top-0 
                  -z-10 
                  m-auto 
                  h-[310px] 
                  w-[310px] 
                  rounded-full 
                  bg-fuchsia-400 
                  opacity-20 
                  blur-[100px]">
                </div>
              </div>
            )
          }
        </div>
        <div className="container mx-auto px-8">
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Technologies darkMode={darkMode} />
          <Experinces darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Certificates darkMode={darkMode} />
          <Contact darkMode={darkMode} />
          <Footer />
          <BackToTopButton />
        </div>
      </div>
    </>
  );
}

export default App;