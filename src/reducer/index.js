import { combineReducers } from "redux";
// import loading from "./loading";
import dataPost from "../views/Home.js/reducer";
import listPost from "../views/AddNews/reducer";
import dashboardHandle from "../views/Dashboard/reducer";
// import createPost from "../pages/CreatePost/reducer";

export default combineReducers({
    // loading,
    dataPost,
    listPost,
    dashboardHandle,
    // createPost,
});