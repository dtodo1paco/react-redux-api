// src/js/actions/index.js

import { ADD_ARTICLE, HAS_ERRORS, IS_LOADING, FETCH_SUCCESS } from "../constants/action-types";

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });

/** AUX **/
export function setError(bool) {
    return {
        type: HAS_ERRORS,
        hasError: bool
    };
}
export function isLoading(bool) {
    return {
        type: IS_LOADING,
        isLoading: bool
    };
}
export function fetchDataSuccess(items) {
    return {
        type: FETCH_SUCCESS,
        items
    };
}

/** MAIN **/
export function fetchData(url) {
    return (dispatch) => {
        dispatch(isLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(isLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(fetchDataSuccess(items)))
            .catch(() => dispatch(setError(true)));
    };
}