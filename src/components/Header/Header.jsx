import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import logoSecond from "../../assets/img/loft-logo.svg";

import { logOut as actLogOut } from "../../actions/actLogOut";
import { changeClass } from "../../actions/actChangeClass";
import { setMap } from "../../actions/actSetMap";

import { connect } from "react-redux";

import "./Header.scss";

const Header = ({ activeLink, addressesFromStore }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut = (e) => {
        e.preventDefault();

        dispatch(actLogOut());
        navigate("/");
    };

    const handleLinkClick = (evt) => {
        const elemId= evt.currentTarget.id;

        if (elemId === "mapLink") {
            dispatch(changeClass("map"));
            dispatch(setMap("false"));
        } else {
            dispatch(changeClass("profile"));
        }
    };

    return (
        <div className="map__header">
            <div className="map__logo">
                <img src={logoSecond} alt="logo" />
            </div>
            <ul className="map__menu">
                <li id="mapLink" onClick={handleLinkClick} className="map__item">
                    <Link to="/map" className={`map__link ${activeLink === "map" ? "map__link--active" : ""}`}>
                        Карта
                    </Link>
                </li>
                <li
                    id="profileLink"
                    onClick={handleLinkClick}
                    className="map__item"
                >
                    <Link to="/profile" className={`map__link ${activeLink === "profile" ? "map__link--active" : ""}`}>
                        Профиль
                    </Link>
                </li>
                <li className="map__item">
                    <button disabled={ addressesFromStore ? false : true } onClick={logOut} className="map__link">
                        Выйти
                    </button>
                </li>
            </ul>
        </div>
    );
};

const headerStateToProps = function (state) {
    return {
        activeLink: state.changeClass.activeLink,
        addressesFromStore: state.getAddress.addresses
    };
};

export default connect(headerStateToProps)(Header);
