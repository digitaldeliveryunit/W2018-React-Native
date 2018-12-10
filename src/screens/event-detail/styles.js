import { StyleSheet, Dimensions } from "react-native";
import { CommonStyles, COLORS } from "../../helpers/common-styles";
import { sizeWidth } from "../../helpers/size.helper";
import { fontMaker, fontSize } from "../../helpers/font.helper";
const { width } = Dimensions.get("window");

export default StyleSheet.create({
  whiteOverlay: {
    flex: 1,
    backgroundColor: "#FFF",
    position: "relative"
  },
  container: CommonStyles.container,
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
  titleContainer: {
    backgroundColor: "rgba(6, 6, 6, .05)",
    paddingHorizontal: sizeWidth(3),
    paddingVertical: sizeWidth(1.5)
  },
  lblEventName: {
    fontSize: fontSize.f18,
    color: COLORS.GREEN_PET_ICT,
    ...fontMaker({ weight: "600" })
  },
  infoContainer: {
    width,
    paddingHorizontal: sizeWidth(3),
    marginBottom: sizeWidth(3)
  },
  rowInfo: {
    flexDirection: "row",
    paddingTop: sizeWidth(3)
  },
  rowLocation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  infoIcon: {
    width: sizeWidth(6),
    height: sizeWidth(6),
    resizeMode: "contain"
  },
  infoLabelWrapper: {
    marginLeft: sizeWidth(2),
    flexDirection: "column",
    width: sizeWidth(65),
    overflow: "hidden"
  },
  colorHighLight: {
    color: COLORS.SOFT_PURPLE,
    fontSize: fontSize.f12,
    lineHeight: fontSize.f14
  },
  lblInfoName: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f14,
    color: COLORS.GRAYISH_BLUE
  },
  lblInfoMeta: {
    fontSize: fontSize.f11,
    color: COLORS.GRAYISH_BLUE
  },
  mapsImage: {
    width: sizeWidth(15),
    height: sizeWidth(15)
  },
  horizontalDivider: {
    ...CommonStyles.horizontalDivider,
    alignSelf: "center",
    width: sizeWidth(94)
  },
  aboutContainer: {
    paddingHorizontal: sizeWidth(3),
    paddingVertical: sizeWidth(1.5),
    flex: 1
  },
  lblAbout: {
    fontSize: fontSize.f16,
    color: COLORS.GRAYISH_BLUE,
    ...fontMaker({ weight: "600" })
  },
  contentAbout: {
    marginHorizontal: -sizeWidth(2)
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
    borderColor: COLORS.LIGHT_BORDER,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: sizeWidth(8),
    height: sizeWidth(8),
    borderRadius: sizeWidth(4),
    marginLeft: 5,
    zIndex: 999
  },
  iconActionButton: {
    width: sizeWidth(3.5),
    height: sizeWidth(3.5),
    resizeMode: "contain"
  }
});
