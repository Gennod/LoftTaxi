import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GET_INPUT, LOG_IN } from "../../actions";
import { Input } from "../Input/Input";


const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Please provide a valid password")
    .max(16),
});

export default function LoginForm() {
    const dispatch = useDispatch();
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
        onSubmit(values) {
            dispatch({
                type: GET_INPUT,
                payload: {
                    email: values.email,
                    password: values.password,
                },
            });
            dispatch(LOG_IN(values.email, values.password, navigate));
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
                labelText="Password:"
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
            <button type="submit" className="login__button">
                Войти
            </button>
        </form>
    );
}
