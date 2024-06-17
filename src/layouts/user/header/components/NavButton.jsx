import "../../../../assets/css/main.css";
function NavButton({ icon, title, quantity }) {
    return (
        <a href="#!" className="nav-btn d-none d-md-flex">
            <img src={icon} alt="" className="nav-btn__icon icon" />
            <span className="nav-btn__title">{title}</span>
            <span className="nav-btn__qnt">{quantity}</span>
        </a>
    );
}

export default NavButton;
