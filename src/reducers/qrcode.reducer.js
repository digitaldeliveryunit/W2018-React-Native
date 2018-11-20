import { 
  OPEN_QRCODE_POPUP, 
  CLOSE_QRCODE_POPUP 
} from "../actions/qrcode.action";

const initState = {
  isOpen: false,
  eventId: null
};

export default function qrCodeReducer(state = initState, action) {
  switch (action.type) {
    case OPEN_QRCODE_POPUP:
      return Object.assign({}, state, {
        isOpen: true,
        eventId: action.eventId
      });
    case CLOSE_QRCODE_POPUP:
      return Object.assign({}, state, {
        isOpen: false,
        eventId: null
      });
    default:
      return state;
  }
}
