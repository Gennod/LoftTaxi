import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, connect } from "react-redux";

import { getInput } from "../../actions/actGetInput";
import { reg } from "../../actions/actGetReg";
import { fetchLogIN } from "../../actions/actLogIn";

import { Input } from "../Input/Input";
import Loader from "../Loader/Loader";
import Success from "../Success/Success";

const validationSchema = Yup.object({
    email: Yup.string().email("Не правильный email адрес!").required("Это поле обязательное!"),
    password: Yup.string()
        .required("Это поле обязательное!")
        .max(16, "Слишком большой пароль!")
        .min(6, "Слишком маленький пароль!"),
    name: Yup.string()
        .min(2, "Слишком маленькое имя!")
        .max(50, "Слишком большое имя!")
        .required("Это поле обязательное!"),
});

function RegistrationForm({ isLoaded }) {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    let navigate = useNavigate();

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            email: "",
            password: "",
            name: "",
        },
        validationSchema,
        onSubmit({ email, password }) {
            setIsLoading(true);
            setTimeout(() => {
                dispatch(reg(email, password, "NAME", "SURNAME", navigate));
                dispatch(getInput(email, password));
            }, 1000);
            setTimeout(() => {
                dispatch(fetchLogIN());
            }, 3000);
        },
    });
    return (
        <form onSubmit={handleSubmit} className="registration__inputs">
            <Input
                className="registration__input"
                id="email"
                type="email"
                name="email"
                placeholder="Введите ваш email"
                labelText="Email*"
                labelClassName="registration__label"
                onChange={handleChange}
                values={values.email}
            />
            {errors.email ? errors.email : null}
            <Input
                className="registration__input"
                id="name"
                type="text"
                name="name"
                placeholder="Иван Бледнов"
                labelText="Ваше имя*"
                labelClassName="registration__label"
                onChange={handleChange}
                values={values.name}
            />
            {errors.name ? errors.name : null}
            <Input
                className="registration__input"
                id="password"
                type="password"
                name="password"
                placeholder="******"
                labelText="Придумайте пароль*"
                labelClassName="registration__label"
                onChange={handleChange}
                values={values.password}
            />
            {errors.password ? errors.password : null}
            {isLoaded ? <Success /> : isLoading ? <Loader /> : null}
            <button
                disabled={isLoading ? true : false}
                type="submit"
                className="registration__button"
            >
                Зарегистрироваться
            </button>
        </form>
    );
}

export default connect((state) => ({
    isLoaded: state.getReg.isLoaded,
}))(RegistrationForm);
