import {BACKDROP, SHOW_MENU_ITEM} from "./types";
import jsonPlaceholder from "../../apis/jsonPlaceholder";

export const openBackdrop = () => {
    return {
        type: BACKDROP,
        payload: true
    }
}

export const closeBackdrop = () => {
    return {
        type: BACKDROP,
        payload: false
    }
}

export const showMenuItem = (isVisible) => {
    return {
        type: SHOW_MENU_ITEM,
        payload: isVisible
    }
}

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({type: "FETCH_POSTS", payload: response.data});
};