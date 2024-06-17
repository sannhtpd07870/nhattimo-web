import { Link } from "react-router-dom";
import "../../../assets/css/main.css";
import AuthenticatedActions from "./components/AuthenticatedActions";
import AnonymousActions from "./components/AnonymousActions";
import MoreButton from "./components/MoreButton";
import Logo from "./components/Logo";
import Navbar from "./components/NavBar";

let user = {
    email: "user@gmail.com",
    password: "123",
    username: "user1",
};

function Header() {
    return (
        <div>
            <div className="container">
                <div className="top-bar">
                    <MoreButton />
                    <Logo />
                    <Navbar />
                    <div
                        className="navbar__overlay js-toggle"
                        toggle-target="#navbar"
                    />

                    {/* Actions */}
                    {user ? <AuthenticatedActions /> : <AnonymousActions />}
                    {/* End Actions */}
                </div>
            </div>
            header
            <nav>
                <Link to={"/edit-role"}>EDIT ROLE</Link>
                {/* Nếu chưa đăng nhập thì hiện đăng nhập, đăng ký ngược lại hiện đăng xuất */}
                {user ? (
                    <div>
                        <Link to={"/login"}>login</Link>
                        <Link to={"/register"}>register</Link>
                    </div>
                ) : (
                    <Link to={"/logout"}>logout</Link>
                )}
            </nav>
        </div>
    );
}

export default Header;
