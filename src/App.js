import { Component } from "react";
import { connect } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import store from "./store";

import Map from "./pages/Map/Map";
import Profile from "./pages/Profile/Profile";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";

import "./App.scss";
import ProtectedRoute from "./ProtectedRoute";

class App extends Component {

    render() {
        return (
            <div className="main">
                <Routes>
                    <Route path="/" element={<ProtectedRoute />}>
                        <Route path="/map" element={<Map />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                    <Route path="/registration" element={<Registration />} />
                </Routes>
            </div>
        );
    }
}

export default App;
