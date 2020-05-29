import {combineReducers} from "redux";
import {backdropMenuReducer} from "./backdropMenuReducer";

export default combineReducers({
    backdropMenu: backdropMenuReducer
});