import { spawn } from "redux-saga/effects";
import handleAuth from "./handleAuth";
import handleCard from "./handleCard";
import handleReg from "./handleReg";
import handleRoutes from "./handleRoutes";
import handleAdressList from "./handleAdressList";

export default function* rootSaga() {
    yield [
        yield spawn(handleAuth),
        yield spawn(handleCard),
        yield spawn(handleReg),
        yield spawn(handleRoutes),
        yield spawn(handleAdressList),
    ];
}
