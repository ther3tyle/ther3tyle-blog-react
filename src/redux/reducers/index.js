import {combineReducers} from "redux";
import backdropReducer from "./backdropReducer";
import menuReducer from "./menuReducer";

export default combineReducers({
    backdropMenu: backdropReducer,
    menuReducer: menuReducer
});