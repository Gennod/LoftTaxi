import React from "react";
import { Link } from "react-router-dom";

import LoginForm from "../LoginForm/LoginForm";

import logo from "../../assets/img/loft-start-logo.svg";

import "./Login.scss";

const Login = () => {
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
                    <div className="login">
                        <h2 className="login__title">Войти</h2>
                        <LoginForm />
                        <div className="login__new">
                            Новый пользователь?{" "}
                            <Link to="/registration" className="login__new-btn">
                                Регистрация
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
