import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import LoginContext from "./LoginContext";

import "./Login.scss";

const Login = () => {
    const login = useContext(LoginContext);

    let email = "";
    let pass = "";

    const onLogin = (e, page) => {
        switch (e.target.id) {
            case "email":
                email = e.target.value;
                break;
            case "password":
                pass = e.target.value;
                break;
        }

        login(page, email, pass);
    };

    return (
        <div className="login">
            <h2 className="login__title">Войти</h2>
            <div className="login__inputs">
                <label className="login__label" htmlFor="email">
                    Email
                </label>
                <input
                    onChange={(e) => onLogin(e)}
                    className="login__input"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Введите ваш email"
                />
                <label className="login__label" htmlFor="password">
                    Password
                </label>
                <input
                    onChange={(e) => onLogin(e)}
                    className="login__input"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="*********"
                />
            </div>
            <a href="/" className="login__forgot">
                Забыли пароль?
            </a>
            <NavLink
                to="/map"
                className="login__button"
            >
                Войти
            </NavLink>
            <div className="login__new">
                Новый пользователь?{" "}
                <NavLink
                    to="/registration"
                    className="login__new-btn"
                >
                    Регистрация
                </NavLink>
            </div>
        </div>
    );
};

export default Login;
