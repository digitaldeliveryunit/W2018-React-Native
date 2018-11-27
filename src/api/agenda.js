// API for event
import RequestHelper from "../helpers/request.helper";
import AppConfig from "../config";

export default class AgendaAPI {
  // for Agenda of Event
  static async getAgendasOfEvent (eventId) {
    const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/${eventId}/Agenda`);
    return data;
  }
}
