import "./style.css";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
    return (
        <div className="container">
            <nav className="nav" id="nav">
                <ul className="nav-list">
                    <li>
                        <a href="#about-me" className="nav-item theme">
                            About me
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="theme">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#my-project" className="theme">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#experience" className="theme">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#education" className="theme">
                            Education
                        </a>
                    </li>
                    <li>
                        <a href="#language" className="theme">
                            Languages
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
