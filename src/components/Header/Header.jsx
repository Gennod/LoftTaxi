import React, { Component } from "react";
import PropTypes from 'prop-types';

import Login from "../Login/Login";
import Registration from "../Registration/Registration";

import logo from "../../assets/img/loft-start-logo.svg";

import "./Header.scss";

Registration.propTypes = {
  setCurrentPage: PropTypes.func.isRequired
}

class Header extends Component {
  state = {
    currentPage: "login"
  }



  pagesList = () => {
    return {
      login: <Login setCurrentPage={this.setCurrentPage}/>,
      registration: <Registration setCurrentPage={this.setCurrentPage} />
    }
  }

  setCurrentPage = (page) => {
    if (page === "map") {
      this.props.setCurrentPage("map");
    } else {
      this.setState({ currentPage: page });
    }

  }

  render() {
    return (
      <div className="header">
        <div className="header__left">
          <img width="196" height="228" src={logo} alt="loft-start-logo" />
        </div>
        <div  className="header__right">
          <div className="header__right-sub"></div>
          <div className="header__form-wrapper">
            {this.pagesList()[this.state.currentPage]}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;