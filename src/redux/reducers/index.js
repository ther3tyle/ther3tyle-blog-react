import {combineReducers} from "redux";
import backdropMenuReducer from "./backdropMenuReducer";
import postsReducer from "./postsReducer";
import loremPicsumReducer from "./loremPicsumReducer";

export default combineReducers({
    backdropMenu: backdropMenuReducer,
    posts: postsReducer,
    loremPicsum: loremPicsumReducer
});