import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
import Profile from "./pages/Profile/Profile";
import Map from "./pages/Map/Map";

// const ProtectedRoute = (props) => (props.isLoggedIn ? <Outlet /> : <Login />);
const ProtectedRoute = ({isLoggedIn}) => {
    if (isLoggedIn) {
        return (
            <>
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
        return (
            <>
                <Routes>
                        <Route
                            path="*"
                            element={<Navigate to="/" />}
                        />
                        <Route
                            path="/"
                            element={<Login />}
                        />
                        <Route path="/registration" element={<Registration />} />
                </Routes>
                
            </>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        isLoggedIn: state.auth.isLoggedIn,
    };
};

export default connect(mapStateToProps)(ProtectedRoute);
