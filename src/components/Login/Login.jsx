import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authenticate } from "../../actions";

import "./Login.scss";

class Login extends Component {
<<<<<<< HEAD
=======

>>>>>>> 7a628894d1dc1ad3f23abbf28a8ce84a71e848bb
    onLogin = (e) => {
        e.preventDefault();

        let { email, password } = e.target;

        this.props.authenticate(email.value, password.value);
    };

    onForgotBtnClick = (e) => {
        e.preventDefault();
        const elem = document.querySelector(".login__help");

        elem.classList.toggle("login__help--hidden");
    }

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
<<<<<<< HEAD
                    <button onClick={(e) => this.onForgotBtnClick(e)} href="/" className="login__forgot">
                    Забыли пароль?
                    </button>
                    <div className="login__help login__help--hidden">
                        <b>email:</b> <span>test@test.com</span> <b>password:</b><span>123123</span>
                    </div>
=======
                    <a href="/" className="login__forgot">
                        Забыли пароль?
                    </a>
>>>>>>> 7a628894d1dc1ad3f23abbf28a8ce84a71e848bb
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
    null,
    { authenticate }
)(Login);
