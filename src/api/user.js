import RequestHelper from "../helpers/request.helper";
import AppConfig from "../config/index";

export default class User {
  static async getCurrentUser () {
    const data = await RequestHelper.get(`${AppConfig.apiUrl}User`);
    return data;
  }
}
