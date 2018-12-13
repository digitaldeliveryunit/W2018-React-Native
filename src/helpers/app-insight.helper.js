import Analytics from "appcenter-analytics";
import { Platform } from "react-native";
import Session from "./session";

export default class AppInsightHelper {
    static async trackEvent (_event) {
        const user = await Session.getUser();
        if (user) {

            // TODO 02
        }
    }
}