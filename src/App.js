import { Component } from "react";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import LoginContext from "./components/Login/LoginContext";

import PropTypes from "prop-types";

import "./App.scss";

Map.propTypes = {
    setCurrentPage: PropTypes.func.isRequired,
};

class App extends Component {
    state = {
        currentPage: "header",
        isLoggedIn: false,
    };

    login = (page = "header", email, password) => {
        if (email === "example@mail.ru" && password === "123" && page !== "header") {
            this.setState({
                isLoggedIn: true,
            });
            console.log('hello')
            this.setCurrentPage(page);
        }
    };

    logout = () => {
        this.setState({
            isLoggedIn: false,
        });
    };

    pagesList = () => {
        return {
            map: <Map setCurrentPage={this.setCurrentPage} />,
            header: (
                <LoginContext.Provider value={this.login}>
                    <Header />
                </LoginContext.Provider>
            ),
        };
    };

    setCurrentPage = (page) => {
        this.setState({ currentPage: page });
    };

    render() {
        return (
            <div className="main">
                {this.pagesList()[this.state.currentPage]}
            </div>
        );
    }
}

export default App;
