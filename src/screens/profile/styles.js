import { StyleSheet } from "react-native";
import { CommonStyles } from "../../helpers/common-styles";
import { fontMaker, fontSize } from "../../helpers/font.helper";
import { sizeWidth, sizeHeight } from "../../helpers/size.helper";

export default StyleSheet.create({
  foregroundSection: {
    paddingTop: 40
  },
  containerHeader: {
    flexDirection: "row",
    paddingHorizontal: sizeWidth(3)
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
    paddingTop: sizeWidth(3)
  },
  containerInfo: {
    flexDirection: "column",
    paddingHorizontal: sizeWidth(3)
  },
  displayName: {
    fontSize: fontSize.f24,
    color: "#FFF",
    ...fontMaker({ weight: "600" })
  },
  displayPosition: {
    fontSize: fontSize.f16,
    color: "#FFF"
  },
  company: {
    fontSize: fontSize.f16,
    color: "#FFF"
  },
  title: {
    fontSize: fontSize.f20,
    lineHeight: fontSize.f20,
    color: "#FFF",
    paddingHorizontal: sizeWidth(3),
    paddingTop:sizeWidth(10),
    ...fontMaker({ weight: "600" })
  },
  containerEvents: {
    paddingHorizontal: sizeWidth(3),
    marginTop: 5
  },
  containerEventItem: {
    marginBottom: sizeWidth(3),
    ...CommonStyles.boxShadow
  },
  smallDisplayName: {
    fontSize: fontSize.f18,
    color: "#FFF",
    ...fontMaker({ weight: "600" })
  },
  smallDisplayPosition: {
    fontSize: fontSize.f12,
    color: "#FFF"
  },
});
