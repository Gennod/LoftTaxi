import { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";

import Cards from "react-credit-cards";

import { getCard } from "../../actions/actGetCard";
import { enableRoutes } from "../../actions/actGetRoutes";

import "react-credit-cards/es/styles-compiled.css";
import "./Profile.scss";
import Loader from "../../components/Loader/Loader";
import Success from "../../components/Success/Success";

const Profile = ({ isLoaded, isCardConnectedFromStore }) => {
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [cvc, setCvc] = useState("");
    const [focus, setFocus] = useState("");
    const dispatch = useDispatch();
    const [backspaceFlag, setBackspaceFlag] = useState(false);
    const [isCardConnected, setIsCardConnected] = useState(false);

    const onNumInput = (e) => {
        let cardCode = e.target.value.replace(/[^\d]/g, "").substring(0, 16);
        cardCode = cardCode !== "" ? cardCode.match(/.{1,4}/g).join(" ") : "";
        e.target.value = cardCode;

        setNumber(e.target.value);
    };

    const validateExpiry = (text) => {
        let textTemp = text;
        if (textTemp[0] !== "1" && textTemp[0] !== "0") {
            textTemp = "";
        }
        if (textTemp.length === 2) {
            if (
                parseInt(textTemp.substring(0, 2)) > 12 ||
                parseInt(textTemp.substring(0, 2)) === 0
            ) {
                textTemp = textTemp[0];
            } else if (text.length === 2 && !backspaceFlag) {
                textTemp += "/";
                setBackspaceFlag(true);
            } else if (text.length === 2 && backspaceFlag) {
                textTemp = textTemp[0];
                setBackspaceFlag(false);
            } else {
                textTemp = textTemp[0];
            }
        }
        setExpiry(textTemp);
    };

    const validateName = (name) => {
        name = name.replace(/[^\D+]/g, "");

        setName(name);
    };

    const handleCardAccept = (e) => {
        e.preventDefault();

        setIsCardConnected(true);
    };

    useEffect(() => {
        let isMounted = true;

        if (isCardConnected) {
            dispatch(getCard(number, name, expiry, cvc));
            dispatch(enableRoutes());
            setIsLoading(true);
        }

        return () => {
            isMounted = false;
        };
    });

    return (
        <div className="map">
            <div className="map__map">
                <div className="profile">
                    <h2 className="profile__title">??????????????</h2>
                    <div className="profile__wrapper">
                        {isCardConnectedFromStore ? (
                                    <Success type="profile"/>
                                ) : isLoading ? (
                                    <Loader />
                                ) : null}
                        <p className="profile__subtitle">
                            ?????????????? ?????????????????? ????????????
                        </p>
                        <form onSubmit={handleCardAccept} className="profile__form">

                            <div className="profile__about-left">
                                <label className="profile__label" htmlFor="owner">
                                    ?????? ??????????????????
                                </label>
                                <input
                                    onChange={(e) => validateName(e.target.value)}
                                    value={name}
                                    onFocus={(e) => setFocus(e.target.name)}
                                    className="profile__input"
                                    id="owner"
                                    type="text"
                                    name="text"
                                    placeholder="???????? ??????????????"
                                />
                                <label className="profile__label" htmlFor="num">
                                    ?????????? ??????????
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
                                    MM/YY{" "}
                                </label>
                                <input
                                    onChange={(e) => validateExpiry(e.target.value)}
                                    value={expiry}
                                    onFocus={(e) => setFocus(e.target.name)}
                                    className="profile__input"
                                    id="date"
                                    type="text"
                                    name="date"
                                    placeholder="00/00"
                                    maxLength={5}
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
                                    maxLength={3}
                                />
                            </div>
                            <button
                                disabled={isCardConnectedFromStore ? true : false}
                                type="submit"
                                className="profile__button"
                            >
                                ??????????????????
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect((state) => ({
    isLoaded: state.getCard.isLoaded,
    isCardConnectedFromStore: state.getCard.isCardConnected,
}))(Profile);
