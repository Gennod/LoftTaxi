import { useState } from "react";

import Cards from "react-credit-cards";

import "react-credit-cards/es/styles-compiled.css";
import "./Profile.scss";

const Profile = () => {
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");
    const [focus, setFocus] = useState("");

    const onNumInput = (e) => {
        let cardCode = e.target.value.replace(/[^\d]/g, '').substring(0,16);
        cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
        e.target.value = cardCode;

        setNumber(e.target.value);
    }

    return (
        <div className="profile">
            <h2 className="profile__title">Профиль</h2>
            <p className="profile__subtitle">Введите платежные данные</p>
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
            </form>
            <Cards 
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focus}
            />
        </div>
    );
};

export default Profile;
