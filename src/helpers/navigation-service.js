import { NavigationActions, StackActions } from "react-navigation";

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

function goBack() {
  _navigator.dispatch(NavigationActions.back({}));
}

function resetPage(route) {
  _navigator.dispatch(
    StackActions.reset({
      key: null,
      index: 0,
      actions: [NavigationActions.navigate({ routeName: route })]
    })
  );
}

// add other navigation functions that you need and export them
export default {
  navigate,
  goBack,
  setTopLevelNavigator,
  resetPage
};
