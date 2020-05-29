import {BACKDROP_MENU} from "../actions/types";

const INITIAL_STATE = {
    showBackdropMenu: " close",
}

export const backdropMenuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BACKDROP_MENU:
            const value = action.payload ? " open" : " close";
            return {...state, showBackdropMenu: value}
        default:
            return state;
    }
}