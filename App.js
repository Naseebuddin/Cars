import React from "react";
import Route from "./src/Navigations/Route";
import { Provider } from "react-redux";
import { myStore } from "./src/redux/store";
export default function App() {
    return (
        <Provider store={myStore}>
        <Route />
        </Provider>
    )
}