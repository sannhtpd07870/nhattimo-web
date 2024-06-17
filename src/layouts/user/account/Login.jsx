// src/layouts/user/account/Login.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../../api/auth";
import "../../../assets/css/main.css"; // Đảm bảo bạn đã cài đặt và cấu hình đúng đường dẫn

const Login = () => {
    const [formData, setFormData] = useState({
        userName: "",
        password: "",
        rememberMe: false,
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(formData);
            setMessage(response.message || "Login successful!");
        } catch (error) {
            setMessage(error.message || "Login failed. Please try again.");
        }
    };

    return (
        <main className="auth">
            <div className="auth__intro d-md-none">
                <img
                    src="./assets/img/auth/intro.svg"
                    alt=""
                    className="auth__intro-img"
                />
                <p className="auth__intro-text">
                    The best of luxury brand values, high quality products, and
                    innovative services
                </p>
            </div>
            <div className="auth__content">
                <div className="auth__content-inner">
                    <Link to="/" className="logo">
                        <img
                            src="./assets/icons/logo.svg"
                            alt="Grocery Mart"
                            className="logo__img"
                        />
                        <h2 className="logo__title">grocerymart</h2>
                    </Link>
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
                                    value={formData.userName}
                                    onChange={handleChange}
                                    placeholder="Username"
                                    className="form__input"
                                    required
                                />
                                <img
                                    src="./assets/img/auth/message.svg"
                                    alt=""
                                    className="form__input-icon"
                                />
                                <img
                                    src="./assets/icons/form-error.svg"
                                    alt=""
                                    className="form__input-icon-error"
                                />
                            </div>
                            <p className="form__error">Username is required</p>
                        </div>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    className="form__input"
                                    required
                                    minLength="6"
                                />
                                <img
                                    src="./assets/img/auth/pass.svg"
                                    alt=""
                                    className="form__input-icon"
                                />
                                <img
                                    src="./assets/icons/form-error.svg"
                                    alt=""
                                    className="form__input-icon-error"
                                />
                            </div>
                            <p className="form__error">
                                Password must be at least 6 characters
                            </p>
                        </div>
                        <div className="form__group form__group--inline">
                            <label className="form__checkbox">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                    className="form__checkbox-input d-none"
                                />
                                <span className="form__checkbox-label">
                                    Remember Me
                                </span>
                            </label>
                            <Link
                                to="/reset-password"
                                className="auth__link form__pull-right"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                        <div className="form__group auth__btn-group">
                            <button className="btn btn--primary auth__btn form__submit-btn">
                                Sign In
                            </button>
                            <button
                                className="btn btn--outline auth__btn bnt--no-margin"
                                type="button"
                            >
                                <img
                                    src="./assets/img/auth/google.svg"
                                    alt=""
                                    className="btn__icon icon"
                                />
                                Sign in with Gmail
                            </button>
                        </div>
                    </form>
                    {message && <p>{message}</p>}
                    <p className="auth__text">
                        Don't have an account yet?
                        <Link
                            to="/sign-up"
                            className="auth__link auth__text-link"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Login;
