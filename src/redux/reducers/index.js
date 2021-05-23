import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {commentsReducer} from "./commentsReducers";

export default combineReducers({
    posts: postsReducer,
    comments: commentsReducer
})