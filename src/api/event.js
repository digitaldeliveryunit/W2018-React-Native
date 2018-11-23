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

  // for Profile screen
  static async getPastEvents (params) {
    const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/Past`, params);
    return data;
  }

  // for Event detail screen
  static async getEventDetail (eventId) {
    const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/${eventId}`);
    return data;
  }

  static async searchEvents (params) {
    const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/Search`, params);
    return data;
  }
}