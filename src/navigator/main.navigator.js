import React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import HomeComponent from "../components/home/Home.component";
import MyEventsComponent from "../components/my-events/MyEvents.component";
import SearchComponent from "../components/search/Search.component";
import ProfileComponent from "../components/profile/Profile.component";

const styles = StyleSheet.create({
  iconStyle: {
    width: 30,
    height: 25,
    marginBottom: -5,
    resizeMode: "contain"
  }
});

const MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeComponent,
      navigationOptions: {
        title: "Home",
        tabBarIcon: ({ focused }) => {
          return focused ? (
            <Image
              source={require("../../assets/images/home_active.png")}
              style={styles.iconStyle}
            />
          ) : (
            <Image
              source={require("../../assets/images/home.png")}
              style={styles.iconStyle}
            />
          );
        }
      }
    },
    MyEvents: {
      screen: MyEventsComponent,
      navigationOptions: {
        title: "myEvents",
        tabBarIcon: ({ focused }) => {
          return focused ? (
            <Image
              source={require("../../assets/images/events_active.png")}
              style={styles.iconStyle}
            />
          ) : (
            <Image
              source={require("../../assets/images/events.png")}
              style={styles.iconStyle}
            />
          );
        }
      }
    },
    Search: {
      screen: SearchComponent,
      navigationOptions: {
        title: "Search",
        tabBarIcon: ({ focused }) => {
          return focused ? (
            <Image
              source={require("../../assets/images/search_active.png")}
              style={styles.iconStyle}
            />
          ) : (
            <Image
              source={require("../../assets/images/search.png")}
              style={styles.iconStyle}
            />
          );
        }
      }
    },
    Profile: {
      screen: ProfileComponent,
      navigationOptions: {
        title: "Profile",
        tabBarIcon: ({ focused }) => {
          return focused ? (
            <Image
              source={require("../../assets/images/profile_active.png")}
              style={styles.iconStyle}
            />
          ) : (
            <Image
              source={require("../../assets/images/profile.png")}
              style={styles.iconStyle}
            />
          );
        }
      }
    }
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      style: {
        height: 60
      },
      labelStyle: {
        fontSize: 11
      },
      activeTintColor: "#00A19C",
      inactiveTintColor: "#3C5063"
    }
  }
);

export default MainNavigator;
