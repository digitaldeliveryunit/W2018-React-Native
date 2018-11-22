import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/home";
import EventDetailScreen from "../screens/event-detail";

export default createStackNavigator(
  {
    Home: HomeScreen,
    EventDetail: EventDetailScreen,
  },
  {
    headerMode: "none"
  }
);
