import { createStackNavigator } from "react-navigation";
import MyEventsScreen from "../screens/my-events";
import EventDetailScreen from "../screens/event-detail";

export default createStackNavigator(
  {
    MyEvents: MyEventsScreen,
    EventDetail: EventDetailScreen
  },
  {
    headerMode: "none"
  }
);
