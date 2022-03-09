// imports
import { combineReducers } from "redux";

// local imports
import auth from "./auth.reducer";
import admin from "./admin.reducer";
import account from "./accounts.reducer";

export default combineReducers({
    auth,
    admin,
    account
});