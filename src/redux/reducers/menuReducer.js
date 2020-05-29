import {SHOW_MENU_ITEM} from "../actions/types";

const INITIAL_STATE = {
    showMenuItem: true
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_MENU_ITEM:
            return {...state, showMenuItem: action.payload}
        default:
            return state;
    }
}