import React from "react";
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator } from "react-navigation";
import HomeComponent from "../components/home/Home.component";
import { createReduxBoundAddListener } from "react-navigation-redux-helpers";
import MainNavigator from "../navigator/main.navigator";

export const AppNavigator = StackNavigator(
  {
    MainScreen: { screen: MainNavigator }
  },
  {
    headerMode: "none"
  }
);

export default AppNavigator;

// TODO, Due to new version of react-navigation-redux-helpers
// Need to upgrade below code to newer version
// const AppWithNavigationState = ({ dispatch, nav }) => {
//   const addListener = createReduxBoundAddListener("root");
//   return (
//     <AppNavigator
//       navigation={addNavigationHelpers({ dispatch, state: nav, addListener })}
//     />
//   );
// };

// const mapStateToProps = state => ({
//   nav: state.nav
// });

// export default connect(mapStateToProps)(AppWithNavigationState);
