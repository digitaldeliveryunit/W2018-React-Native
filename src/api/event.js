// API for event
import RequestHelper from "../helpers/request.helper";
import AppConfig from "../config";

export default class EventAPI {
  static async getFeaturedEvents (params) {
    const data = await RequestHelper.get(`${AppConfig.apiUrl}Events/Featured`, params);
    return data;
  }

  // for home screen
  static async getUpcomingAllEvents (params) {
    const data = await RequestHelper.get(`${AppConfig.apiUrl}Events/UpComingAll`, params);
    return data;
  }

  // for myEvents screen
  static async getUpcomingEvents (params) {
    const data = await RequestHelper.get(`${AppConfig.apiUrl}Events/UpComing`, params);
    return data;
  }

  // for Profile screen
  static async getPastEvents (params) {
    const data = await RequestHelper.get(`${AppConfig.apiUrl}Events/Past`, params);
    return data;
  }

  // for Event detail screen
  static async getEventDetail (eventId) {
    const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/${eventId}`);
    return data;
  }

  static async searchEvents (params) {
    const data = await RequestHelper.get(`${AppConfig.apiUrl}Events/Search`, params);
    return data;
  }

  static async bookmark (eventId) {
    const data = await RequestHelper.post(`${AppConfig.apiUrl}Event/${eventId}/Bookmark`);
    return data;
  }

  static async unBookmark (eventId) {
    const data = await RequestHelper.post(`${AppConfig.apiUrl}Event/${eventId}/UnBookmark`);
    return data;
  }

  static async join (eventId) {
    const data = await RequestHelper.post(`${AppConfig.apiUrl}Event/${eventId}/Join`);
    return data;
  }

  static async unJoin (eventId) {
    const data = await RequestHelper.post(`${AppConfig.apiUrl}Event/${eventId}/UnJoin`);
    return data;
  }
}