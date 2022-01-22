import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useFormik } from "formik";

import { GET_INPUT, REG } from "../../types";

import { Input } from "../Input/Input";

import logo from "../../assets/img/loft-start-logo.svg";

import "./Registration.scss";


import store from "../../store";

const Registration = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            name: ""
        },
        onSubmit: (values) => {
            dispatch(REG(values.email, values.password, "NAME", "SURNAME", navigate));

            dispatch({type: GET_INPUT, payload: {
                email: values.email,
                password: values.password
            }})

        },
    });

    let inputsData = [
        {
            className: "registration__input",
            id: "email",
            name: "email",
            type: "email",
            placeholder: "Введите ваш email",
            labelText: "Email*",
            labelClassName: "registration__label"
        },
        {
            className: "registration__input",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Иван Бледнов",
            labelText: "Ваше имя*",
            labelClassName: "registration__label"
        },
        {
            className: "registration__input",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "******",
            labelText: "Придумайте пароль*",
            labelClassName: "registration__label"
        },
    ];

    let inputs = inputsData.map(
        ({ className, id, type, name, placeholder, labelText, labelClassName }, idx) => (
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
                    <div className="registration">
                        <h2 className="registration__title">Регистрация</h2>
                        <form onSubmit={formik.handleSubmit} className="registration__inputs">
                            { inputs }
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
};

export default Registration;
