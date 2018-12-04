import { StyleSheet, Dimensions } from "react-native";
import { CommonStyles, COLORS } from "../../helpers/common-styles";
import { sizeWidth, sizeFont, sizeHeight } from "../../helpers/size.helper";
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
    height: "100%"
  },
  titleContainer: {
    backgroundColor: "rgba(6, 6, 6, .05)"
  },
  lblEventName: {
    width,
    fontSize: sizeFont(5.8),
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
    fontSize: sizeFont(4),
    lineHeight: 18,
    color: COLORS.GRAYISH_BLUE
  },
  lblInfoMeta: {
    fontSize: sizeFont(4),
    lineHeight: 16,
    color: COLORS.GRAYISH_BLUE,
    marginTop: 3
  },
  mapsImage: {
    width: sizeWidth(17),
    height: sizeWidth(17)
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
    fontSize: sizeFont(4),
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
    bottom: 20
  },
  actionButton: {
    backgroundColor: "#FFF",
    borderColor: "#F6F6F6",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: sizeWidth(10),
    height: sizeWidth(10),
    borderRadius: sizeWidth(5),
    marginLeft: 5
  },
  iconActionButton: {
    width: sizeWidth(5),
    height: sizeWidth(5)
  }
});
