interface AboutProps {}

const About: React.FC<AboutProps> = () => {
    return (
        <div className="container">
            <h2 className="about-me-title subtitle">About me</h2>
            <p className="about-me-text theme">
                Hi, I am a junior frontend developer. I am passionate about
                developing modern, user-friendly websites that not only look
                great but also function seamlessly. My journey in the tech
                industry began as a technical support specialist, where I honed
                my problem-solving skills and developed a strong understanding
                of customer needs. Building upon that foundation, I then
                transitioned into a role as a system administrator. As a system
                administrator, I gained valuable insights into managing various
                technical aspects, such as Linux, Apache, Nginx, MySQL, SSL,
                DNS, and CMS. Throughout my career, I have always been drawn to
                frontend development, and I have completed two courses in RS
                School and HTML Academy to further enhance my skills. With a
                solid background in technical support and system administration,
                combined with my frontend development expertise, I bring a
                unique perspective to my work. I thrive in collaborative
                environments and am motivated to continuously learn and adapt to
                new technologies and industry trends.
            </p>
        </div>
    );
};

export default About;
