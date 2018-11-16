import { TOGGLE_MENU, SELECT_MENU } from "../actions/quick-access-menu.action";

const initState = {
  isOpen: false,
  menus: [
    {
      id: "Gallery",
      actived: false,
      icon: require("../../assets/images/gallery.png"),
      activedIcon: require("../../assets/images/gallery_white.png"),
      screen: "Gallery"
    },
    {
      id: "Spotlight",
      actived: false,
      icon: require("../../assets/images/spotlight.png"),
      activedIcon: require("../../assets/images/spotlight_white.png"),
      screen: "Spotlight"
    },
    {
      id: "Feedback",
      actived: false,
      icon: require("../../assets/images/feedback.png"),
      activedIcon: require("../../assets/images/feedback_white.png")
    },
    {
      id: "Agenda",
      actived: false,
      icon: require("../../assets/images/agenda.png"),
      activedIcon: require("../../assets/images/agenda_white.png"),
      screen: "Agenda"
    },
    {
      id: "About",
      actived: true,
      screen: "EventDetail",
      icon: require("../../assets/images/about.png"),
      activedIcon: require("../../assets/images/about_white.png")
    }
  ]
};

export default function quickAccessMenuReducer(state = initState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return Object.assign({}, state, {
        isOpen: !state.isOpen
      });
    case SELECT_MENU:
      return Object.assign({}, state, {
        isOpen: false,
        menus: state.menus.map(item => {
          item.actived = action.selectedMenuId === item.id;
          return item;
        })
      });
    default:
      return state;
  }
}
