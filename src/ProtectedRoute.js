import { Navigate, Route, Routes, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/Header/Header";
import Profile from "./pages/Profile/Profile";
import Map from "./pages/Map/Map";
import Loader from "./components/Loader/Loader";

const ProtectedRoute = ({isLoggedIn, addressesFromStore, isMapLoadedFromStore}) => {
    console.log(isMapLoadedFromStore);
    if (isLoggedIn) {
        return (
            <>
                { addressesFromStore || isMapLoadedFromStore ? null : <Loader  /> }
                <Header />
                <Routes>
                        <Route
                            path="*"
                            element={<Navigate to="/map" />}
                        />
                        <Route
                            path="map"
                            element={<Map />}
                        />
                        <Route path="/profile" element={<Profile />} />
                </Routes>
            </>
        )
    } else {
        return <Outlet />
    }
}

const mapStateToProps = function (state) {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        addressesFromStore: state.getAddress.addresses,
        isMapLoadedFromStore: state.setMap.isMapLoaded,
    };
};

export default connect(mapStateToProps)(ProtectedRoute);
