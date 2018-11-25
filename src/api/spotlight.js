// API for spotlight
import RequestHelper from "../helpers/request.helper";
import AppConfig from "../config";

export default class SpotlightAPI {
  static async getSpotlights (eventId, params) {
    const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/${eventId}/Spotlight`, params);
    return data;
  }
}