import { StyleSheet, Dimensions } from "react-native";
import { CommonStyles } from "../../helpers/common-styles";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  whiteOverlay: {
    backgroundColor: "#FFF",
    position: "relative"
  },
  container: CommonStyles.container,
  backButton: {
    position: "absolute",
    top: 30,
    left: 5,
    zIndex: 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "transparent"
  },
  backIcon: {
    width: 13,
    height: 28
  },
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
  containerAgendas: {
    paddingHorizontal: 10,
    marginBottom: 5
  },
  loadingOrEmptyContainer: {
    height: 200,
    justifyContent: "center",
    alignSelf: "center"
  }
});
