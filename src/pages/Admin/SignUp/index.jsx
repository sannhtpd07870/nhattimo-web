import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "confirmPassword":
                setConfirmPassword(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Thực hiện đăng ký");
        if (password !== confirmPassword) {
            setErrors({ confirmPassword: "Passwords do not match." });
            return;
        }
        console.log("Kiểm tra khớp pass");
        const formData = { name, email, password, confirmPassword };

        try {
            console.log("Try");
            const response = await fetch(
                "http://localhost:12345/api/Account/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );
            console.log("Try 1");

            if (response.ok) {
                console.log("Try response.ok");

                navigate("/admin"); // Chuyển hướng đến trang đăng nhập admin
            } else {
                const errorData = await response.json();
                setErrors(errorData.errors || {}); // Xử lý và hiển thị các lỗi từ phản hồi API nếu đăng ký không thành công
            }
        } catch (error) {
            console.log("catch");

            console.error("Error during sign up:", error);
            setErrors({
                general: "An error occurred. Please try again later.",
            });
        }
    };

    return (
        <main className="auth">
            {/* Auth intro */}
            <div className="auth__intro">
                {/* Logo */}
                <a href="/" className="logo auth__intro-logo d-none d-md-flex">
                    <img
                        src="./assets/icons/logo.svg"
                        alt="Grocery Mart"
                        className="logo__img"
                    />
                    <h1 className="logo__title">grocerymart</h1>
                </a>
                <img
                    src="./assets/img/auth/intro.svg"
                    alt=""
                    className="auth__intro-img"
                />
                <p className="auth__intro-text">
                    The best of luxury brand values, high quality products, and
                    innovative services
                </p>
                <button
                    className="auth__intro-next d-none d-md-block js-toggle"
                    toggle-target="#auth__content"
                >
                    <img src="./assets/img/auth/intro-arrow.svg" alt="" />
                </button>
            </div>

            {/* Auth content */}
            <div id="auth__content" className="auth__content hide">
                <div className="auth__content-inner">
                    {/* Logo */}
                    <a href="/" className="logo">
                        <img
                            src="./assets/icons/logo.svg"
                            alt="Grocery Mart"
                            className="logo__img"
                        />
                        <h2 className="logo__title">grocerymart</h2>
                    </a>
                    <h1 className="auth__heading">Sign Up</h1>
                    <p className="auth__desc">
                        Let’s create your account and Shop like a pro and save
                        money.
                    </p>
                    <form onSubmit={handleSubmit} className="form auth__form">
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="form__input"
                                    autoFocus
                                    required
                                    value={name}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="form__input"
                                    required
                                    value={email}
                                    onChange={handleInputChange}
                                />
                                <img
                                    src="./assets/img/auth/message.svg"
                                    alt=""
                                    className="form__input-icon"
                                />
                                {errors.email && (
                                    <img
                                        src="./assets/icons/form-error.svg"
                                        alt=""
                                        className="form__input-icon-error"
                                    />
                                )}
                            </div>
                            {errors.email && (
                                <p className="form__error">{errors.email}</p>
                            )}
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
                                {errors.password && (
                                    <img
                                        src="./assets/icons/form-error.svg"
                                        alt=""
                                        className="form__input-icon-error"
                                    />
                                )}
                            </div>
                            {errors.password && (
                                <p className="form__error">{errors.password}</p>
                            )}
                        </div>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    className="form__input"
                                    required
                                    minLength="6"
                                    value={confirmPassword}
                                    onChange={handleInputChange}
                                />
                                <img
                                    src="./assets/img/auth/pass.svg"
                                    alt=""
                                    className="form__input-icon"
                                />
                                {errors.confirmPassword && (
                                    <img
                                        src="./assets/icons/form-error.svg"
                                        alt=""
                                        className="form__input-icon-error"
                                    />
                                )}
                            </div>
                            {errors.confirmPassword && (
                                <p className="form__error">
                                    {errors.confirmPassword}
                                </p>
                            )}
                        </div>
                        <div className="form__group form__group--inline">
                            <label className="form__checkbox">
                                <input
                                    type="checkbox"
                                    name="terms"
                                    id="terms"
                                    className="form__checkbox-input d-none"
                                />
                                <span className="form__checkbox-label">
                                    I agree to the terms and conditions
                                </span>
                            </label>
                        </div>
                        <div className="form__group auth__btn-group">
                            <button
                                type="submit"
                                className="btn btn--primary auth__btn form__submit-btn"
                            >
                                Sign Up
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
                        You have an account yet?
                        <a href="/admin" className="auth__link auth__text-link">
                            Sign In
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default SignUp;
