import "../../../assets/css/main.css";
const AdminNav = () => {
    return (
        <div>
            {/* Navbar */}
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
                <a href="./checkout.html" className="nav-btn d-none d-md-flex">
                    <img
                        src="./assets/icons/buy.svg"
                        alt=""
                        className="nav-btn__icon icon"
                    />
                    <span className="nav-btn__title">Cart</span>
                    <span className="nav-btn__qnt">3</span>
                </a>
                <a href="#!" className="nav-btn d-none d-md-flex">
                    <img
                        src="./assets/icons/heart.svg"
                        alt=""
                        className="nav-btn__icon icon"
                    />
                    <span className="nav-btn__title">Favorite</span>
                    <span className="nav-btn__qnt">3</span>
                </a>
                <ul className="navbar__list js-dropdown-list">
                    <li className="navbar__item">
                        <a href="#!" className="navbar__link">
                            Departments
                            <img
                                src="./assets/icons/arrow-down.svg"
                                alt=""
                                className="icon navbar__arrow"
                            />
                        </a>
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
                                                            Savings &amp;
                                                            Featured Shops
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
                                                                {/* Menu column 1.2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-2.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-2.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            Electronics
                                                                            Discounts
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Smartphones
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Laptops
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Headphones
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Cameras
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Tables
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Speakers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Wearable
                                                                                    Tech
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* Sub menu column 2 */}
                                                            <div className="sub-menu__column">
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
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
                                                                        <h2 className="menu-column__heading">
                                                                            Home
                                                                            &amp;
                                                                            Living
                                                                            Specials
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Furniture
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Kitchenware
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Decor
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Bedding
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Appliances
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Lighting
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Outdoor
                                                                                    Furniture
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Home
                                                                                    Office
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Bathroom
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Storage
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Cleaning
                                                                                    Supplies
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* Sub menu column 3 */}
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 3.1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-6.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-6.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            Beauty
                                                                            Bargains
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Skincare
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Makeup
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Fragrances
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Haircare
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Nail
                                                                                    Care
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Beauty
                                                                                    Tools
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Men's
                                                                                    Grooming
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 3.2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-5.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-5.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            Sports
                                                                            &amp;
                                                                            Outdoors
                                                                            Deals
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Fitness
                                                                                    Equipment
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Outdoor
                                                                                    Gear
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Sportswear
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Camping
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Biking
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="menu-column__item">
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            {" "}
                                                            Electronics{" "}
                                                        </a>
                                                        {/* Electronics */}
                                                        <div className="sub-menu">
                                                            {/* Sub menu column 1 */}
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1.1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-2.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-2.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            TV
                                                                            &amp;
                                                                            Video
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Shop
                                                                                    all
                                                                                    TVs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    TVs
                                                                                    by
                                                                                    Size
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Smart
                                                                                    TVs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Roku
                                                                                    TVs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Streaming
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    TV
                                                                                    Mounts
                                                                                    &amp;
                                                                                    Accessories
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    DVD
                                                                                    &amp;
                                                                                    Blu-Ray
                                                                                    Players
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 1.2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-3.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-3.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            TV
                                                                            &amp;
                                                                            Video
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Shop
                                                                                    all
                                                                                    TVs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    TVs
                                                                                    by
                                                                                    Size
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Smart
                                                                                    TVs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Roku
                                                                                    TVs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Streaming
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* Sub menu column 2 */}
                                                            <div className="sub-menu__column">
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
                                                                            Computers
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Shop
                                                                                    All
                                                                                    Computers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Laptops
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    PC
                                                                                    Gaming
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Monitors
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Chromebook
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Printers
                                                                                    &amp;
                                                                                    Ink
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Shop
                                                                                    all
                                                                                    TVs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Computer
                                                                                    Accessories
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Desktops
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Tax
                                                                                    Software
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Computer
                                                                                    Software
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    PC
                                                                                    Finder
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* Sub menu column 3 */}
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 3.1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-5.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-5.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            Savings
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Tech
                                                                                    Savings
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Overstock
                                                                                    Savings
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Tech
                                                                                    Rollbacks
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 3.2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-6.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-6.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            Cell
                                                                            Phones
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Wireless
                                                                                    Deals
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    5G
                                                                                    Phones
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Prepaid
                                                                                    Phones
                                                                                    &amp;
                                                                                    Plans
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Refurbished
                                                                                    Phones
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    iPhone
                                                                                    Accessories
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Cases
                                                                                    &amp;
                                                                                    Screen
                                                                                    Protectors
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Walmart
                                                                                    Protection
                                                                                    Plan
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Unlocked
                                                                                    Phones
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="menu-column__item">
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            Clothing, Shoes
                                                            &amp; Accessories
                                                        </a>
                                                        {/* Sub menu for "Clothing, Shoes & Accessories" */}
                                                        <div className="sub-menu">
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-5.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-5.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Men's
                                                                                Clothing
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Casual
                                                                                    Shirts
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Formal
                                                                                    Suits
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Jeans
                                                                                    &amp;
                                                                                    Pants
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Outerwear
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    T-Shirts
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
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
                                                                            <a href="#!">
                                                                                Women's
                                                                                Clothing
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Dresses
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Skirts
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Blouses
                                                                                    &amp;
                                                                                    Tops
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Handbags
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Coats
                                                                                    &amp;
                                                                                    Jackets
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-3.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-3.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Footwear
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Men's
                                                                                    Shoes
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Women's
                                                                                    Shoes
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Kids'
                                                                                    Shoes
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Sneakers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Boots
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Sandals
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-2.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-2.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Fashion
                                                                                Accessories
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Belts
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Hats
                                                                                    &amp;
                                                                                    Caps
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Scarves
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Gloves
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Sunglasses
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Watches
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-6.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-6.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Seasonal
                                                                                Specials
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Winter
                                                                                    Wear
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Summer
                                                                                    Outfits
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Rain
                                                                                    Gear
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Holiday
                                                                                    Collection
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Gift
                                                                                    Sets
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="menu-column__item">
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            Home, Furniture
                                                            &amp; Appliances
                                                        </a>
                                                        {/* Sub menu for "Home, Furniture & Appliancess" */}
                                                        <div className="sub-menu">
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-6.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-6.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Living
                                                                                Room
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Sofa
                                                                                    Sets
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Coffee
                                                                                    Tables
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    TV
                                                                                    Units
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Book
                                                                                    Shelves
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Wall
                                                                                    Decor
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-5.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-5.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Kitchen
                                                                                Appliances
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Microwave
                                                                                    Ovens
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Dishwashers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Gas
                                                                                    Stoves
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Refrigerators
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Blenders
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* Sub-Menu Column 3: Bedroom */}
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
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
                                                                            <a href="#!">
                                                                                Bedroom
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Beds
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Wardrobes
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Dressing
                                                                                    Tables
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Nightstands
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Mattresses
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* Sub-Menu Column 4: Home Decor */}
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-3.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-3.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Home
                                                                                Decor
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Wall
                                                                                    Art
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Vases
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Light
                                                                                    Fixtures
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Curtains
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Carpets
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-2.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-2.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Office
                                                                                Furniture
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Office
                                                                                    Chairs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Desks
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Cabinets
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Meeting
                                                                                    Tables
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Bookcases
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="menu-column__item">
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            {" "}
                                                            Toys &amp; Video
                                                            Games{" "}
                                                        </a>
                                                        {/* Sub menu for "Toys & Video Games" */}
                                                        <div className="sub-menu">
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-2.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-2.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Action
                                                                                Figures
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Superheroes
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Anime
                                                                                    Figures
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Movie
                                                                                    Characters
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Collectibles
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Robots
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
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
                                                                            <a href="#!">
                                                                                Video
                                                                                Games
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Console
                                                                                    Games
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    PC
                                                                                    Games
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Mobile
                                                                                    Games
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Virtual
                                                                                    Reality
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Game
                                                                                    Accessories
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* Sub-Menu Column 3: Educational Toys */}
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-3.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-3.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Educational
                                                                                Toys
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    STEM
                                                                                    Kits
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Puzzles
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Books
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Art
                                                                                    Supplies
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Learning
                                                                                    Tablets
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-5.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-5.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Outdoor
                                                                                Toys
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Ride-Ons
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Scooters
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Bicycles
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Sports
                                                                                    Gear
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Swimming
                                                                                    Pools
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* Sub-Menu Column 5: Dolls & Plush */}
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-6.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-6.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Dolls
                                                                                &amp;
                                                                                Plush
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Fashion
                                                                                    Dolls
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Animal
                                                                                    Plush
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Character
                                                                                    Dolls
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Interactive
                                                                                    Dolls
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Collectibles
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="menu-column__item">
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            {" "}
                                                            Home Improvement{" "}
                                                        </a>
                                                        {/* Sub menu for "Home Improvement" */}
                                                        <div className="sub-menu">
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
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
                                                                            <a href="#!">
                                                                                Bathroom
                                                                                Upgrades
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Shower
                                                                                    Heads
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Vanity
                                                                                    Units
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Bath
                                                                                    Tubs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Tile
                                                                                    Options
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Bathroom
                                                                                    Lighting
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Cabinet
                                                                                    Designs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Countertops
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Kitchen
                                                                                    Islands
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Backsplash
                                                                                    Options
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Appliance
                                                                                    Upgrades
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
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
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Flooring
                                                                                Solutions
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Hardwood
                                                                                    Flooring
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Tile
                                                                                    Flooring
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Laminate
                                                                                    Options
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Carpet
                                                                                    Choices
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Vinyl
                                                                                    Flooring
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-2.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-2.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Outdoor
                                                                                Improvements
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Deck
                                                                                    Designs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Patio
                                                                                    Ideas
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Landscaping
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Garden
                                                                                    Decor
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Outdoor
                                                                                    Lighting
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-6.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-6.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Paint
                                                                                &amp;
                                                                                Wallpaper
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Wall
                                                                                    Paints
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Primers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Wallpapers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Stencils
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Paint
                                                                                    Brushes
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-5.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-5.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Lighting
                                                                                &amp;
                                                                                Fixtures
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Ceiling
                                                                                    Lights
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Wall
                                                                                    Lamps
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Outdoor
                                                                                    Lights
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Chandeliers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Table
                                                                                    Lamps
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="menu-column__item">
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            {" "}
                                                            Baby{" "}
                                                        </a>
                                                        {/* Sub menu for "Baby" */}
                                                        <div className="sub-menu">
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-6.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-6.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Baby
                                                                                Clothing
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Newborn
                                                                                    Sets
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Baby
                                                                                    Dresses
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Rompers
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
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-5.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-5.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Feeding
                                                                                Essentials
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Bottles
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    High
                                                                                    Chairs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Sterilizers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Bibs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Sippy
                                                                                    Cups
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
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
                                                                            <a href="#!">
                                                                                Diapering
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Diapers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Wipes
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Changing
                                                                                    Tables
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Pails
                                                                                    &amp;
                                                                                    Refills
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Creams
                                                                                    &amp;
                                                                                    Ointments
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-3.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-3.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Nursery
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Cribs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Bedding
                                                                                    Sets
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Decor
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Monitors
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Storage
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-2.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-2.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Toys
                                                                                &amp;
                                                                                Books
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Educational
                                                                                    Toys
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Soft
                                                                                    Toys
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Activity
                                                                                    Toys
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Books
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Puzzles
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Thermometers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Baby
                                                                                    Gates
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Humidifiers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    First
                                                                                    Aid
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Vitamins
                                                                                    &amp;
                                                                                    Supplements
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="menu-column__item">
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            {" "}
                                                            Household Essentials{" "}
                                                        </a>
                                                        {/* Sub menu for "Household Essentials" */}
                                                        <div className="sub-menu">
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
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
                                                                            <a href="#!">
                                                                                Fashion
                                                                                Deals
                                                                            </a>
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
                                                                {/* Menu column 2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-2.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-2.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Electronics
                                                                                Discounts
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Smartphones
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Laptops
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Headphones
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Cameras
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Tablets
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Speakers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Wearable
                                                                                    Tech
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
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
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Home
                                                                                &amp;
                                                                                Living
                                                                                Specials
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Furniture
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Kitchenware
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Decor
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Bedding
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Appliances
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Lighting
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Outdoor
                                                                                    Furniture
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Home
                                                                                    Office
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Bathroom
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Storage
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Cleaning
                                                                                    Supplies
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-6.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-6.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Beauty
                                                                                Bargains
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Skincare
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Makeup
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Haircare
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Fragrances
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Nail
                                                                                    Care
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Beauty
                                                                                    Tools
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Men's
                                                                                    Grooming
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-5.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-5.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Sports
                                                                                &amp;
                                                                                Outdoors
                                                                                Deals
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Fitness
                                                                                    Equipment
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Outdoor
                                                                                    Gear
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Sportswear
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Camping
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Biking
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="menu-column__item">
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            {" "}
                                                            Personal Care{" "}
                                                        </a>
                                                        {/* Sub menu for "Personal Care" */}
                                                        <div className="sub-menu">
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-2.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-2.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                TV
                                                                                &amp;
                                                                                Video
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Shop
                                                                                    all
                                                                                    TVs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    TVs
                                                                                    by
                                                                                    Size
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Smart
                                                                                    TVs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Roku
                                                                                    TVs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Streaming
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    TV
                                                                                    Mounts
                                                                                    &amp;
                                                                                    Accessories
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    DVD
                                                                                    &amp;
                                                                                    Blu-Ray
                                                                                    Players
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-3.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-3.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Wearable
                                                                                Technology
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Galaxy
                                                                                    Watch
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Apple
                                                                                    Watch
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Fitness
                                                                                    Trackers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Virtual
                                                                                    Reality
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Headphones
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
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
                                                                            <a href="#!">
                                                                                Computers
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Shop
                                                                                    All
                                                                                    Computers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Laptops
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    PC
                                                                                    Gaming
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Monitors
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Chromebook
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Printers
                                                                                    &amp;
                                                                                    Ink
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Shop
                                                                                    all
                                                                                    TVs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Computer
                                                                                    Accessories
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Desktops
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Tax
                                                                                    Software
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Computer
                                                                                    Software
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    PC
                                                                                    Finder
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-5.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-5.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Savings
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Tech
                                                                                    Savings
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Overstock
                                                                                    Savings
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Tech
                                                                                    Rollbacks
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-6.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-6.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Cell
                                                                                Phones
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Wireless
                                                                                    Deals
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    5G
                                                                                    Phones
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Prepaid
                                                                                    Phones
                                                                                    &amp;
                                                                                    Plans
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Refurbished
                                                                                    Phones
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    iPhone
                                                                                    Accessories
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Cases
                                                                                    &amp;
                                                                                    Screen
                                                                                    Protectors
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Walmart
                                                                                    Protection
                                                                                    Plan
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Unlocked
                                                                                    Phones
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="menu-column__item">
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            {" "}
                                                            Patio &amp; Garden{" "}
                                                        </a>
                                                        {/* Sub menu for "Patio & Garden" */}
                                                        <div className="sub-menu">
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-5.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-5.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Men's
                                                                                Clothing
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Casual
                                                                                    Shirts
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Formal
                                                                                    Suits
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Jeans
                                                                                    &amp;
                                                                                    Pants
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Outerwear
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    T-Shirts
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
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
                                                                            <a href="#!">
                                                                                Women's
                                                                                Clothing
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Dresses
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Skirts
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Blouses
                                                                                    &amp;
                                                                                    Tops
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Handbags
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Coats
                                                                                    &amp;
                                                                                    Jackets
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-3.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-3.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Footwear
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Men's
                                                                                    Shoes
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Women's
                                                                                    Shoes
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Kids'
                                                                                    Shoes
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Sneakers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Boots
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Sandals
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-2.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-2.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Fashion
                                                                                Accessories
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Belts
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Hats
                                                                                    &amp;
                                                                                    Caps
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Scarves
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Gloves
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Sunglasses
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Watches
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-6.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-6.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Seasonal
                                                                                Specials
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Winter
                                                                                    Wear
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Summer
                                                                                    Outfits
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Rain
                                                                                    Gear
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Holiday
                                                                                    Collection
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Gift
                                                                                    Sets
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="menu-column__item">
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            {" "}
                                                            Sports &amp;
                                                            Outdoors{" "}
                                                        </a>
                                                        {/* Sub menu for "Sports & Outdoors" */}
                                                        <div className="sub-menu">
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-6.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-6.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Living
                                                                                Room
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Sofa
                                                                                    Sets
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Coffee
                                                                                    Tables
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    TV
                                                                                    Units
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Book
                                                                                    Shelves
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Wall
                                                                                    Decor
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-5.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-5.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Kitchen
                                                                                Appliances
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Microwave
                                                                                    Ovens
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Dishwashers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Gas
                                                                                    Stoves
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Refrigerators
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Blenders
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
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
                                                                            <a href="#!">
                                                                                Bedroom
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Beds
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Wardrobes
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Dressing
                                                                                    Tables
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Nightstands
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Mattresses
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-3.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-3.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Home
                                                                                Decor
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Wall
                                                                                    Art
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Vases
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Light
                                                                                    Fixtures
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Curtains
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Carpets
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-2.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-2.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Office
                                                                                Furniture
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Office
                                                                                    Chairs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Desks
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Cabinets
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Meeting
                                                                                    Tables
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Bookcases
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="menu-column__item">
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            {" "}
                                                            Gift Cards{" "}
                                                        </a>
                                                        {/* Sub menu for "Gift Cards" */}
                                                        <div className="sub-menu">
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-2.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-2.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Action
                                                                                Figures
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Superheroes
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Anime
                                                                                    Figures
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Movie
                                                                                    Characters
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Collectibles
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Robots
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
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
                                                                            <a href="#!">
                                                                                Video
                                                                                Games
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Console
                                                                                    Games
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    PC
                                                                                    Games
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Mobile
                                                                                    Games
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Virtual
                                                                                    Reality
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Game
                                                                                    Accessories
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-3.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-3.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Educational
                                                                                Toys
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    STEM
                                                                                    Kits
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Puzzles
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Books
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Art
                                                                                    Supplies
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Learning
                                                                                    Tablets
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-5.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-5.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Outdoor
                                                                                Toys
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Ride-Ons
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Scooters
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Bicycles
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Sports
                                                                                    Gear
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Swimming
                                                                                    Pools
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-6.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-6.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Dolls
                                                                                &amp;
                                                                                Plush
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Fashion
                                                                                    Dolls
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Animal
                                                                                    Plush
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Character
                                                                                    Dolls
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Interactive
                                                                                    Dolls
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Collectibles
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="menu-column__item">
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            Auto, Tires and
                                                            Indus trial
                                                        </a>
                                                        {/* Sub menu for "Auto, Tires and Industrial" */}
                                                        <div className="sub-menu">
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
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
                                                                            <a href="#!">
                                                                                Bathroom
                                                                                Upgrades
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Shower
                                                                                    Heads
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Vanity
                                                                                    Units
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Bath
                                                                                    Tubs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Tile
                                                                                    Options
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Bathroom
                                                                                    Lighting
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Cabinet
                                                                                    Designs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Countertops
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Kitchen
                                                                                    Islands
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Backsplash
                                                                                    Options
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Appliance
                                                                                    Upgrades
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
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
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Flooring
                                                                                Solutions
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Hardwood
                                                                                    Flooring
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Tile
                                                                                    Flooring
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Laminate
                                                                                    Options
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Carpet
                                                                                    Choices
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Vinyl
                                                                                    Flooring
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-2.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-2.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Outdoor
                                                                                Improvements
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Deck
                                                                                    Designs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Patio
                                                                                    Ideas
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Landscaping
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Garden
                                                                                    Decor
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Outdoor
                                                                                    Lighting
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-6.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-6.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Paint
                                                                                &amp;
                                                                                Wallpaper
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Wall
                                                                                    Paints
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Primers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Wallpapers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Stencils
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Paint
                                                                                    Brushes
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-5.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-5.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Lighting
                                                                                &amp;
                                                                                Fixtures
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Ceiling
                                                                                    Lights
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Wall
                                                                                    Lamps
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Outdoor
                                                                                    Lights
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Chandeliers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Table
                                                                                    Lamps
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="menu-column__item">
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            {" "}
                                                            Movies, Music &amp;
                                                            Books{" "}
                                                        </a>
                                                        {/* Sub menu for "Movies, Music & Books" */}
                                                        <div className="sub-menu">
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-6.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-6.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Baby
                                                                                Clothing
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Newborn
                                                                                    Sets
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Baby
                                                                                    Dresses
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Rompers
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
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-5.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-5.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Feeding
                                                                                Essentials
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Bottles
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    High
                                                                                    Chairs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Sterilizers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Bibs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Sippy
                                                                                    Cups
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
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
                                                                            <a href="#!">
                                                                                Diapering
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Diapers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Wipes
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Changing
                                                                                    Tables
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Pails
                                                                                    &amp;
                                                                                    Refills
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Creams
                                                                                    &amp;
                                                                                    Ointments
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* Menu column 2 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-3.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-3.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Nursery
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Cribs
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Bedding
                                                                                    Sets
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Decor
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Monitors
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Storage
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sub-menu__column">
                                                                {/* Menu column 1 */}
                                                                <div className="menu-column">
                                                                    <div className="menu-column__icon">
                                                                        <img
                                                                            src="./assets/img/category/cate-2.1.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-1"
                                                                        />
                                                                        <img
                                                                            src="./assets/img/category/cate-2.2.svg"
                                                                            alt=""
                                                                            className="menu-column__icon-2"
                                                                        />
                                                                    </div>
                                                                    <div className="menu-column__content">
                                                                        <h2 className="menu-column__heading">
                                                                            <a href="#!">
                                                                                Toys
                                                                                &amp;
                                                                                Books
                                                                            </a>
                                                                        </h2>
                                                                        <ul className="menu-column__list">
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Educational
                                                                                    Toys
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Soft
                                                                                    Toys
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Activity
                                                                                    Toys
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Books
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Puzzles
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Thermometers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Baby
                                                                                    Gates
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Humidifiers
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    First
                                                                                    Aid
                                                                                </a>
                                                                            </li>
                                                                            <li className="menu-column__item">
                                                                                <a
                                                                                    href="#!"
                                                                                    className="menu-column__link"
                                                                                >
                                                                                    Vitamins
                                                                                    &amp;
                                                                                    Supplements
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="navbar__item">
                        <a href="#!" className="navbar__link">
                            Grocery
                            <img
                                src="./assets/icons/arrow-down.svg"
                                alt=""
                                className="icon navbar__arrow"
                            />
                        </a>
                        <div className="dropdown js-dropdown">
                            <div className="dropdown__inner">
                                <div className="top-menu">
                                    <div className="sub-menu sub-menu__not-main">
                                        {/* Sub menu column 1 */}
                                        <div className="sub-menu__column">
                                            {/* Menu column 1.1 */}
                                            <div className="menu-column">
                                                <div className="menu-column__icon">
                                                    <img
                                                        src="./assets/img/category/cate-7.1.svg"
                                                        alt=""
                                                        className="menu-column__icon-1"
                                                    />
                                                    <img
                                                        src="./assets/img/category/cate-7.2.svg"
                                                        alt=""
                                                        className="menu-column__icon-2"
                                                    />
                                                </div>
                                                <div className="menu-column__content">
                                                    <h2 className="menu-column__heading">
                                                        Grocery
                                                    </h2>
                                                    <ul className="menu-column__list">
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Shop All
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Grilling Foods
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Spring Flavors
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* Menu column 1.2 */}
                                            <div className="menu-column">
                                                <div className="menu-column__icon">
                                                    <img
                                                        src="./assets/img/category/cate-8.1.svg"
                                                        alt=""
                                                        className="menu-column__icon-1"
                                                    />
                                                    <img
                                                        src="./assets/img/category/cate-8.2.svg"
                                                        alt=""
                                                        className="menu-column__icon-2"
                                                    />
                                                </div>
                                                <div className="menu-column__content">
                                                    <h2 className="menu-column__heading">
                                                        Fresh Produce
                                                    </h2>
                                                    <ul className="menu-column__list">
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Shop All
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Celebrate Salad
                                                                Month
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Healthy Living
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Fresh Flowers
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Chilled Dressing
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Fresh Fruit
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Salad Kits &amp;
                                                                Bowls
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Organic Produce
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Fresh Vegetables
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Sub menu column 2 */}
                                        <div className="sub-menu__column">
                                            {/* Menu column 2.1 */}
                                            <div className="menu-column">
                                                <div className="menu-column__icon">
                                                    <img
                                                        src="./assets/img/category/cate-9.1.svg"
                                                        alt=""
                                                        className="menu-column__icon-1"
                                                    />
                                                    <img
                                                        src="./assets/img/category/cate-9.2.svg"
                                                        alt=""
                                                        className="menu-column__icon-2"
                                                    />
                                                </div>
                                                <div className="menu-column__content">
                                                    <h2 className="menu-column__heading">
                                                        Bakery &amp; Bread
                                                    </h2>
                                                    <ul className="menu-column__list">
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Shop All
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                New in Bakery
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Sliced Bread
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Rolls &amp; Buns
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Tortillas
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Breakfast Breads
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Pies
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Cookies &amp;
                                                                Brownies
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* Menu column 2.2 */}
                                            <div className="menu-column">
                                                <div className="menu-column__icon">
                                                    <img
                                                        src="./assets/img/category/cate-10.1.svg"
                                                        alt=""
                                                        className="menu-column__icon-1"
                                                    />
                                                    <img
                                                        src="./assets/img/category/cate-10.2.svg"
                                                        alt=""
                                                        className="menu-column__icon-2"
                                                    />
                                                </div>
                                                <div className="menu-column__content">
                                                    <h2 className="menu-column__heading">
                                                        Frozen
                                                    </h2>
                                                    <ul className="menu-column__list">
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Frozen Breakfast
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Frozen Potatoes
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Frozen Meals
                                                                &amp; Snacks
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Sub menu column 3 */}
                                        <div className="sub-menu__column">
                                            {/* Menu column 3.1 */}
                                            <div className="menu-column">
                                                <div className="menu-column__icon">
                                                    <img
                                                        src="./assets/img/category/cate-11.1.svg"
                                                        alt=""
                                                        className="menu-column__icon-1"
                                                    />
                                                    <img
                                                        src="./assets/img/category/cate-11.2.svg"
                                                        alt=""
                                                        className="menu-column__icon-2"
                                                    />
                                                </div>
                                                <div className="menu-column__content">
                                                    <h2 className="menu-column__heading">
                                                        Snacks
                                                    </h2>
                                                    <ul className="menu-column__list">
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Shop All
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Chips
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Popcorn &amp;
                                                                Pretzels
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Crackers
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Salsa &amp; Dips
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* Menu column 3.2 */}
                                            <div className="menu-column">
                                                <div className="menu-column__icon">
                                                    <img
                                                        src="./assets/img/category/cate-12.1.svg"
                                                        alt=""
                                                        className="menu-column__icon-1"
                                                    />
                                                    <img
                                                        src="./assets/img/category/cate-12.2.svg"
                                                        alt=""
                                                        className="menu-column__icon-2"
                                                    />
                                                </div>
                                                <div className="menu-column__content">
                                                    <h2 className="menu-column__heading">
                                                        Candy
                                                    </h2>
                                                    <ul className="menu-column__list">
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Shop All
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Better for You
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Chocolate
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Sugar Free Candy
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Gum
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Mints
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                On-the-Go
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Sub menu column 4 */}
                                        <div className="sub-menu__column">
                                            {/* Menu column 4.1 */}
                                            <div className="menu-column">
                                                <div className="menu-column__icon">
                                                    <img
                                                        src="./assets/img/category/cate-13.1.svg"
                                                        alt=""
                                                        className="menu-column__icon-1"
                                                    />
                                                    <img
                                                        src="./assets/img/category/cate-13.2.svg"
                                                        alt=""
                                                        className="menu-column__icon-2"
                                                    />
                                                </div>
                                                <div className="menu-column__content">
                                                    <h2 className="menu-column__heading">
                                                        Cocktails &amp; Mixes
                                                        Coffee
                                                    </h2>
                                                    <ul className="menu-column__list">
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Ground Coffee
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Whole Bean
                                                                Coffee
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Coffee Pods
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Instant Coffee
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* Menu column 4.2 */}
                                            <div className="menu-column">
                                                <div className="menu-column__icon">
                                                    <img
                                                        src="./assets/img/category/cate-14.1.svg"
                                                        alt=""
                                                        className="menu-column__icon-1"
                                                    />
                                                    <img
                                                        src="./assets/img/category/cate-14.2.svg"
                                                        alt=""
                                                        className="menu-column__icon-2"
                                                    />
                                                </div>
                                                <div className="menu-column__content">
                                                    <h2 className="menu-column__heading">
                                                        Beverages
                                                    </h2>
                                                    <ul className="menu-column__list">
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Shop All
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Water
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Soft Drinks
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Fruit Juice
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Sports Drinks
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Energy Drinks
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Tea
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Hot Chocolate
                                                                &amp; Cocoas
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="navbar__item">
                        <a href="#!" className="navbar__link">
                            Beauty
                            <img
                                src="./assets/icons/arrow-down.svg"
                                alt=""
                                className="icon navbar__arrow"
                            />
                        </a>
                        <div className="dropdown js-dropdown">
                            <div className="dropdown__inner">
                                <div className="top-menu">
                                    <div className="sub-menu sub-menu__not-main">
                                        {/* Sub menu column 1 */}
                                        <div className="sub-menu__column">
                                            {/* Menu column 1.1 */}
                                            <div className="menu-column">
                                                <div className="menu-column__icon">
                                                    <img
                                                        src="./assets/img/category/cate-15.1.svg"
                                                        alt=""
                                                        className="menu-column__icon-1"
                                                    />
                                                    <img
                                                        src="./assets/img/category/cate-15.2.svg"
                                                        alt=""
                                                        className="menu-column__icon-2"
                                                    />
                                                </div>
                                                <div className="menu-column__content">
                                                    <h2 className="menu-column__heading">
                                                        Featured Shops
                                                    </h2>
                                                    <ul className="menu-column__list">
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Pickup Today in
                                                                Beauty
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                BeautySpaceNK
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Equate Beauty
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Beauty Deals
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Walmart
                                                                Exclusives
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Luxury Beauty
                                                                Deals
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                New Arrivals
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* Menu column 1.2 */}
                                            <div className="menu-column">
                                                <div className="menu-column__icon">
                                                    <img
                                                        src="./assets/img/category/cate-16.1.svg"
                                                        alt=""
                                                        className="menu-column__icon-1"
                                                    />
                                                    <img
                                                        src="./assets/img/category/cate-16.2.svg"
                                                        alt=""
                                                        className="menu-column__icon-2"
                                                    />
                                                </div>
                                                <div className="menu-column__content">
                                                    <h2 className="menu-column__heading">
                                                        Trending in Beauty
                                                    </h2>
                                                    <ul className="menu-column__list">
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Trending Beauty
                                                                Products
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Celebrate Earth
                                                                Day
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Prom-ready
                                                                Beauty
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Summer Beauty
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Travel Size
                                                                &amp; Minis
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Sub menu column 2 */}
                                        <div className="sub-menu__column">
                                            {/* Menu column 2.1 */}
                                            <div className="menu-column">
                                                <div className="menu-column__icon">
                                                    <img
                                                        src="./assets/img/category/cate-17.1.svg"
                                                        alt=""
                                                        className="menu-column__icon-1"
                                                    />
                                                    <img
                                                        src="./assets/img/category/cate-17.2.svg"
                                                        alt=""
                                                        className="menu-column__icon-2"
                                                    />
                                                </div>
                                                <div className="menu-column__content">
                                                    <h2 className="menu-column__heading">
                                                        Featured Brands
                                                    </h2>
                                                    <ul className="menu-column__list">
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Shop All
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                New in Bakery
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Sliced Bread
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Rolls &amp; Buns
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Tortillas
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Breakfast Breads
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Pies
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Cookies &amp;
                                                                Brownies
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* Menu column 2.2 */}
                                            <div className="menu-column">
                                                <div className="menu-column__icon">
                                                    <img
                                                        src="./assets/img/category/cate-18.1.svg"
                                                        alt=""
                                                        className="menu-column__icon-1"
                                                    />
                                                    <img
                                                        src="./assets/img/category/cate-18.2.svg"
                                                        alt=""
                                                        className="menu-column__icon-2"
                                                    />
                                                </div>
                                                <div className="menu-column__content">
                                                    <h2 className="menu-column__heading">
                                                        Communities to Support
                                                    </h2>
                                                    <ul className="menu-column__list">
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Black Owned
                                                                Beauty
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                LatinX Owned
                                                                Beauty
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                AAPI Owned
                                                                Beauty
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Sub menu column 3 */}
                                        <div className="sub-menu__column">
                                            <div className="menu-column">
                                                <div className="menu-column__icon">
                                                    <img
                                                        src="./assets/img/category/cate-19.1.svg"
                                                        alt=""
                                                        className="menu-column__icon-1"
                                                    />
                                                    <img
                                                        src="./assets/img/category/cate-19.2.svg"
                                                        alt=""
                                                        className="menu-column__icon-2"
                                                    />
                                                </div>
                                                <div className="menu-column__content">
                                                    <h2 className="menu-column__heading">
                                                        Premium Beauty
                                                    </h2>
                                                    <ul className="menu-column__list">
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Shop All
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Hair Color
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Hair Care
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Skincare
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Fragrance
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Makeup
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Beauty Tech
                                                                &amp; Tools
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Sub menu column 4 */}
                                        <div className="sub-menu__column">
                                            <div className="menu-column">
                                                <div className="menu-column__icon">
                                                    <img
                                                        src="./assets/img/category/cate-20.1.svg"
                                                        alt=""
                                                        className="menu-column__icon-1"
                                                    />
                                                    <img
                                                        src="./assets/img/category/cate-20.2.svg"
                                                        alt=""
                                                        className="menu-column__icon-2"
                                                    />
                                                </div>
                                                <div className="menu-column__content">
                                                    <h2 className="menu-column__heading">
                                                        Beauty
                                                    </h2>
                                                    <ul className="menu-column__list">
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Shop All
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Men's Grooming
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Bath &amp; Body
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Beauty Tech
                                                                &amp; Tools
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Makeup
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Fragrance
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Nail Care
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Hair Care
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Hair Color
                                                            </a>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="#!"
                                                                className="menu-column__link"
                                                            >
                                                                Skincare
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default AdminNav;
