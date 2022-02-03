import { Link } from "react-router-dom";

import RegistrationForm from "../RegistrationForm/RegistrationForm";

import logo from "../../assets/img/loft-start-logo.svg";

import "./Registration.scss";

const Registration = () => {
    return (
        <div className="home">
            <div className="home__left">
                <img
                    width="196"
                    height="228"
                    src={logo}
                    alt="loft-start-logo"
                />
            </div>
            <div className="home__right">
                <div className="home__right-sub"></div>
                <div className="home__form-wrapper">
                    <div className="registration">
                        <h2 className="registration__title">Регистрация</h2>
                        <RegistrationForm />
                        <div className="registration__new">
                            Уже зарегистрированы?{" "}
                            <Link to="/" className="login__new-btn">
                                Войти
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
