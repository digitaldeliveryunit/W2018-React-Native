import { StyleSheet } from "react-native";
import { CommonStyles } from "../../helpers/common-styles";
import { fontMaker, fontSize } from "../../helpers/font.helper";
import { sizeWidth, sizeHeight } from "../../helpers/size.helper";

export default StyleSheet.create({
  foregroundSection: {
    paddingTop: 40,
    paddingHorizontal: sizeWidth(3)
  },
  containerHeader: {
    flexDirection: "row",
    alignItems: "center"
  },
  stickyHeader: {
    backgroundColor: "rgba(64, 54, 129, .95)",
    shadowColor: "#060606",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 6
    },
    height: sizeHeight(12),
    alignItems: "center",
    paddingTop: sizeWidth(4),
    paddingLeft: sizeWidth(3)
  },
  containerInfo: {
    flexDirection: "column",
    paddingHorizontal: sizeWidth(1.5)
  },
  displayName: {
    fontSize: fontSize.f20,
    lineHeight: fontSize.f20,
    marginBottom: sizeWidth(1),
    color: "#FFF",
    ...fontMaker({ weight: "600" })
  },
  displayPosition: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f14,
    color: "#FFF"
  },
  title: {
    fontSize: fontSize.f20,
    lineHeight: fontSize.f20,
    color: "#FFF",
    paddingHorizontal: sizeWidth(3),
    paddingTop: sizeWidth(8),
    ...fontMaker({ weight: "600" })
  },
  containerEvents: {
    paddingHorizontal: sizeWidth(3),
    marginTop: sizeWidth(3)
  },
  containerEventItem: {
    marginBottom: sizeWidth(3),
    ...CommonStyles.boxShadow
  },
  smallDisplayName: {
    fontSize: fontSize.f16,
    lineHeight: fontSize.f16,
    color: "#FFF",
    ...fontMaker({ weight: "600" })
  },
  smallDisplayPosition: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f14,
    color: "#FFF"
  },
});
