import "../../../../assets/css/main.css";

function DropdownMenu() {
    return (
        <div className="dropdown js-dropdown">
            <div className="dropdown__inner">
                <div className="top-menu">
                    <div className="top-menu__main">
                        {/* Menu column */}
                        <div className="menu-column">
                            <div className="menu-column__icon d-lg-none">
                                <img
                                    src="./assets/img/category/cate-1.1.svg"
                                    alt=""
                                    className="menu-column__icon-1"
                                />
                                <img
                                    src="./assets/img/category/cate-1.2.svg"
                                    alt=""
                                    className="menu-column__icon-2"
                                />
                            </div>
                            <div className="menu-column__content">
                                <h2 className="menu-column__heading d-lg-none">
                                    All Departments
                                </h2>
                                <ul className="menu-column__list js-menu-list">
                                    <li className="menu-column__item">
                                        <a
                                            href="#!"
                                            className="menu-column__link"
                                        >
                                            Savings & Featured Shops
                                        </a>
                                        {/* Savings & Featured shops */}
                                        <div className="sub-menu">
                                            {/* Sub menu column 1 */}
                                            <div className="sub-menu__column">
                                                {/* Menu column 1.1 */}
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src="./assets/img/category/cate-4.1.svg"
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src="./assets/img/category/cate-4.2.svg"
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            Fashion
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Bags
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Jewelry
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End sub menu column 1 */}
                                            {/* Other sub menus */}
                                        </div>
                                    </li>
                                    {/* Other menu items */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DropdownMenu;
