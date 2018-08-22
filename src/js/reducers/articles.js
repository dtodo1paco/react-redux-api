// src/js/reducers/index.js
import { ADD_ARTICLE, FETCH_SUCCESS } from "../constants/action-types";

const initialState = {
    articles: [],
    items: []
};
// Notice how the initial state is passed as a default parameter.


export function articles(state = initialState.articles, action) {
    switch (action.type) {
        case ADD_ARTICLE:
            //return { ...state, articles: [...state, action.payload] };
            return [...state, action.payload];
        default:
            return state;
    }
}

export function items(state = initialState.items, action) {
    switch (action.type) {
        case FETCH_SUCCESS:
            return action.items;
        default:
            return state;
    }
}
