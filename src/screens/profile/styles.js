import { StyleSheet } from "react-native";
import { CommonStyles } from "../../helpers/common-styles";
import { fontMaker } from "../../helpers/font.helper";
import { sizeFont, sizeHeight } from "../../helpers/size.helper";

export default StyleSheet.create({
  foregroundSection: {
    paddingTop: 40
  },
  containerHeader: {
    flexDirection: "row",
    paddingHorizontal: 22
  },
  stickyHeader: {
    backgroundColor: "rgba(64, 54, 129, .95)",
    shadowColor: "#060606",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 6
    },
    height: sizeHeight(14),
    alignItems: "center",
    paddingTop: 15
  },
  containerInfo: {
    flexDirection: "column",
    paddingLeft: 20
  },
  displayName: {
    fontSize: sizeFont(6),
    color: "#FFF",
    ...fontMaker({ weight: "600" })
  },
  displayPosition: {
    fontSize: sizeFont(4),
    color: "#FFF"
  },
  company: {
    fontSize: sizeFont(4),
    color: "#FFF"
  },
  title: {
    fontSize: sizeFont(6),
    lineHeight: 26,
    color: "#FFF",
    paddingHorizontal: 22,
    marginTop: 25,
    marginBottom: 20,
    ...fontMaker({ weight: "600" })
  },
  containerEvents: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 5
  },
  containerEventItem: {
    marginBottom: 20,
    ...CommonStyles.boxShadow
  },
  smallDisplayName: {
    fontSize: sizeFont(4.5),
    color: "#FFF",
    ...fontMaker({ weight: "600" })
  },
  smallDisplayPosition: {
    fontSize: sizeFont(3.5),
    color: "#FFF"
  },
});
