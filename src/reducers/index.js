import { combineReducers } from "redux";
import demoReducer from "./demo.reducer";
import navReducer from "./nav.reducer";
import qrCodeReducer from "./qrcode.reducer";
import quickAccessMenuReducer from "./quick-access-menu.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  demo: demoReducer,
  nav: navReducer,
  qrcode: qrCodeReducer,
  quickAccessMenu: quickAccessMenuReducer,
  user: userReducer
});
