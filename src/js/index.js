/*
import store from "../js/store/index";
import { addArticle } from "../js/actions/index";
window.store = store;
window.addArticle = addArticle;
*/
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import configureStore from './store/index';
import App from "./components/App";


const store = configureStore(); // You can also pass in an initialState here

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);