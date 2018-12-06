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
    height: "100%",
    opacity: 0.8
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
    marginLeft: sizeWidth(3),
    flexDirection: "column",
    width: sizeWidth(60),
    overflow: "hidden"
  },
  colorHighLight: {
    color: COLORS.SOFT_PURPLE,
    fontSize: fontSize.f14
  },
  lblInfoName: {
    fontSize: fontSize.f16,
    color: COLORS.GRAYISH_BLUE
  },
  lblInfoMeta: {
    fontSize: fontSize.f14,
    color: COLORS.GRAYISH_BLUE
  },
  mapsImage: {
    width: sizeWidth(17),
    height: sizeWidth(17)
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
    borderRadius: sizeWidth(5),
    marginLeft: 5
  },
  iconActionButton: {
    width: sizeWidth(4),
    height: sizeWidth(4),
    resizeMode: "contain"
  }
});
