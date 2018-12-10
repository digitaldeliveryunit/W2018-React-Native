import { AsyncStorage } from "react-native";
import _ from "lodash";

const keyCurrentUser = "currentUser";

export default class Session {
  static async setUser(currentUser) {
    if (!currentUser) {
      return false;
    }
    await AsyncStorage.setItem(keyCurrentUser, JSON.stringify(currentUser));
    return true;
  }
  static async getUser() {
    const userString = await AsyncStorage.getItem(keyCurrentUser);
    const parseResult = _.attempt(JSON.parse.bind(null, userString));
    if (_.isError(parseResult)) {
      // eslint-disable-next-line no-console
      console.error(
        `Cannot parse data with the key keyCurrentUser in AsyncStorage`
      );
      return null;
    }
    return JSON.parse(userString);
  }
  static async clearUser() {
    await AsyncStorage.removeItem(keyCurrentUser);
    return true;
  }
}
