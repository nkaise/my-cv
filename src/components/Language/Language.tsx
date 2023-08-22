import "./style.css";

interface LanguageProps {}

const Language: React.FC<LanguageProps> = () => {
    return (
        <div className="container">
            <h3 className="language-title subtitle">Foreign language</h3>
            <ul>
                <li>
                    <a
                        href="https://www.efset.org/cert/jchwLv"
                        target="_blank"
                        className="theme"
                    >
                        English C1 (EF SET test)
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Language;
