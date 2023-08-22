import "./style.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-block">
                    <a
                        href="https://github.com/nkaise"
                        target="_blank"
                        className="footer-github theme"
                    >
                        Github
                    </a>
                    <h4 className="footer-year theme">2023</h4>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
