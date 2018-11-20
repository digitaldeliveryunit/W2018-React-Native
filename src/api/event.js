// API for event
import RequestHelper from "../helpers/request.helper";
import AppConfig from "../config";

export default class EventAPI {
  static async getFeaturedEvents (params) {
    const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/Featured`, params);
    return data;
  }

  // for home screen
  static async getUpcomingAllEvents (params) {
    const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/UpcomingAll`, params);
    return data;
  }

  // for myEvents screen
  static async getUpcomingEvents (params) {
    const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/Upcoming`, params);
    return data;
  }
}