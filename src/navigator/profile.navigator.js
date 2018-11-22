import { createStackNavigator } from "react-navigation";
import ProfileScreen from "../screens/profile";
import EventDetailScreen from "../screens/event-detail";

export default createStackNavigator(
  {
    Profile: ProfileScreen,
    EventDetail: EventDetailScreen,
  },
  {
    headerMode: "none"
  }
);
