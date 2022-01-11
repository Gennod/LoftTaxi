import { Component } from "react";
import { Routes, Route } from "react-router";

import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";

import "./App.scss";
import logo from "./assets/img/loft-start-logo.svg";

class App extends Component {
    state = {
        isLoggedIn: false,
    };

    login = (page = "header", email, password) => {
        this.setState({
            isLoggedIn: true,
        });
    };

    logout = () => {
        this.setState({
            isLoggedIn: false,
        });
    };

    render() {
        return (
            <div className="main">
                <div className="header">
                    <div className="header__left">
                        <img width="196" height="228" src={logo} alt="loft-start-logo" />
                    </div>
                    <div  className="header__right">
                        <div className="header__right-sub"></div>
                        <div className="header__form-wrapper">
                            <Routes>
                                <Route exact path="/" element={<Login />}/>
                                <Route exact path="/login" element={<Login />}/>
                                <Route exact path="/registration" element={<Registration />}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
