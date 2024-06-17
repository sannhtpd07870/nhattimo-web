import { useNavigate } from "react-router-dom";
import "../../../assets/css/main.css";
import arrowDown from "../../../assets/icons/arrow-down.svg";
import logoIcon from "../../../assets/icons/logo.svg";
const AdminHeader = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await fetch(
                "http://localhost:12345/api/Auth/logout",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`, // Gửi token trong header
                    },
                }
            );

            if (response.ok) {
                localStorage.removeItem("token"); // Xóa token từ localStorage
                navigate("/login"); // Điều hướng về trang đăng nhập
            } else {
                console.log("Logout failed");
                // Xử lý lỗi nếu có
            }
        } catch (error) {
            console.error("Error during logout:", error);
            // Xử lý lỗi khi gọi API logout
        }
    };
    return (
        <div className="container">
            <div className="top-bar">
                {/* More */}
                <button
                    className="top-bar__more d-none d-lg-block js-toggle"
                    toggle-target="#navbar"
                >
                    <img
                        src="./assets/icons/more.svg"
                        alt=""
                        className="top-bar__more--img icon"
                    />
                </button>
                {/* Logo */}
                <a href="./" className="logo top-bar__logo">
                    <img
                        src={logoIcon}
                        alt="Grocery Mart"
                        className="logo__img top-bar__logo-img"
                    />
                    <h1 className="logo__title top-bar__logo-title">
                        grocerymart
                    </h1>
                </a>
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
                    <a
                        href="./checkout.html"
                        className="nav-btn d-none d-md-flex"
                    >
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
                                CRUD
                                <img
                                    src={arrowDown}
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
                                                        All CRUD
                                                    </h2>
                                                    <ul className="menu-column__list js-menu-list">
                                                        <li className="menu-column__item">
                                                            <a
                                                                href="/admin/curd/role"
                                                                className="menu-column__link"
                                                            >
                                                                Role
                                                            </a>
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
                                                                    Grilling
                                                                    Foods
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Spring
                                                                    Flavors
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
                                                                    Celebrate
                                                                    Salad Month
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Healthy
                                                                    Living
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Fresh
                                                                    Flowers
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Chilled
                                                                    Dressing
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
                                                                    Salad Kits
                                                                    &amp; Bowls
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Organic
                                                                    Produce
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Fresh
                                                                    Vegetables
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
                                                                    New in
                                                                    Bakery
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
                                                                    Rolls &amp;
                                                                    Buns
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
                                                                    Breakfast
                                                                    Breads
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
                                                                    Cookies
                                                                    &amp;
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
                                                                    Frozen
                                                                    Breakfast
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Frozen
                                                                    Potatoes
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
                                                                    Popcorn
                                                                    &amp;
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
                                                                    Salsa &amp;
                                                                    Dips
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
                                                                    Better for
                                                                    You
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
                                                                    Sugar Free
                                                                    Candy
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
                                                            Cocktails &amp;
                                                            Mixes Coffee
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Ground
                                                                    Coffee
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
                                                                    Instant
                                                                    Coffee
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
                                                                    Sports
                                                                    Drinks
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Energy
                                                                    Drinks
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
                                                                    Hot
                                                                    Chocolate
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
                                                                    Pickup Today
                                                                    in Beauty
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
                                                                    Equate
                                                                    Beauty
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
                                                                    Luxury
                                                                    Beauty Deals
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
                                                                    Trending
                                                                    Beauty
                                                                    Products
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Celebrate
                                                                    Earth Day
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
                                                                    Summer
                                                                    Beauty
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
                                                                    New in
                                                                    Bakery
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
                                                                    Rolls &amp;
                                                                    Buns
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
                                                                    Breakfast
                                                                    Breads
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
                                                                    Cookies
                                                                    &amp;
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
                                                            Communities to
                                                            Support
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
                                                                    Men's
                                                                    Grooming
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Bath &amp;
                                                                    Body
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
                <div
                    className="navbar__overlay js-toggle"
                    toggle-target="#navbar"
                />
                {/* Actions */}
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
                            <div className="act-dropdown">
                                <div className="act-dropdown__inner">
                                    <img
                                        src="./assets/icons/arrow-up.png"
                                        alt=""
                                        className="act-dropdown__arrow"
                                    />
                                    <div className="act-dropdown__top">
                                        <h2 className="act-dropdown__title">
                                            You have 3 item(s)
                                        </h2>
                                        <a
                                            href="./favorite.html"
                                            className="act-dropdown__view-all"
                                        >
                                            See All
                                        </a>
                                    </div>
                                    <div className="row row-cols-3 g-xl-2 act-dropdown__list">
                                        <div className="col">
                                            {/* Cart preview item 1 */}
                                            <article className="cart-preview-item">
                                                <div className="cart-preview-item__img-wrap">
                                                    <img
                                                        src="./assets/img/product-cart-item/item1.png"
                                                        alt=""
                                                        className="cart-preview-item__thumb"
                                                    />
                                                </div>
                                                <h3 className="cart-preview-item__title">
                                                    Lavazza Coffee Blends
                                                </h3>
                                                <p className="cart-preview-item__price">
                                                    $329.00
                                                </p>
                                            </article>
                                        </div>
                                        <div className="col">
                                            {/* Cart preview item 2 */}
                                            <article className="cart-preview-item">
                                                <div className="cart-preview-item__img-wrap">
                                                    <img
                                                        src="./assets/img/product-cart-item/item11.png"
                                                        alt=""
                                                        className="cart-preview-item__thumb"
                                                    />
                                                </div>
                                                <h3 className="cart-preview-item__title">
                                                    Coffee Beans Espresso
                                                </h3>
                                                <p className="cart-preview-item__price">
                                                    $39.99
                                                </p>
                                            </article>
                                        </div>
                                        <div className="col">
                                            {/* Cart preview item 3 */}
                                            <article className="cart-preview-item">
                                                <div className="cart-preview-item__img-wrap">
                                                    <img
                                                        src="./assets/img/product-cart-item/item12.png"
                                                        alt=""
                                                        className="cart-preview-item__thumb"
                                                    />
                                                </div>
                                                <h3 className="cart-preview-item__title">
                                                    Qualità Oro Mountain
                                                </h3>
                                                <p className="cart-preview-item__price">
                                                    $47.00
                                                </p>
                                            </article>
                                        </div>
                                    </div>
                                    <div className="act-dropdown__separate" />
                                    <div className="act-dropdown__checkout">
                                        <a
                                            href="./checkout.html"
                                            className="btn btn--primary btn--rounded act-dropdown__checkout-btn"
                                        >
                                            Check Out All
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="top-act__separate" />
                        <div className="top-act__btn--wrap">
                            <button className="top-act__btn">
                                <img
                                    src="./assets/icons/buy.svg"
                                    alt=""
                                    className="top-act__icon icon"
                                />
                                <span className="top-act__title">$65.42</span>
                            </button>
                            {/* Dropdown */}
                            <div className="act-dropdown">
                                <div className="act-dropdown__inner">
                                    <img
                                        src="./assets/icons/arrow-up.png"
                                        alt=""
                                        className="act-dropdown__arrow"
                                    />
                                    <div className="act-dropdown__top">
                                        <h2 className="act-dropdown__title">
                                            You have 3 item(s)
                                        </h2>
                                        <a
                                            href="./checkout.html"
                                            className="act-dropdown__view-all"
                                        >
                                            See All
                                        </a>
                                    </div>
                                    <div className="row row-cols-3 g-xl-2 act-dropdown__list">
                                        <div className="col">
                                            {/* Cart preview item 1 */}
                                            <article className="cart-preview-item">
                                                <div className="cart-preview-item__img-wrap">
                                                    <img
                                                        src="./assets/img/product-cart-item/item1.png"
                                                        alt=""
                                                        className="cart-preview-item__thumb"
                                                    />
                                                </div>
                                                <h3 className="cart-preview-item__title">
                                                    Lavazza Coffee Blends
                                                </h3>
                                                <p className="cart-preview-item__price">
                                                    $329.00
                                                </p>
                                            </article>
                                        </div>
                                        <div className="col">
                                            {/* Cart preview item 2 */}
                                            <article className="cart-preview-item">
                                                <div className="cart-preview-item__img-wrap">
                                                    <img
                                                        src="./assets/img/product-cart-item/item11.png"
                                                        alt=""
                                                        className="cart-preview-item__thumb"
                                                    />
                                                </div>
                                                <h3 className="cart-preview-item__title">
                                                    Coffee Beans Espresso
                                                </h3>
                                                <p className="cart-preview-item__price">
                                                    $39.99
                                                </p>
                                            </article>
                                        </div>
                                        <div className="col">
                                            {/* Cart preview item 3 */}
                                            <article className="cart-preview-item">
                                                <div className="cart-preview-item__img-wrap">
                                                    <img
                                                        src="./assets/img/product-cart-item/item12.png"
                                                        alt=""
                                                        className="cart-preview-item__thumb"
                                                    />
                                                </div>
                                                <h3 className="cart-preview-item__title">
                                                    Qualità Oro Mountain
                                                </h3>
                                                <p className="cart-preview-item__price">
                                                    $47.00
                                                </p>
                                            </article>
                                        </div>
                                    </div>
                                    <div className="act-dropdown__bottom">
                                        <div className="act-dropdown__row">
                                            <span className="act-dropdown__label">
                                                Subtotal
                                            </span>
                                            <span className="act-dropdown__value">
                                                $415.99
                                            </span>
                                        </div>
                                        <div className="act-dropdown__row">
                                            <span className="act-dropdown__label">
                                                Texes
                                            </span>
                                            <span className="act-dropdown__value">
                                                Free
                                            </span>
                                        </div>
                                        <div className="act-dropdown__row">
                                            <span className="act-dropdown__label">
                                                Shipping
                                            </span>
                                            <span className="act-dropdown__value">
                                                $10.00
                                            </span>
                                        </div>
                                        <div className="act-dropdown__row act-dropdown__row--bold">
                                            <span className="act-dropdown__label">
                                                Total Price
                                            </span>
                                            <span className="act-dropdown__value">
                                                $425.99
                                            </span>
                                        </div>
                                    </div>
                                    <div className="act-dropdown__checkout">
                                        <a
                                            href="./checkout.html"
                                            className="btn btn--primary btn--rounded act-dropdown__checkout-btn"
                                        >
                                            Check Out All
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-act__user">
                        <img
                            src="./assets/img/avt-face.jpg"
                            alt=""
                            className="top-act__avatar"
                        />
                        {/* Dropdown */}
                        <div className="act-dropdown top-act__dropdown">
                            <div className="act-dropdown__inner user-menu">
                                <img
                                    src="./assets/icons/arrow-up.png"
                                    alt=""
                                    className="act-dropdown__arrow top-act__arrow"
                                />
                                <div className="user-menu__top">
                                    <img
                                        src="./assets/img/avt-face.jpg"
                                        alt=""
                                        className="user-menu__avatar"
                                    />
                                    <div>
                                        <p className="user-menu__name">
                                            Nguyễn Văn Nhật
                                        </p>
                                        <p>@Nhattimo</p>
                                    </div>
                                </div>
                                <ul className="user-menu__list">
                                    <li>
                                        <a
                                            href="./profile.html"
                                            className="user-menu__link"
                                        >
                                            <img
                                                src="./assets/icons/user.svg"
                                                alt=""
                                                className="icon user-menu__icon"
                                            />
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="./favorite.html"
                                            className="user-menu__link"
                                        >
                                            <img
                                                src="./assets/icons/heart.svg"
                                                alt=""
                                                className="icon user-menu__icon"
                                            />
                                            Favorite List
                                        </a>
                                    </li>
                                    <li className="user-menu__separate">
                                        <a
                                            href="#!"
                                            className="user-menu__link"
                                        >
                                            <img
                                                src="./assets/icons/setting.svg"
                                                alt=""
                                                className="icon user-menu__icon"
                                            />
                                            Setting
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#!"
                                            className="user-menu__link"
                                            id="switch-theme-btn"
                                        >
                                            <img
                                                src="./assets/icons/sun.svg"
                                                alt=""
                                                className="icon user-menu__icon"
                                            />
                                            <span>Dark mode</span>
                                        </a>
                                    </li>
                                    <li className="user-menu__separate">
                                        <a
                                            href="/admin"
                                            className="user-menu__link"
                                            onClick={handleLogout}
                                        >
                                            <img
                                                src="./assets/icons/logout.svg"
                                                alt=""
                                                className="icon user-menu__icon"
                                            />
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHeader;
