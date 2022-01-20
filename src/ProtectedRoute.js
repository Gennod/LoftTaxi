import { Outlet } from "react-router-dom";
import Login from "./components/Login/Login";
import { connect } from "react-redux";

const ProtectedRoute = (props) => (props.isLoggedIn ? <Outlet /> : <Login />);

const mapStateToProps = function (state) {
    return {
        isLoggedIn: state.auth.isLoggedIn,
    };
};

export default connect(mapStateToProps)(ProtectedRoute);
