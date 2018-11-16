import { StyleSheet, Dimensions } from "react-native";
import { CommonStyles } from "../../helpers/common-styles";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  whiteOverlay: {
    backgroundColor: "#FFF",
    position: "relative"
  },
  container: CommonStyles.container,
  imageCover: {
    width,
    height: 200
  },
  datesContainer: {
    padding: 4,
    marginVertical: 8
  },
  dateItem: {
    margin: 6
  },
  containerSessionItem: {
    marginBottom: 5
  }
});
