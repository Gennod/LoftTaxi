import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";

import App from "./App";
import Map from "./components/Map/Map";

import "./index.scss";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<App />}/>
                <Route path="/map" element={<Map />}/>
            </Routes>   
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
