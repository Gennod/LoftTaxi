import "./Login.scss"

const Login = (props) => {
    return (
        <div className="login">
            <h2 className="login__title">Войти</h2>
            <div className="login__inputs">
                <label className="login__label" htmlFor="email">Email</label>
                <input className="login__input" id="email" type="email" name="email" placeholder="Введите ваш email" />
                <label className="login__label" htmlFor="password">Пароль</label>
                <input className="login__input" id="password" type="password" name="password" placeholder="*********" />
            </div>
            <a href="/" className="login__forgot">Забыли пароль?</a>
            <button onClick={() => props.setCurrentPage("map")} className="login__button" type="submit">Войти</button>
            <div className="login__new">Новый пользователь? <button onClick={() => props.setCurrentPage("registration")} className="login__new-btn" type="submit">Регистрация</button></div>
        </div>
    )
}

export default Login;