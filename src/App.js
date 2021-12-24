import { Component } from "react";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";

import "./App.scss";

class App extends Component {

  state = {
    currentPage: "header"
  }

  pagesList = () => {
    return {
      map: <Map setCurrentPage={this.setCurrentPage} />,
      header: <Header setCurrentPage={this.setCurrentPage} />,
    }
  }

  setCurrentPage = (page) => {
    this.setState({ currentPage: page })
  }

  render() {
    return (
      <div className="main">
        {this.pagesList()[this.state.currentPage]}
      </div>
    );
  }
}

export default App;
