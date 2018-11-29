import { StyleSheet } from "react-native";
import { sizeWidth } from "../../helpers/size.helper";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center"
  },
  containerWebview: {
    flex: 1,
    marginTop: 30,
    marginBottom: 100,
    width: sizeWidth(80),
    borderRadius: 20,
    overflow: 'hidden'
  },
  webView: {
    flex: 1,
    backgroundColor: "#EEE"
  }
});
