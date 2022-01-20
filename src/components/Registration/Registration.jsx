import { Component } from "react";
import { Link } from "react-router-dom";
import { serverReg } from "../../api";

import logo from "../../assets/img/loft-start-logo.svg";

import "./Registration.scss";

class Registration extends Component {
    onReg = async (e) => {
        e.preventDefault();

        let success = await serverReg(
            "test@test.com",
            "123123",
            "NAME",
            "SURNAME"
        );

        console.log(success);
    };

    render() {
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
                            <form
                                onSubmit={(e) => this.onReg(e)}
                                className="registration__inputs"
                            >
                                <label
                                    className="registration__label"
                                    htmlFor="email"
                                >
                                    Email*
                                </label>
                                <input
                                    className="registration__input"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Введите ваш email"
                                />
                                <label
                                    className="registration__label"
                                    htmlFor="name"
                                >
                                    Ваше имя*
                                </label>
                                <input
                                    className="registration__input"
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Иван Бледнов"
                                />
                                <label
                                    className="registration__label"
                                    htmlFor="password"
                                >
                                    Придумайте пароль*
                                </label>
                                <input
                                    className="registration__input"
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="*********"
                                />
                                <button
                                    type="submit"
                                    className="registration__button"
                                >
                                    Зарегистрироваться
                                </button>
                            </form>
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
    }
}

export default Registration;
