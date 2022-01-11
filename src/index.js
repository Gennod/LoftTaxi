import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Map from "./components/Map/Map";

import "./index.scss";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route exact path="/*" element={<App />} />
                <Route exact path="/login/*" element={<App />} />
                <Route exact path="/map/*" element={<Map />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
