import "../../../../assets/css/main.css";

import NavButton from "./NavButton";

function Navbar() {
    return (
        <nav id="navbar" className="navbar show">
            <button
                className="navbar__close-btn js-toggle"
                toggle-target="#navbar"
            >
                <img
                    src="./assets/icons/arrow-left.svg"
                    alt=""
                    className="icon"
                />
            </button>
            <NavButton
                icon="./assets/icons/buy.svg"
                title="Cart"
                quantity={3}
            />
            <NavButton
                icon="./assets/icons/heart.svg"
                title="Favorite"
                quantity={3}
            />
        </nav>
    );
}

export default Navbar;
