import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, connect } from "react-redux";

import { getInput } from "../../actions/actGetInput";
import { logIn } from "../../actions/actLogIn";

import { Input } from "../Input/Input";
import Loader from "../Loader/Loader";
import { Error } from "../Error/Error";

const validationSchema = Yup.object({
    email: Yup.string()
        .email("Введите правильный email адрес!")
        .required("Это поле обязательное!"),
    password: Yup.string().required("Введите пароль!"),
});

function LoginForm({ isLoggedIn, isLoggedInFailed }) {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    let navigate = useNavigate();

    const handleForgotButtonClick = (evt) => {
        evt.preventDefault();
    };

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit({ email, password }) {
            dispatch(getInput(email, password));
            dispatch(logIn(email, password, navigate));
            if (!isLoggedIn) {
                setIsLoading(true);
            } else {
                setIsLoading(false);
            }
        },
    });
    return (
        <form onSubmit={handleSubmit} className="login__inputs">
            <Input
                className="login__input"
                id="email"
                type="email"
                name="email"
                placeholder="Введите ваш email"
                labelText="Email:"
                labelClassName="login__label"
                onChange={handleChange}
                values={values.email}
                autofocus
            />
            {errors.email ? errors.email : null}
            <Input
                className="login__input"
                id="password"
                type="password"
                name="password"
                placeholder="******"
                labelText="Пароль:"
                labelClassName="login__label"
                onChange={handleChange}
                values={values.password}
            />
            {errors.password ? errors.password : null}
            <button
                onClick={handleForgotButtonClick}
                href="/"
                className="login__forgot"
            >
                Забыли пароль?
            </button>
            <div className="login__status">{isLoading && !isLoggedInFailed ? <Loader /> : isLoggedInFailed ? <Error message={"Неверный email или пароль!"} /> : null}</div>
            <button
                disabled={isLoading && !isLoggedInFailed ? true : false}
                type="submit"
                className="login__button"
            >
                Войти
            </button>
        </form>
    );
}

export default connect((state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    isLoggedInFailed: state.auth.isLoggedInFailed,
}))(LoginForm);
