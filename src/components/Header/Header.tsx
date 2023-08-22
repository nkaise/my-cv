import email from "../../assets/images/header/email.png";
import geo from "../../assets/images/header/geo.png";
import github from "../../assets/images/header/github.png";
import linkedin from "../../assets/images/header/linkedin.png";
import telegram from "../../assets/images/header/telegram.png";
import avatar from "../../assets/images/header/avatar.jpg";
import "../Navigation/style.css";

interface Props {}

const Header: React.FC<Props> = () => {
    return (
        <div className="container">
            <div className="header-row">
                <div className="header-img">
                    <img src={avatar} alt="Avatar" width="300" height="300" />
                </div>
                <div className="header-text">
                    <h1 className="header-text-title">Anastasia Ganiushkina</h1>
                    <h2 className="header-text-subtitle subtitle">
                        Junior Web-Developer
                    </h2>
                    <ul className="header-contacts">
                        <li>
                            <a
                                href="https://github.com/nkaise"
                                target="_blank"
                                className="theme"
                            >
                                <img
                                    src={github}
                                    alt="Github icon"
                                    width="25"
                                    height="25"
                                />
                                github.com/nkaise
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://nkaise.t.me"
                                target="_blank"
                                className="theme"
                            >
                                <img
                                    src={telegram}
                                    alt="Telegram icon"
                                    width="25"
                                    height="25"
                                />
                                @nkaise
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:kaise95@gmail.com"
                                className="theme"
                            >
                                <img
                                    src={email}
                                    alt="Email icon"
                                    width="25"
                                    height="25"
                                />
                                kaise95@gmail.com
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/anastasiia-ganiushkina/"
                                target="_blank"
                                className="theme"
                            >
                                <img
                                    src={linkedin}
                                    alt="Linkedin icon"
                                    width="25"
                                    height="25"
                                />
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://goo.gl/maps/R9knVaT5eJthhF7J9"
                                target="_blank"
                                className="theme"
                            >
                                <img
                                    src={geo}
                                    alt="Geo icon"
                                    width="25"
                                    height="25"
                                />
                                Tbilisi, Georgia
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
