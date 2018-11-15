import { createStackNavigator } from "react-navigation";
import MyEventsScreen from "../screens/my-events";
import EventDetailScreen from "../screens/event-detail";
import GalleryScreen from "../screens/gallery";
import SpotlightScreen from "../screens/spotlight";

export default createStackNavigator(
  {
    MyEvents: MyEventsScreen,
    EventDetail: EventDetailScreen,
    Gallery: GalleryScreen,
    Spotlight: SpotlightScreen
  },
  {
    headerMode: "none"
  }
);
