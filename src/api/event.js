// API for event
import RequestHelper from "../helpers/request.helper";
import AppConfig from "../config";
import {
  featuredEvents,
  upcomingEvents,
  upcomingAllEvents,
  pastEvents,
  event
} from "../helpers/mock-data.helper";

export default class EventAPI {
  static async getFeaturedEvents (params) {
    // const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/Featured`, params);
    // return data;
    return featuredEvents;
  }

  // for home screen
  static async getUpcomingAllEvents (params) {
    // const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/UpcomingAll`, params);
    // return data;
    return upcomingAllEvents;
  }

  // for myEvents screen
  static async getUpcomingEvents (params) {
    // const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/Upcoming`, params);
    // return data;
    return upcomingEvents;
  }

  // for Profile screen
  static async getPastEvents (params) {
    // const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/Past`, params);
    // return data;
    return pastEvents;
  }

  // for Event detail screen
  static async getEventDetail (eventId) {
    // const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/${eventId}`);
    // return data;
    return event;
  }

  static async searchEvents (params) {
    // const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/Search`, params);
    // return data;
    return upcomingAllEvents.filter((item) => item.eventName.indexOf(params.searchKey) > -1);
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