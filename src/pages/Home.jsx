import { useState } from "react";
import Intro from "./Intro.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

function Home() {
    const [activeSection, setActiveSection] = useState(0);
    const [animate, setAnimate] = useState(false);

    const sections = [<Intro />, <About />, <Projects />, <Contact />];
    const sectionLabels = ["Intro", "About Me", "Projects", "Contact"];

    const handleButtonClick = (index) => {
        if (index === activeSection) return;
        setAnimate(false);
        setTimeout(() => {
            setActiveSection(index);
            setAnimate(true);
        }, 100);
    };

    const handleScroll = (event) => {
        const delta = event.deltaY;
        if (delta > 0 && activeSection < sections.length - 1) {
            setActiveSection((prev) => prev + 1);
        } else if (delta < 0 && activeSection > 0) {
            setActiveSection((prev) => prev - 1);
        }
    };

    return (
        <section
            className="flex items-center text-white min-h-screen"
            onWheel={handleScroll}
        >
            <div className="w-1/3 flex flex-col space-y-4">
                {sectionLabels.map((label, index) => (
                    <button
                        key={index}
                        onClick={() => handleButtonClick(index)}
                        className={`custom-button ${activeSection === index ? "active-button" : ""}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className={`main-content w-2/3 text-center ${animate ? "animate-section" : ""}`}>
                {sections[activeSection]}
            </div>
        </section>
    );
}

export default Home;