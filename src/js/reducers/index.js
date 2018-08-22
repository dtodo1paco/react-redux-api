// src/js/reducers/index.js
import { ADD_ARTICLE, HAS_ERRORS, IS_LOADING } from "../constants/action-types";
import { articles, items } from "./articles";
import { combineReducers } from 'redux';

export function hasError(state = false, action) {
    switch (action.type) {
        case HAS_ERRORS:
            return action.hasError;
        default:
            return state;
    }
}
export function isLoading(state = false, action) {
    switch (action.type) {
        case IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export default combineReducers({
    articles,
    items,
    hasError,
    isLoading
});