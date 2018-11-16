import { createStackNavigator } from "react-navigation";
import MyEventsScreen from "../screens/my-events";
import EventDetailScreen from "../screens/event-detail";
import GalleryScreen from "../screens/gallery";
import SpotlightScreen from "../screens/spotlight";
import AgendaScreen from "../screens/agenda";

export default createStackNavigator(
  {
    MyEvents: MyEventsScreen,
    EventDetail: EventDetailScreen,
    Gallery: GalleryScreen,
    Spotlight: SpotlightScreen,
    Agenda: AgendaScreen
  },
  {
    headerMode: "none"
  }
);
