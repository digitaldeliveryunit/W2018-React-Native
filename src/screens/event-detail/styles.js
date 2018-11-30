import { StyleSheet, Dimensions } from "react-native";
import { CommonStyles, COLORS } from "../../helpers/common-styles";
import { sizeWidth } from "../../helpers/size.helper";
import { fontMaker } from "../../helpers/font.helper";
const { width } = Dimensions.get("window");

export default StyleSheet.create({
  whiteOverlay: {
    flex: 1,
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
  titleContainer: {
    backgroundColor: "rgba(6, 6, 6, .05)"
  },
  lblEventName: {
    width,
    fontSize: 20,
    lineHeight: 24,
    color: COLORS.GREEN_PET_ICT,
    paddingVertical: 12,
    paddingHorizontal: 20,
    ...fontMaker({ weight: "600" })
  },
  infoContainer: {
    width,
    paddingHorizontal: 20,
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
    marginLeft: 10,
    flexDirection: "column",
    width: sizeWidth(60),
    overflow: "hidden"
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
    alignSelf: "center",
    width: width - 40
  },
  aboutContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1
  },
  lblAbout: {
    fontSize: 15,
    lineHeight: 18,
    color: COLORS.GRAYISH_BLUE,
    paddingVertical: 10,
    ...fontMaker({ weight: "600" })
  },
  contentAbout: {
    marginLeft: -10,
    marginRight: -10
  },
  // begin styles for action button
  containerActionButton: {
    flexDirection: "row",
    position: "absolute",
    right: 10,
    top: 150
  },
  actionButton: {
    backgroundColor: "#FFF",
    borderColor: "#F6F6F6",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 5
  },
  iconActionButton: {
    width: 20,
    height: 20
  }
});
