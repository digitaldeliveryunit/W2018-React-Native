import { StyleSheet } from "react-native";
import { sizeWidth } from "../../helpers/size.helper";

export default StyleSheet.create({
  listContainer: {
    flex: 1
  },
  itemWrapper: {
    marginBottom: sizeWidth(3),
    paddingHorizontal: sizeWidth(3)
  }
});
