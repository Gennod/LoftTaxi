import { Component } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";
import ProtectedRoute from "./ProtectedRoute";

class App extends Component {

    render() {
        return (
            <div className="main">
                <Routes>
                    <Route path="/*" element={<ProtectedRoute />}>
                    </Route>
                </Routes>
            </div>
        );
    }
}

export default App;
