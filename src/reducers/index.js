import { combineReducers } from "redux";
import loc from "./location";
import theme from "./theme";
import pets from "./pets";

export default combineReducers({ loc, theme, pets });
