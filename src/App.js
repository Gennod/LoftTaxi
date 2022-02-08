
import { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import "./App.scss";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./components/Login/Login"
import Registration from "./components/Registration/Registration";

class App extends Component {

    render() {
        return (
            <div className="main">
                <Routes>
                    <Route path="*" element={<ProtectedRoute />}>
                        <Route
                            path="*"
                            element={<Navigate to="login" />}
                        />
                        <Route
                            path="login"
                            element={<Login />}
                        />
                        <Route path="registration" element={<Registration />} />
                    </Route>
                </Routes>
            </div>
        );
    }
}

export default connect(
    (state) => ({addressesFromStore: state.getAddress.addresses})
)(App);
