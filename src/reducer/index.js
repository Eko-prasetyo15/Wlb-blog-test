import { combineReducers } from "redux";
import dataPost from "../views/Home.js/reducer";
import listPost from "../views/AddNews/reducer";
import dashboardHandle from "../views/Dashboard/reducer";

export default combineReducers({
    dataPost,
    listPost,
    dashboardHandle,
});