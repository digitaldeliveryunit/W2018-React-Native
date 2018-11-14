import { createStackNavigator } from "react-navigation";
import MyEventsScreen from "../screens/my-events";
import EventDetailScreen from "../screens/event-detail";
import GalleryScreen from "../screens/gallery";

export default createStackNavigator(
  {
    MyEvents: MyEventsScreen,
    EventDetail: EventDetailScreen,
    Gallery: GalleryScreen
  },
  {
    headerMode: "none"
  }
);
