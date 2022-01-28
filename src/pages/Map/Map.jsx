import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { GET_ADDRESS } from "../../actions/actGetAddress";
import { GET_ROUTES } from "../../actions/actGetRoutes";

import { drawRoute } from "../../drawRoute";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import SelectSearch, { fuzzySearch } from "react-select-search";
import { Error } from "../../components/Error/Error";

import "./Map.scss";
import "mapbox-gl/dist/mapbox-gl.css";

import store from "../../store";

mapboxgl.accessToken =
    "pk.eyJ1IjoiZ2Vubm9kIiwiYSI6ImNreDdzd2N6NDJ5YWcybmx5N21pY2xrNXAifQ.SOKO1q5UlOhYCDEs2DFtPQ";

const Map = () => {
    const dispatch = useDispatch();
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(30.31413);
    const [lat, setLat] = useState(59.93863);
    const [zoom, setZoom] = useState(11);
    const [adresses, setAdresses] = useState([]);
    const [toDisabled, setToDisabled] = useState(true);
    const [toAdresses, setToAdresses] = useState([{ name: "", value: "" }]);
    const [isCardConnected, setIsCardConnected] = useState(false);

    dispatch(GET_ADDRESS());

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
        map.current.on("load", () => {
            if (store.getState().getRoutes.routes) {
                const coordinates = store.getState().getRoutes.routes;
                drawRoute(map.current, coordinates);
            }
        });

        if (store.getState().getAddress.addresses) {
            const res = store.getState().getAddress.addresses;

            let arr = res.map((address) => {
                let objAddress = { name: address, value: address };

                return objAddress;
            });

            setAdresses(arr);
        }

        if (store.getState().getCard.isCardConnected) {
            setIsCardConnected(true);
        }

        return () => {
            isMounted = false;
        };
    });

    const handleSearchChange = (evt) => {
        let newAddresses = adresses.filter((address) => address.name !== evt);

        setToAdresses(newAddresses);
        setToDisabled(false);
    };

    const handleRoutes = (evt) => {
        evt.preventDefault();
        let fromValue = evt.target[0].value,
            toValue = evt.target[1].value;

        dispatch(GET_ROUTES(fromValue, toValue));
    };

    const drawRoutes = () => {
        if (store.getState().getRoutes.routes) {
            const coordinates = store.getState().getRoutes.routes;
            drawRoute(map.current, coordinates);
        }
    };

    return (
        <div className="map">
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
                    {isCardConnected ? null : (
                        <Error message="Введите данные карты на странице профиля!" />
                    )}
                    <button
                        className="map__button"
                        disabled={toDisabled ? true : false}
                        onClick={drawRoutes}
                    >
                        Заказать
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Map;
