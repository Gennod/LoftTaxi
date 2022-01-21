import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import logoSecond from "../../assets/img/loft-logo.svg";

import Cards from "react-credit-cards";

import { LOG_OUT } from "../../types";

import "react-credit-cards/es/styles-compiled.css";
import "./Profile.scss";

const Profile = () => {
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");
    const [focus, setFocus] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut = (e) => {
        e.preventDefault();

        dispatch({ type: LOG_OUT });
        navigate("/");
    };

    const onNumInput = (e) => {
        let cardCode = e.target.value.replace(/[^\d]/g, "").substring(0, 16);
        cardCode = cardCode !== "" ? cardCode.match(/.{1,4}/g).join(" ") : "";
        e.target.value = cardCode;

        setNumber(e.target.value);
    };

    return (
        <div className="map">
            <div className="map__header">
                <div className="map__logo">
                    <img src={logoSecond} alt="logo" />
                </div>
                <ul className="map__menu">
                    <li className="map__item">
                        <Link to="/map" className="map__link map__link--active">
                            Карта
                        </Link>
                    </li>
                    <li className="map__item">
                        <Link to="/profile" className="map__link">
                            Профиль
                        </Link>
                    </li>
                    <li className="map__item">
                        <button onClick={logOut} className="map__link">
                            Выйти
                        </button>
                    </li>
                </ul>
            </div>
            <div className="map__map">
                <div className="profile">
                    <h2 className="profile__title">Профиль</h2>
                    <p className="profile__subtitle">
                        Введите платежные данные
                    </p>
                    <form className="profile__form">
                        <div className="profile__about-left">
                            <label className="profile__label" htmlFor="owner">
                                Имя владельца
                            </label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                onFocus={(e) => setFocus(e.target.name)}
                                className="profile__input"
                                id="owner"
                                type="text"
                                name="text"
                                placeholder="Иван Бледнов"
                            />
                            <label className="profile__label" htmlFor="num">
                                Номер карты
                            </label>
                            <input
                                onChange={(e) => onNumInput(e)}
                                value={number}
                                onFocus={(e) => setFocus(e.target.name)}
                                className="profile__input"
                                id="num"
                                type="text"
                                name="num"
                                placeholder="0000 0000 0000 0000"
                            />
                        </div>
                        <Cards
                            number={number}
                            name={name}
                            expiry={expiry}
                            cvc={cvc}
                            focused={focus}
                        />
                        <div className="profile__about-right">
                            <label className="profile__label" htmlFor="date">
                                MM/YY
                            </label>
                            <input
                                onChange={(e) => setExpiry(e.target.value)}
                                value={expiry}
                                onFocus={(e) => setFocus(e.target.name)}
                                className="profile__input"
                                id="date"
                                type="text"
                                name="date"
                                placeholder="00/00"
                            />
                            <label className="profile__label" htmlFor="cvc">
                                CVC
                            </label>
                            <input
                                onChange={(e) => setCvc(e.target.value)}
                                value={cvc}
                                onFocus={(e) => setFocus(e.target.name)}
                                className="profile__input"
                                id="cvc"
                                type="text"
                                name="cvc"
                                placeholder="000"
                            />
                        </div>
                        <button type="submit" className="profile__button">
                            Сохранить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
