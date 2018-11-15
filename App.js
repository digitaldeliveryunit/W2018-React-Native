import React, { Component } from "react";
import { YellowBox } from "react-native";
import { store } from "./src/store";
import { Provider } from "react-redux";
import NavigationService from "./src/helpers/navigation-service";
import AppWithNavigationState from "./src/navigator";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} />
      </Provider>
    );
  }
}

// TODO: Temporary work out, while waiting for react-native to be comply with react standard
YellowBox.ignoreWarnings([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillUpdate is deprecated",
  "Remote debugger is in a background",
  "Warning: componentWillReceiveProps is deprecated"
]);
