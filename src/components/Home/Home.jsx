import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import Login from "../Login/Login";
import Registration from "../Registration/Registration";

import logo from "../../assets/img/loft-start-logo.svg";

import "./Home.scss";

class Home extends Component {

    componentDidMount() {
        if (localStorage.getItem("isLoggedIn") == "true") {
            window.location.href = "/map/map";
        }
    }

    render() {
        return (
            <div className="home">
                <div className="home__left">
                    <img
                        width="196"
                        height="228"
                        src={logo}
                        alt="loft-start-logo"
                    />
                </div>
                <div className="home__right">
                    <div className="home__right-sub"></div>
                    <div className="home__form-wrapper">
                        
                        <Routes>
                            <Route exact path="/" element={<Login />} />
                            <Route
                                exact
                                path="/login"
                                element={<Login />}
                            />
                            <Route
                                exact
                                path="/registration"
                                element={<Registration />}
                            />
                        </Routes>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state) => ({
    isLoggedIn: state.auth.isLoggedIn,
}))(Home);
