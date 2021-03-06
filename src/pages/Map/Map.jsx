import { useRef, useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";

import { getAddress } from "../../actions/actGetAddress";
import { getRoutes } from "../../actions/actGetRoutes";
import { setMap } from "../../actions/actSetMap";

import { drawRoute } from "../../drawRoute";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import SelectSearch, { fuzzySearch } from "react-select-search";

import "./Map.scss";
import "mapbox-gl/dist/mapbox-gl.css";

import Loader from "../../components/Loader/Loader";

mapboxgl.accessToken =
    "pk.eyJ1IjoiZ2Vubm9kIiwiYSI6ImNreDdzd2N6NDJ5YWcybmx5N21pY2xrNXAifQ.SOKO1q5UlOhYCDEs2DFtPQ";

const Map = ({
    isCardConnectedFromStore,
    routesFromStore,
    addressesFromStore,
}) => {
    const dispatch = useDispatch();
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(30.31413);
    const [lat, setLat] = useState(59.93863);
    const [zoom, setZoom] = useState(11);
    const [toDisabled, setToDisabled] = useState(true);
    const [toAdresses, setToAdresses] = useState([{ name: "", value: "" }]);
    const [isCardConnected, setIsCardConnected] = useState(false);
    const [isMapLoaded, setIsMapLoaded] = useState(false);

    useEffect(() => {
        let isMounted = true;

        if (map.current) {
            return;
        }
        if (isCardConnectedFromStore) {
            setIsCardConnected(true);
        }

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
            if (routesFromStore) {
                const coordinates = routesFromStore;
                drawRoute(map.current, coordinates);
            }
            dispatch(getAddress());
            dispatch(setMap("true"));
        });

        return () => {
            isMounted = false;
        };
    });

    const handleSearchChange = (evt) => {
        let newAddresses = addressesFromStore.filter(
            (address) => address.name !== evt
        );

        setToAdresses(newAddresses);
        setToDisabled(false);
    };

    const handleRoutes = (evt) => {
        evt.preventDefault();

        let fromValue = evt.target[0].value,
            toValue = evt.target[1].value;

        dispatch(getRoutes(fromValue, toValue, map.current));
    };

    console.log(addressesFromStore);

    return (
        <div className="map">
            {addressesFromStore ? null : <Loader />}
            <div ref={mapContainer} className="map__map">
                <form onSubmit={handleRoutes} className="map__order">
                    {addressesFromStore ? (
                        <SelectSearch
                            options={
                                addressesFromStore ? addressesFromStore : []
                            }
                            search
                            filterOptions={fuzzySearch}
                            emptyMessage="???? ??????????????"
                            placeholder="????????????"
                            onChange={handleSearchChange}
                            disabled={isCardConnected ? false : true}
                        />
                    ) : null}
                    {addressesFromStore ? (
                        <SelectSearch
                            options={toAdresses}
                            search
                            filterOptions={fuzzySearch}
                            emptyMessage="???? ??????????????"
                            placeholder="????????"
                            disabled={toDisabled ? true : false}
                        />
                    ) : null}
                    {isCardConnected
                        ? null
                        : "?????????????? ???????????? ?????????? ???? ???????????????? ??????????????!"}

                    <button
                        className="map__button"
                        disabled={toDisabled ? true : false}
                    >
                        ????????????????
                    </button>
                </form>
            </div>
        </div>
    );
};

export default connect((state) => ({
    isCardConnectedFromStore: state.getCard.isCardConnected,
    routesFromStore: state.getRoutes.routes,
    addressesFromStore: state.getAddress.addresses,
    isMapLoadedFromStore: state.setMap.isMapLoaded,
    activeLinkFromStore: state.changeClass.activeLink,
}))(Map);
