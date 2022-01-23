import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOG_OUT, GET_ADDRESS, GET_ROUTES } from "../../types";

import { drawRoute } from "../../drawRoute";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import SelectSearch, { fuzzySearch } from "react-select-search";

import logoSecond from "../../assets/img/loft-logo.svg";

import "./Map.scss";
import "mapbox-gl/dist/mapbox-gl.css";

import store from "../../store";

mapboxgl.accessToken =
    "pk.eyJ1IjoiZ2Vubm9kIiwiYSI6ImNreDdzd2N6NDJ5YWcybmx5N21pY2xrNXAifQ.SOKO1q5UlOhYCDEs2DFtPQ";

const Map = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(30.31413);
    const [lat, setLat] = useState(59.93863);
    const [zoom, setZoom] = useState(11);
    const [adresses, setAdresses] = useState(null);
    const [toDisabled, setToDisabled] = useState(true);
    const [toAdresses, setToAdresses] = useState([{ name: "", value: "" }]);
    const [isCardConnected, setIsCardConnected] = useState(false);

    const logOut = (e) => {
        e.preventDefault();

        dispatch({ type: LOG_OUT });
        navigate("/");
    };

    useEffect(() => {
        let isMounted = true;
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom: zoom,
        });
        map.current.on("move", () => {
            if (isMounted) {
                setLng(map.current.getCenter().lng.toFixed(4));
                setLat(map.current.getCenter().lat.toFixed(4));
                setZoom(map.current.getZoom().toFixed(2));
            }
        });

        dispatch(GET_ADDRESS());

        store.subscribe(() => {
            if (store.getState().auth.addresses) {
                const res = store.getState().auth.addresses;

                let arr = res.map((address) => {
                    let objAddress = { name: address, value: address };

                    return objAddress;
                });

                setAdresses(arr);
            }
            if (store.getState().auth.isCardConnected) {
                setIsCardConnected(true);
            }
            if (store.getState().auth.routes) {
                const coordinates = store.getState().auth.routes;
                drawRoute(map.current, coordinates);
            }
        });

        return () => {
            isMounted = false;
        };
    });

    const handleSearchChange = (evt) => {
        let newAddresses = adresses.filter((address) => address.name !== evt);

        setToAdresses(newAddresses);
        setToDisabled(false);
    };

    const handleRoutes = (e) => {
        e.preventDefault();
        let fromValue = e.target[0].value,
            toValue = e.target[1].value;


        dispatch(GET_ROUTES(fromValue, toValue));
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
            <div ref={mapContainer} className="map__map">
                <form onSubmit={handleRoutes} className="map__order">
                    {adresses ? (
                        <SelectSearch
                            options={adresses}
                            search
                            filterOptions={fuzzySearch}
                            emptyMessage="Не найдено"
                            placeholder="Откуда"
                            onChange={handleSearchChange}
                            disabled={isCardConnected ? false : true}
                        />
                    ) : null}
                    {adresses ? (
                        <SelectSearch
                            options={toAdresses}
                            search
                            filterOptions={fuzzySearch}
                            emptyMessage="Не найдено"
                            placeholder="Куда"
                            disabled={toDisabled ? true : false}
                        />
                    ) : null}
                    <button
                        className="map__button"
                        disabled={toDisabled ? true : false}
                    >
                        Заказать
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Map;
