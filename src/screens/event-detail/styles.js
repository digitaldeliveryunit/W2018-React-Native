import { StyleSheet, Dimensions } from "react-native";
import { CommonStyles, COLORS } from "../../helpers/common-styles";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  whiteOverlay: {
    backgroundColor: "#FFF",
    position: "relative"
  },
  container: CommonStyles.container,
  imageCover: {
    width,
    height: 180
  },
  titleContainer: {
    backgroundColor: "rgba(6, 6, 6, .05)"
  },
  lblEventName: {
    width,
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 24,
    color: COLORS.GREEN_PET_ICT,
    paddingVertical: 12,
    paddingHorizontal: 30
  },
  infoContainer: {
    width,
    paddingHorizontal: 30,
    marginBottom: 15
  },
  rowInfo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 22
  },
  rowLocation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  infoIcon: {
    width: 20,
    height: 22
  },
  infoLabelWrapper: {
    marginLeft: 25,
    flexDirection: "column"
  },
  colorHighLight: {
    color: COLORS.SOFT_PURPLE
  },
  lblInfoName: {
    fontSize: 16,
    lineHeight: 18,
    color: COLORS.GRAYISH_BLUE,
    marginBottom: 5
  },
  lblInfoMeta: {
    fontSize: 14,
    lineHeight: 16,
    color: COLORS.GRAYISH_BLUE
  },
  mapsImage: {
    marginTop: 20,
    width: 60,
    height: 60
  },
  horizontalDivider: {
    ...CommonStyles.horizontalDivider,
    width: width - 60
  },
  aboutContainer: {
    paddingVertical: 10,
    paddingHorizontal: 30
  },
  lblAbout: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 18,
    color: COLORS.GRAYISH_BLUE,
    paddingVertical: 10
  },
  contentAbout: {
    fontSize: 14,
    color: COLORS.GRAYISH_BLUE,
    lineHeight: 18,
    paddingBottom: 20
  }
});
