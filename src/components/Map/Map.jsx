import logo from "../../assets/img/loft-logo.svg";
import "./Map.scss";

const Map = (props) => {

    const changeStyle = (btn) => {
        const btns = document.querySelectorAll(".map__link");

        btns.forEach(button => button.classList.remove("map__link--active"));

        btn.classList.add('map__link--active');
    }

    return (
        <div className="map__map">
            <iframe
                className="map__litmap"
                width="100%"
                height="100%"
                src="https://api.mapbox.com/styles/v1/gennod/ckx7sz23b173p15nqwbwkckpb.html?title=false&access_token=pk.eyJ1IjoiZ2Vubm9kIiwiYSI6ImNreDdzd2N6NDJ5YWcybmx5N21pY2xrNXAifQ.SOKO1q5UlOhYCDEs2DFtPQ&zoomwheel=true#10.77/51.7789/55.1494"
                title="Navigation"
            ></iframe>
        </div>
    );
};

export default Map;
