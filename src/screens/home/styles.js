import { StyleSheet } from "react-native";
import { CommonStyles } from "../../helpers/common-styles";
import { sizeHeight, sizeWidth } from "../../helpers/size.helper";

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
    paddingTop: 25,
    paddingBottom: 10,
    backgroundColor: "rgb(64, 54, 129)",
    opacity: 0.95,
    shadowColor: "#060606",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 10
    }
  },
  stickyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: sizeWidth(90)
  },
  title: {
    fontSize: 17,
    color: "#FFF",
    fontWeight: "500"
  },
  closeIcon: {
    width: 16,
    height: 16
  },
  closeButton: {
    position: "absolute",
    left: 0
  }
});
