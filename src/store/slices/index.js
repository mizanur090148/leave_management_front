import { combineReducers } from "redux";
import authSlice from "./authSlice";
//import orgSlice from "./orgSlice";

export default combineReducers({
  authReducer: authSlice,
  //orgReducer: orgSlice
});
