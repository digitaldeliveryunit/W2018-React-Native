import { 
  OPEN_QRCODE_POPUP, 
  CLOSE_QRCODE_POPUP 
} from "../actions/qrcode.action";

const initState = {
  isOpen: false
};

export default function qrCodeReducer(state = initState, action) {
  switch (action.type) {
    case OPEN_QRCODE_POPUP:
      return Object.assign({}, state, {
        isOpen: true
      });
    case CLOSE_QRCODE_POPUP:
      return Object.assign({}, state, {
        isOpen: false
      });
    default:
      return state;
  }
}
