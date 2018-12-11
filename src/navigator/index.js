import React from "react";
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator } from "react-navigation";
import { createReduxBoundAddListener } from "react-navigation-redux-helpers";
import MainNavigator from "../navigator/main.navigator";
import OnBoardingScreen from "../screens/onboarding";
import EventDetailScreen from "../screens/event-detail";
import GalleryScreen from "../screens/gallery";
import SpotlightScreen from "../screens/spotlight";
import AgendaScreen from "../screens/agenda";
import FeedbackScreen from "../screens/feedback";
import HomeScreen from "../screens/home";

export const AppNavigator = StackNavigator(
  {
    // TODO 01
    Home: { screen: HomeScreen },
    // TODO 04
    Gallery: { screen: GalleryScreen },
    Spotlight: { screen: SpotlightScreen },
    Agenda: { screen: AgendaScreen },
    Feedback: { screen: FeedbackScreen }
  },
  {
    headerMode: "none"
  }
);

export default AppNavigator;
