import { createStackNavigator } from "react-navigation";
import SearchScreen from "../screens/search";
import EventDetailScreen from "../screens/event-detail";

export default createStackNavigator(
  {
    Search: SearchScreen,
    EventDetail: EventDetailScreen,
  },
  {
    headerMode: "none"
  }
);
