import "./style.css";

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
    return (
        <div className="container">
            <h3 className="experience-title subtitle">Work experience</h3>
            <div className="experience-block">
                <div className="experience-first">
                    <h4 className="experience-company">
                        <b>
                            <a
                                href="https://timeweb.com/ru/"
                                target="_blank"
                                className="theme"
                            >
                                Timeweb
                            </a>
                        </b>
                    </h4>
                    <p className="experience-years theme">2017 - 2021</p>
                    <div className="experience-positions theme">
                        Support specialist
                    </div>
                    <p className="experience-tasks theme">
                        My first job was in a hosting provider. Firstly, I
                        worked as an information support specialist. I helped
                        clients with basic questions about domains, sites,
                        payments, etc. After that I was promoted to technical
                        support where I worked more with Linux, web-servers,
                        redirections.{" "}
                    </p>
                </div>
                <div className="experience-second">
                    <h4 className="experience-company">
                        <b>
                            <a
                                href="https://www.webit.ru/"
                                target="_blank"
                                className="theme"
                            >
                                Webit
                            </a>
                        </b>
                    </h4>
                    <p className="experience-years theme">2021 - 2022</p>
                    <div className="experience-positions theme">
                        System administrator
                    </div>
                    <p className="experience-tasks theme">
                        My second job was in the web studio. I worked with Linux
                        - OS Debian, CentOS, Ubuntu. I solved variety of tasks.
                        I worked with systemd, GIT, Apache, Nginx, PHP-FPM,
                        MySQL, CGI, DNS, CMS, Frameworks.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Experience;
