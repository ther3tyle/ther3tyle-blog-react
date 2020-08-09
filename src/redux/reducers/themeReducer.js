import {BG_COLOR, TEXT_COLOR} from "../actions/types";

const INITIAL_STATE = {
    background: "#3177e6",
    text: "#ffffff"
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BG_COLOR:
            return {...state, background: action.payload}
        case TEXT_COLOR:
            return {...state, text: action.payload}
        default:
            return state;
    }
}