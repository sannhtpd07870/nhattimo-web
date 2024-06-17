import "../../../../assets/css/main.css";

import moreIcon from "../../../../assets/icons/more.svg";

function MoreButton() {
    return (
        <button
            className="top-bar__more d-none d-lg-block js-toggle"
            toggle-target="#navbar"
        >
            <img src={moreIcon} alt="" className="top-bar__more--img icon" />
        </button>
    );
}

export default MoreButton;
