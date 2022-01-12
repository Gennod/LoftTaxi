import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authenticate, logout } from "../../actions";

import "./Login.scss";

class Login extends Component {

    onLogin = (e) => {
        e.preventDefault();

        let { email, password } = e.target;

        this.props.authenticate(email.value, password.value);
    };

    render() {
        return (
            <div className="login">
                <h2 className="login__title">Войти</h2>
                <form onSubmit={this.onLogin} className="login__inputs">
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
                    <a href="/" className="login__forgot">
                        Забыли пароль?
                    </a>
                    <button
                        type="submit"
                        className="login__button"
                    >
                        Войти
                    </button>
                </form>
                <div className="login__new">
                    Новый пользователь?{" "}
                    <Link
                        to="/registration"
                        className="login__new-btn"
                    >
                        Регистрация
                    </Link>
                </div>
            </div>
        );
    }
};

export default connect(
    (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
    { authenticate, logout }
)(Login);
