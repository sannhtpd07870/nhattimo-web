import "./styles.css";

const CustomLink = ({ href, children }) => {
    return (
        <a href={href} className="custom-link">
            {children}
        </a>
    );
};

export default CustomLink;
