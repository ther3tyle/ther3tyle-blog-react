import {BACKDROP} from "../actions/types";

const INITIAL_STATE = {
    showBackdrop: " close",
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BACKDROP:
            const value = action.payload ? " open" : " close";
            return {...state, showBackdrop: value}
        default:
            return state;
    }
}