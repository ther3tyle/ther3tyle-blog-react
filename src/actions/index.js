import {BACKDROP_MENU} from "./types";

export const openBackdropMenu = () => {
    return {
        type: BACKDROP_MENU,
        payload: true
    }
}

export const closeBackdropMenu = () => {
    return {
        type: BACKDROP_MENU,
        payload: false
    }
}