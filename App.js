import React, { Component } from "react";
import { YellowBox, View, StatusBar } from "react-native";
import { store } from "./src/store";
import { Provider } from "react-redux";
import NavigationService from "./src/helpers/navigation-service";
import AppWithNavigationState from "./src/navigator";
import QRCodePopup from "./src/components/QRCodePopup";
import QuickAccessMenu from "./src/components/QuickAccessMenu";
import Analytics from "appcenter-analytics";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <StatusBar
            backgroundColor="transparent"
            translucent
          />
          <AppWithNavigationState ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }} />
          <QRCodePopup />
          <QuickAccessMenu />
        </View>
      </Provider>
    );
  }
  async componentDidMount () {
    
    // enable custom event for Analytics
    // TODO 01
  }
}

// TODO: Temporary work out, while waiting for react-native to be comply with react standard
YellowBox.ignoreWarnings([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillUpdate is deprecated",
  "Remote debugger is in a background",
  "Warning: componentWillReceiveProps is deprecated"
]);
