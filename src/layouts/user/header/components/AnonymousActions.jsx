import "../../../../assets/css/main.css";

function AnonymousActions() {
    return (
        <div className="top-act">
            <div className="top-act__group d-md-none top-act__group--single">
                <button className="top-act__btn">
                    <img
                        src="./assets/icons/search.svg"
                        alt=""
                        className="top-act__icon icon"
                    />
                </button>
            </div>
            <div className="top-act__group d-md-none">
                <div className="top-act__btn--wrap">
                    <button className="top-act__btn">
                        <img
                            src="./assets/icons/heart.svg"
                            alt=""
                            className="top-act__icon icon"
                        />
                        <span className="top-act__title">03</span>
                    </button>
                    {/* Dropdown */}
                    <div className="act-dropdown">{/* Dropdown content */}</div>
                </div>
                {/* Other actions */}
            </div>
        </div>
    );
}

export default AnonymousActions;
