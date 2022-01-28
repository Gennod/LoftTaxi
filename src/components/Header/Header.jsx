import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import logoSecond from "../../assets/img/loft-logo.svg";

import { LOG_OUT } from "../../actions/actLogOut";
import { CHANGE_CLASS } from "../../actions/actChangeClass";

import { connect } from "react-redux";

import "./Header.scss";

const Header = ({ activeLink }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut = (e) => {
        e.preventDefault();

        dispatch(LOG_OUT());
        navigate("/");
    };

    const handleLinkClick = (evt) => {
        const elemId= evt.currentTarget.id;

        if (elemId === "mapLink") {
            dispatch(CHANGE_CLASS("map"));
        } else {
            dispatch(CHANGE_CLASS("profile"));
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
                    <button onClick={logOut} className="map__link">
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
    };
};

export default connect(headerStateToProps)(Header);
