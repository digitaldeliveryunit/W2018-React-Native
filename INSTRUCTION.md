Section 6: Navigation

Task 1. add footer menu
Locate the file "src/navigator/index.js"
Find and replace the Keyword: TODO 01 with below code

MainScreen: { screen: MainNavigator },

Locate the file "src/reducers/nav.reducer.js"
Find and replace the Keyword: TODO 02 with below code

actions: [NavigationActions.navigate({ routeName: "MainScreen" })]

Task 2. add search menu
Locate the file "src/navigator/main.navigator.js"
Find and replace the Keyword: TODO 03 with below code

Search: {
  screen: SearchScreen,
  navigationOptions: {
    title: "Search",
    tabBarIcon: ({ focused }) => {
      return focused ? (
        <Image
          source={require("../../assets/images/search_active.png")}
          style={navStyle.iconStyle}
        />
      ) : (
        <Image
          source={require("../../assets/images/search.png")}
          style={navStyle.iconStyle}
        />
      );
    }
  }
},


Task 3. navigate to Event Detail screen

Locate the file "src/navigator/index.js"
Find and replace the Keyword: TODO 04 with below code

About: { screen: EventDetailScreen },

Locate the file "src/screens/home/index.js"
Find and replace the Keyword: TODO 05 with below code

this.props.navigation.navigate("About", { eventId });

