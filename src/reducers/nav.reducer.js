import { NavigationActions, StackActions } from "react-navigation";
import { AppNavigator } from "../navigator";

const initialNavState = AppNavigator.router.getStateForAction(
  StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "MainScreen" })]
  })
);

export default function navReducer(state = initialNavState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
