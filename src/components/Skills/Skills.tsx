import "./style.css";

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
    return (
        <div className="container">
            <h3 className="skills-title subtitle">Skills</h3>
            <div className="skills-block">
                <ul>
                    <li className="theme">HTML</li>
                    <li className="theme">CSS</li>
                    <li className="theme">JS</li>
                    <li className="theme">REACT</li>
                    <li className="theme">GIT&GITHUB</li>
                    <li className="theme">FIGMA</li>
                    <li className="theme">LINUX</li>
                    <li className="theme">DNS</li>
                    <li className="theme">APACHE / NGINX</li>
                    <li className="theme">SSL</li>
                    <li className="theme">CMS</li>
                    <li className="theme">BASH</li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;
