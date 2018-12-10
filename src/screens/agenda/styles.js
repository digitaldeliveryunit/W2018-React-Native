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
  imageCover: {
    width,
    height: "100%"
  },
  coverImageOpacity: {
    backgroundColor: "rgba(0, 0, 0, .6)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.3,
    zIndex: 99
  },
  datesContainer: {
    height: sizeHeight(10),
    paddingHorizontal: 10
  },
  dateItem: {
    marginRight: 6
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
