import "../../../../assets/css/main.css";

import logoIcon from "../../../../assets/icons/logo.svg";

function Logo() {
    return (
        <a href="./" className="logo top-bar__logo">
            <img
                src={logoIcon}
                alt="Grocery Mart"
                className="logo__img top-bar__logo-img"
            />
            <h2>josdnjofnjo</h2>
            <h1 className="logo__title top-bar__logo-title">grocerymart</h1>
        </a>
    );
}

export default Logo;
