import About from "./components/AboutMe/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Language from "./components/Language/Language";
import Navigation from "./components/Navigation/Navigation";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

interface AppProps {}

const App: React.FC<AppProps> = () => {
    return (
        <>
            <Navigation />
            <Header />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Language />
            <Footer />
        </>
    );
};

export default App;
