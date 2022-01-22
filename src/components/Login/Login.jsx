import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { useFormik } from "formik";

import { Input } from "../Input/Input";

import { GET_INPUT, LOG_IN } from "../../types";

import logo from "../../assets/img/loft-start-logo.svg";

import "./Login.scss";


const Login = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            dispatch({type: GET_INPUT, payload: {
                email: values.email,
                password: values.password
            }})
            dispatch(LOG_IN(values.email, values.password, navigate));
        },
    });
    
    let inputsData = [
        {
            className: "login__input",
            id: "email",
            name: "email",
            type: "email",
            placeholder: "Введите ваш email",
            labelText: "Email:",
            labelClassName: "login__label",
        },
        {
            className: "login__input",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "******",
            labelText: "Password:",
            labelClassName: "login__label",
        },
    ];

    let inputs = inputsData.map(
        (
            {
                className,
                id,
                type,
                name,
                placeholder,
                labelText,
                labelClassName,
            },
            idx
        ) => (
            <Input
                key={idx}
                className={className}
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                labelText={labelText}
                labelClassName={labelClassName}
                onChange={formik.handleChange}
                values={formik.values}
            />
        )
    );

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
                        <form
                            onSubmit={formik.handleSubmit}
                            className="login__inputs"
                        >
                            {inputs}
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
