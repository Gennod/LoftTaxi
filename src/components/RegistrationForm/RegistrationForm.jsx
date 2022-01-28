import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { GET_INPUT } from "../../actions/actGetInput";
import { REG } from "../../actions/actGetReg";

import { Input } from "../Input/Input";

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Please provide a valid password").max(16).min(6),
    name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
});

export default function RegistrationForm() {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            email: "",
            password: "",
            name: "",
        },
        validationSchema,
        onSubmit({email, password}) {
            dispatch(
                REG(email, password, "NAME", "SURNAME", navigate)
            );

            dispatch(GET_INPUT(email, password));
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
            <button type="submit" className="registration__button">
                Зарегистрироваться
            </button>
        </form>
    );
}
