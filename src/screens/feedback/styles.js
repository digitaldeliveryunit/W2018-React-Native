import { StyleSheet } from "react-native";
import { sizeWidth } from "../../helpers/size.helper";
import { CommonStyles } from "../../helpers/common-styles";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center"
  },
  containerWebview: {
    flex: 1,
    marginVertical: 10,
    width: sizeWidth(90),
    borderRadius: 15,
    overflow: "hidden",
    ...CommonStyles.boxShadow
  },
  webView: {
    flex: 1
  }
});
