import React, { Component } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import Profile from "../Profile/Profile";

import logoSecond from "../../assets/img/loft-logo.svg";

import "./Map.scss";

class Map extends Component {
    ref = React.createRef();

    componentDidMount() {
        const elem = this.ref.current;
        console.log(elem);
    }

    render() {
        return (
            <div className="map">
                <div className="map__header">
                    <div className="map__logo">
                        <img src={logoSecond} alt="logo" />
                    </div>
                    <ul className="map__menu">
                        <li className="map__item">
                            <NavLink
                                to="/map"
                                className="map__link map__link--active"
                            >
                                Карта
                            </NavLink>
                        </li>
                        <li className="map__item">
                            <NavLink
                                to="/map/profile"
                                className="map__link"
                            >
                                Профиль
                            </NavLink>
                        </li>
                        <li className="map__item">
                            <NavLink
                                to="/login"
                                className="map__link"
                            >
                                Выйти
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="map__map">
                    <iframe
                        ref={this.ref}
                        className="map__litmap"
                        width="100%"
                        height="100%"
                        src="https://api.mapbox.com/styles/v1/gennod/ckx7sz23b173p15nqwbwkckpb.html?title=false&access_token=pk.eyJ1IjoiZ2Vubm9kIiwiYSI6ImNreDdzd2N6NDJ5YWcybmx5N21pY2xrNXAifQ.SOKO1q5UlOhYCDEs2DFtPQ&zoomwheel=true#10.77/51.7789/55.1494"
                        title="Navigation"
                    ></iframe>
                    <div className="map__order"></div>
                    <Routes>
                        <Route path="/profile" element={<Profile />}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default Map;
