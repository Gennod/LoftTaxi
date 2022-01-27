import { Outlet } from "react-router-dom";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import Header from "./components/Header/Header";

// const ProtectedRoute = (props) => (props.isLoggedIn ? <Outlet /> : <Login />);
const ProtectedRoute = ({isLoggedIn}) => {
    if (isLoggedIn === true) {
        return (
            <>
                <Header />
                <Outlet />
            </>
        )
    } else {
        return (
            <Login />
        )
    }
}

const mapStateToProps = function (state) {
    return {
        isLoggedIn: state.auth.isLoggedIn,
    };
};

export default connect(mapStateToProps)(ProtectedRoute);
