import { Component } from "react";

import Profile from "../Profile/Profile";

import logoSecond from "../../assets/img/loft-logo.svg";

import "./Map.scss";


class Map extends Component {
    state = {
        currentPage: null
    }

    setCurrentPage = (page) => {
        this.setState({currentPage: page});
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
                            <button onClick={(e) => {this.setCurrentPage(null)}} className="map__link map__link--active" type="button">
                                Карта
                            </button>
                        </li>
                        <li className="map__item">
                            <button onClick={(e) => {this.setCurrentPage("profile")}} className="map__link" type="button">
                                Профиль
                            </button>
                        </li>
                        <li className="map__item">
                            <button onClick={(e) => {this.props.setCurrentPage("header")}} className="map__link" type="button">
                                Выйти
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="map__map">
                    <iframe
                        className="map__litmap"
                        width="100%"
                        height="100%"
                        src="https://api.mapbox.com/styles/v1/gennod/ckx7sz23b173p15nqwbwkckpb.html?title=false&access_token=pk.eyJ1IjoiZ2Vubm9kIiwiYSI6ImNreDdzd2N6NDJ5YWcybmx5N21pY2xrNXAifQ.SOKO1q5UlOhYCDEs2DFtPQ&zoomwheel=true#10.77/51.7789/55.1494"
                        title="Navigation"
                    ></iframe>
                    <div className="map__order">
                        
                    </div>
                    {this.state.currentPage && <Profile />}
                </div>
            </div>
        );
    }
};

export default Map;
