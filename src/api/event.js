// API for event
import RequestHelper from "../helpers/request.helper";
import AppConfig from "../config";
import MockData from "../helpers/mock-data/index";
import _ from "lodash";
import { sleep } from "../helpers/function.helper";

export default class EventAPI {
  static async getFeaturedEvents (params) {
    // const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/Featured`, params);
    // return data;
    return MockData.feafuredEvents;
  }

  // for home screen
  static async getUpcomingAllEvents (params) {
    // const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/UpcomingAll`, params);
    // return data;
    await sleep(500);
    const { take, skip } = params;
    return MockData.upcomingAllEvents.slice(skip, (skip + 1) * take);
  }

  // for myEvents screen
  static async getUpcomingEvents (params) {
    // const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/Upcoming`, params);
    // return data;
    await sleep(500);
    const { take, skip } = params;
    return MockData.upcomingEvents.slice(skip, (skip + 1) * take);
  }

  // for Profile screen
  static async getPastEvents (params) {
    // const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/Past`, params);
    // return data;
    await sleep(500);
    const { take, skip } = params;
    return MockData.pastEvents.slice(skip, (skip + 1) * take);
  }

  // for Event detail screen
  static async getEventDetail (eventId) {
    // const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/${eventId}`);
    // return data;
    return MockData.event;
  }

  static async searchEvents (params) {
    // const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/Search`, params);
    // return data;
    return MockData.upcomingAllEvents.filter((item) => item.eventName.indexOf(params.searchKey) > -1);
  }

  static async bookmark (eventId) {
    // const data = await RequestHelper.post(`${AppConfig.apiUrl}Event/${eventId}/Bookmark`);
    // return data;
    return true;
  }

  static async unBookmark (eventId) {
    // const data = await RequestHelper.post(`${AppConfig.apiUrl}Event/${eventId}/UnBookmark`);
    // return data;
    return true;
  }

  static async join (eventId) {
    // const data = await RequestHelper.post(`${AppConfig.apiUrl}Event/${eventId}/Join`);
    // return data;
    return true;
  }

  static async unJoin (eventId) {
    // const data = await RequestHelper.post(`${AppConfig.apiUrl}Event/${eventId}/UnJoin`);
    // return data;
    return true;
  }
}