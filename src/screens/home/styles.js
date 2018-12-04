import { StyleSheet } from "react-native";
import { sizeHeight, sizeWidth, sizeFont } from "../../helpers/size.helper";
import { fontMaker } from "../../helpers/font.helper";
import { CommonStyles } from "../../helpers/common-styles";

export default StyleSheet.create({
  featuredLoadingContainer: {
    height: sizeHeight(30),
    justifyContent: "center",
    alignItems: "center"
  },
  emptyContainer: {
    height: sizeHeight(30),
    alignItems: "center",
    paddingTop: 10
  },
  emptyUpcomingContainer: {
    height: sizeHeight(40),
    alignItems: "center",
    paddingTop: 10
  },
  foregroundSection: {
    alignItems: "center"
  },
  stickyHeader: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(64, 54, 129)",
    opacity: 0.95,
    ...CommonStyles.boxShadow,
    height: sizeHeight(10),
    paddingTop: 10
  },
  stickyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: sizeWidth(90)
  },
  title: {
    fontSize: sizeFont(5.5),
    color: "#FFF",
    ...fontMaker({ weight: "500" })
  },
  closeIcon: {
    width: sizeWidth(4.8),
    height: sizeWidth(4.8)
  },
  closeButton: {
    position: "absolute",
    left: 0
  }
});
