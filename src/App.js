import { Component } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Map from "./components/Map/Map";

import "./App.scss";

class App extends Component {

    render() {
        return (
            <div className="main">
                <Routes>
                    <Route path="/map/*" element={<Map />}/>
                    <Route path="/*" element={<Home />}/>
                </Routes>
            </div>
        );  
    }
}

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);