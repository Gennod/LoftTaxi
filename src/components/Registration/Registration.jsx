import { Component } from "react";
import { Link } from "react-router-dom";

import "./Registration.scss";

class Registration extends Component {
    componentDidMount() {}

    render() {
        return (
            <div className="registration">
                <h2 className="registration__title">Регистрация</h2>
                <div className="registration__inputs">
                    <label className="registration__label" htmlFor="email">
                        Email*
                    </label>
                    <input
                        className="registration__input"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Введите ваш email"
                    />
                    <label className="registration__label" htmlFor="name">
                        Ваше имя*
                    </label>
                    <input
                        className="registration__input"
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Иван Бледнов"
                    />
                    <label className="registration__label" htmlFor="password">
                        Придумайте пароль*
                    </label>
                    <input
                        className="registration__input"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="*********"
                    />
                </div>
                <Link
                    to="/map"
                    className="registration__button"
                >
                    Зарегистрироваться
                </Link>
                <div className="registration__new">
                    Уже зарегистрированы?{" "}
                    <Link
                        to="/login"
                        className="login__new-btn"
                    >
                        Войти
                    </Link>
                </div>
            </div>
        );
    }
}

export default Registration;
