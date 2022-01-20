import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import store from "../../store";

import logo from "../../assets/img/loft-start-logo.svg";

import "./Login.scss";

import { getAuth } from "../../actions/getAuth";

const Login = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();

        let { email, password } = e.target;

        dispatch(getAuth(email.value, password.value, navigate));
    };

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
                        <form onSubmit={onLogin} className="login__inputs">
                            <label className="login__label" htmlFor="email">
                                Email
                            </label>
                            <input
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
                                className="login__input"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="*********"
                            />
                            <button href="/" className="login__forgot">
                                Забыли пароль?
                            </button>
                            <button type="submit" className="login__button">
                                Войти
                            </button>
                        </form>
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

export default connect(null)(Login);
