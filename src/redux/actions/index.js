import {BACKDROP, BG_COLOR, SHOW_MENU_ITEM, TEXT_COLOR} from "./types";
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

export const changeBgColor = (value) => {
    return {
        type: BG_COLOR,
        payload: value
    }
}

export const changeTextColor = (value) => {
    return {
        type: TEXT_COLOR,
        payload: value
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