import axios from "axios";
import qs from "qs";
import Toast from "@remobile/react-native-toast";
import AppInsightHelper from "../helpers/app-insight.helper";

const instance = axios.create({
  timeout: 10000
});

const handleError = error => {
  //eslint-disable-next-line
  // console.log(error.response, error.request);
  if (error.response) {
    const message = error.response && error.response.data && error.response.data.message;
    if (message) {
      //eslint-disable-next-line
      // console.log("message", message);
      Toast.showLongBottom(message);
      AppInsightHelper.trackEvent(`API error: ${message}`);
    } else {
      Toast.showLongBottom("An unknown error has occurred!");
      AppInsightHelper.trackEvent(`API error: An unknown error has occurred!`);
    }
  } else if (error.request) {
    //eslint-disable-next-line
    // console.log("error.request", "Network error!");
    Toast.showLongBottom("Network error!");
    AppInsightHelper.trackEvent(`API error: Network error!`);
  } else {
    //eslint-disable-next-line
    // console.log("An unknown error has occurred!");
    Toast.showLongBottom("An unknown error has occurred!");
    AppInsightHelper.trackEvent(`API error: An unknown error has occurred!`);
  }
};

export default class RequestHelper {
  static async getHeader() {
    return {
      // TODO 03
    };
  }
  // TODO 02 START
  static async get(apiUrl, params) {
  }
  // TODO 02 END
  static async post(apiUrl, data) {
    return instance({
      method: "post",
      url: apiUrl,
      headers: await this.getHeader(),
      data: data
    })
      .then(data => {
        return data.data;
      })
      .catch(e => {
        handleError(e);
        throw e;
      });
  }
  static async put(apiUrl, data) {
    return instance({
      method: "put",
      url: apiUrl,
      headers: await this.getHeader(),
      data: data
    })
      .then(data => {
        return data.data;
      })
      .catch(e => {
        handleError(e);
        throw e;
      });
  }
}
