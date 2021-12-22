import { Component } from "react";
import logo from "./assets/img/loft-start-logo.svg";
import logoSecond from "./assets/img/loft-logo.svg";
import "./App.scss";
import "./components/Map/Map.scss";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Map from "./components/Map/Map";
import Profile from "./components/Profile/Profile";

class App extends Component {

  state = {
    currentPage: "login"
  }

  pagesList = () => {
    return {
      login: <Login setCurrentPage={this.setCurrentPage}/>,
      registration: <Registration setCurrentPage={this.setCurrentPage}/>,
      map: <Map setCurrentPage={this.setCurrentPage}/>,
      profile: <Profile setCurrentPage={this.setCurrentPage}/>
    }
  }

  setCurrentPage = (page) => {
    this.setState({currentPage: page})
  }

  changeStyle = (btn) => {
    const btns = document.querySelectorAll(".map__link");

    btns.forEach(button => button.classList.remove("map__link--active"));

    btn.classList.add('map__link--active');
}

  render() {

    if (this.state.currentPage === "map" || this.state.currentPage === "profile") {
      return (
        <>
          <div className="map">
            <div className="map__header">
                <div className="map__logo">
                    <img src={logoSecond} alt="logo" />
                </div>
                <ul className="map__menu">
                    <li className="map__item">
                        <button onClick={(e) => {this.changeStyle(e.currentTarget);this.setCurrentPage("map")}} className="map__link map__link--active" type="button">
                            Карта
                        </button>
                    </li>
                    <li className="map__item">
                        <button onClick={(e) => {this.changeStyle(e.currentTarget);this.setCurrentPage("profile")}} className="map__link" type="button">
                            Профиль
                        </button>
                    </li>
                    <li className="map__item">
                        <button onClick={(e) => {this.changeStyle(e.currentTarget);this.setCurrentPage("login")}} className="map__link" type="button">
                            Выйти
                        </button>
                    </li>
                </ul>
            </div>
            {this.pagesList()[this.state.currentPage]}
        </div>
        </>
      )
    } else {
        return (
          <div className="start">
            <div className="start__left">
              <img width="196" height="228" src={ logo } alt="loft-start-logo" />
            </div>
            <div className="start__right">
              <div className="start__right-sub"></div>
              <div className="start__form-wrapper">
                {this.pagesList()[this.state.currentPage]}
              </div>
            </div>
          </div>
        );
    }
  }
}

export default App;
