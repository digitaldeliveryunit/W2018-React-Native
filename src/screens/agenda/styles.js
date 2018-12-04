import { StyleSheet, Dimensions } from "react-native";
import { CommonStyles, COLORS } from "../../helpers/common-styles";
import { sizeHeight } from "../../helpers/size.helper";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  whiteOverlay: {
    backgroundColor: COLORS.LIGHT_GRAY_WHITE,
    position: "relative"
  },
  container: {
    ...CommonStyles.container,
    backgroundColor: COLORS.LIGHT_GRAY_WHITE
  },
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
    height: "100%"
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
    height: sizeHeight(38),
    justifyContent: "center",
    alignSelf: "center"
  }
});
