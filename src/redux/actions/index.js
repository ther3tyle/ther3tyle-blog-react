import {BACKDROP, SHOW_MENU_ITEM} from "./types";

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