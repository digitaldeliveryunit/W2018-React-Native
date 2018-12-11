import React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import HomeScreen from "../screens/home";
import MyEventScreen from "../screens/my-events";
import SearchScreen from "../screens/search";
import ProfileScreen from "../screens/profile";
import { COLORS } from "../helpers/common-styles";
import { fontMaker, fontSize } from "../helpers/font.helper";
import { sizeWidth } from "../helpers/size.helper";

export const navStyle = StyleSheet.create({
  iconStyle: {
    width: sizeWidth(6),
    height: sizeWidth(6),
    resizeMode: "contain",
    marginBottom: -sizeWidth(1.5)
  },
  tabStyle: {
    height: sizeWidth(12)
  },
  labelStyle: {
    fontSize: fontSize.f10,
    ...fontMaker({}),
    paddingBottom: sizeWidth(0.5)
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
              style={navStyle.iconStyle}
            />
          ) : (
            <Image
              source={require("../../assets/images/home.png")}
              style={navStyle.iconStyle}
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
              style={navStyle.iconStyle}
            />
          ) : (
            <Image
              source={require("../../assets/images/events.png")}
              style={navStyle.iconStyle}
            />
          );
        }
      }
    },
    // TODO 01
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: "Profile",
        tabBarIcon: ({ focused }) => {
          return focused ? (
            <Image
              source={require("../../assets/images/profile_active.png")}
              style={navStyle.iconStyle}
            />
          ) : (
            <Image
              source={require("../../assets/images/profile.png")}
              style={navStyle.iconStyle}
            />
          );
        }
      }
    }
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      style: navStyle.tabStyle,
      labelStyle: navStyle.labelStyle,
      activeTintColor: COLORS.GREEN_PET_ICT,
      inactiveTintColor: COLORS.GRAYISH_BLUE
    }
  }
);

export default MainNavigator;
