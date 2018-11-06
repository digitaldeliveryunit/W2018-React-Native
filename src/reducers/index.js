import { combineReducers } from "redux";
import demoReducer from "./demo.reducer";
import navReducer from "./nav.reducer";

export default combineReducers({
  demo: demoReducer,
  nav: navReducer
});
