import "../../../../assets/css/main.css";

function DropdownMenuItem({ title, icon }) {
    return (
        <li className="navbar__item">
            <a href="#!" className="navbar__link">
                {title}
                <img src={icon} alt="" className="icon navbar__arrow" />
            </a>
        </li>
    );
}

export default DropdownMenuItem;
