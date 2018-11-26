import { StyleSheet } from "react-native";
import { CommonStyles } from "../../helpers/common-styles";

export default StyleSheet.create({
  foregroundSection: {
    paddingTop: 40
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingBottom: 12
  },
  stickyHeader: {
    paddingTop: 25,
    backgroundColor: "rgba(64, 54, 129, .95)",
    shadowColor: "#060606",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 6
    }
  },
  containerInfo: {
    flexDirection: "column",
    paddingLeft: 30,
    justifyContent: "center"
  },
  displayName: {
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 25,
    color: "#FFF"
  },
  displayPosition: {
    marginTop: 1,
    fontSize: 16,
    lineHeight: 25,
    color: "#FFF"
  },
  company: {
    marginTop: 5,
    fontSize: 14,
    lineHeight: 25,
    color: "#FFF"
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 26,
    color: "#FFF",
    paddingHorizontal: 22,
    marginTop: 25,
    marginBottom: 20
  },
  containerEvents: {
    paddingLeft: 15,
    paddingRight: 15
  },
  containerEventItem: {
    marginBottom: 20,
    ...CommonStyles.boxShadow
  }
});
