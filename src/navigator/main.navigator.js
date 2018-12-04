import React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import HomeScreen from "../screens/home";
import MyEventScreen from "../screens/my-events";
import SearchScreen from "../screens/search";
import ProfileScreen from "../screens/profile";
import { COLORS } from "../helpers/common-styles";
import { fontMaker } from "../helpers/font.helper";
import { sizeWidth, sizeHeight, sizeFont } from "../helpers/size.helper";

const styles = StyleSheet.create({
  iconStyle: {
    width: sizeWidth(8),
    height: sizeWidth(8),
    marginBottom: -5,
    resizeMode: "contain"
  }
});

const MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
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
      screen: MyEventScreen,
      navigationOptions: {
        title: "My Events",
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
      screen: SearchScreen,
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
      screen: ProfileScreen,
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
        height: sizeHeight(10.2)
      },
      labelStyle: {
        fontSize: sizeFont(3),
        ...fontMaker({})
      },
      activeTintColor: COLORS.GREEN_PET_ICT,
      inactiveTintColor: COLORS.GRAYISH_BLUE
    }
  }
);

export default MainNavigator;
