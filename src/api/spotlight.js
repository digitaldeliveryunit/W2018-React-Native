// API for spotlight
import RequestHelper from "../helpers/request.helper";
import AppConfig from "../config";
import MockData from "../helpers/mock-data";
import { sleep } from "../helpers/function.helper";

export default class SpotlightAPI {
  static async getSpotlights (eventId, params) {
    // const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/${eventId}/Spotlight`, params);
    // return data;
    await sleep(500);
    const { take, skip } = params;
    return MockData.spotlights.slice(skip, skip + take);
  }
}