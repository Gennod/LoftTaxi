import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOG_OUT } from "../../types";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import logoSecond from "../../assets/img/loft-logo.svg";

import "./Map.scss";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
    "pk.eyJ1IjoiZ2Vubm9kIiwiYSI6ImNreDdzd2N6NDJ5YWcybmx5N21pY2xrNXAifQ.SOKO1q5UlOhYCDEs2DFtPQ";

const Map = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(55.099594);
    const [lat, setLat] = useState(51.776272);
    const [zoom, setZoom] = useState(11);

    const logOut = (e) => {
        e.preventDefault();

        dispatch({ type: LOG_OUT });
        navigate("/");
    };

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom: zoom,
        });
        map.current.on("move", () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

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
            <div ref={mapContainer} className="map__map">
                <div className="map__order"></div>
            </div>
        </div>
    );
};

export default Map;
