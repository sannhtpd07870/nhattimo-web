import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [rememBerMe, setRememBerMe] = useState(false); // State để lưu trạng thái của checkbox

    const handleInputChange = (e) => {
        const { name, value, checked } = e.target;
        switch (name) {
            case "userName":
                setUserName(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "rememBerMe":
                setRememBerMe(checked);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = { userName, password, rememBerMe };

        try {
            const response = await fetch(
                "http://localhost:12345/api/Account/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                const { token } = await response.json();
                localStorage.setItem("token", token); // lưu token vào localStorage bằng localStorage.setItem("token", token)
                console.log("lưu token vào localStorage");
                navigate("/admin/home");
                console.log(localStorage.getItem("token"));
            } else {
                const errorData = await response.json();
                console.log(errorData);
                // Xử lý lỗi từ phản hồi API
            }
        } catch (error) {
            console.error("Error during sign in:", error);
            // Xử lý lỗi khi gọi API đăng nhập
        }
    };

    return (
        <main className="auth">
            {/* Auth content */}
            <div className="auth__content">
                <div className="auth__content-inner">
                    {/* Logo */}
                    <a href="./" className="logo">
                        <img
                            src="./assets/icons/logo.svg"
                            alt="Grocery Mart"
                            className="logo__img"
                        />
                        <h2 className="logo__title">grocerymart</h2>
                    </a>
                    <h1 className="auth__heading">Hello Again!</h1>
                    <p className="auth__desc">
                        Welcome back to sign in. As a returning customer, you
                        have access to your previously saved all information.
                    </p>
                    <form onSubmit={handleSubmit} className="form auth__form">
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="text"
                                    name="userName"
                                    placeholder="Username"
                                    className="form__input"
                                    autoFocus
                                    required
                                    value={userName}
                                    onChange={handleInputChange}
                                />
                                <img
                                    src="./assets/img/auth/message.svg"
                                    alt=""
                                    className="form__input-icon"
                                />
                            </div>
                        </div>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="form__input"
                                    required
                                    minLength="6"
                                    value={password}
                                    onChange={handleInputChange}
                                />
                                <img
                                    src="./assets/img/auth/pass.svg"
                                    alt=""
                                    className="form__input-icon"
                                />
                            </div>
                        </div>
                        <div className="form__group form__group--inline">
                            <label className="form__checkbox">
                                <input
                                    type="checkbox"
                                    name="rememBerMe"
                                    className="form__checkbox-input d-none"
                                    onChange={handleInputChange}
                                    checked={rememBerMe}
                                />
                                <span className="form__checkbox-label">
                                    Remember Me
                                </span>
                            </label>
                            <a
                                href="./reset-password.html"
                                className="auth__link form__pull-right"
                            >
                                Forgot Password?
                            </a>
                        </div>
                        <div className="form__group auth__btn-group">
                            <button className="btn btn--primary auth__btn form__submit-btn">
                                Sign In
                            </button>
                            <button className="btn btn--outline auth__btn bnt--no-margin">
                                <img
                                    src="./assets/img/auth/google.svg"
                                    alt=""
                                    className="btn__icon icon"
                                />
                                Sign in with Gmail
                            </button>
                        </div>
                    </form>
                    <p className="auth__text">
                        Don't have an account yet?{" "}
                        <a
                            href="/admin/sign-up"
                            className="auth__link auth__text-link"
                        >
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default SignIn;
