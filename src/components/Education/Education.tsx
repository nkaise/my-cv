import "./style.css";

interface EducationProps {}

const Education: React.FC<EducationProps> = () => {
    return (
        <div className="container">
            <h3 className="education-title subtitle">Education</h3>
            <div className="education-block">
                <div className="education-uni">
                    <h4 className="education-title theme">
                        <b>University:</b>
                    </h4>
                    <a
                        href="https://www.sut.ru/eng"
                        target="_blank"
                        className="education-name theme"
                    >
                        The Bonch-Bruevich Saint Petersburg State University of
                        Telecommunications
                    </a>
                    <p className="education-years theme">2013-2017</p>
                    <p className="education-profession theme">
                        Computer science and engineering
                    </p>
                </div>
                <div className="education-courses">
                    <h4 className="education-title theme">
                        <b>Courses:</b>
                    </h4>
                    <ul>
                        <li>
                            <a
                                href="https://stepik.org/certificate/c6daa8a11960142c5cf00c792163af38bff8f1cc.pdf"
                                className="education-name theme"
                                target="_blank"
                            >
                                Programming in Python
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://htmlacademy.ru/"
                                className="education-name theme"
                                target="_blank"
                            >
                                HTML Academy
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://app.rs.school/certificate/39lasc16"
                                className="education-name theme"
                                target="_blank"
                            >
                                RS School
                            </a>
                        </li>
                        <li>
                            <a
                                href="./certificates/certificate-preply.pdf"
                                className="education-name theme"
                                target="_blank"
                            >
                                Preply
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Education;
