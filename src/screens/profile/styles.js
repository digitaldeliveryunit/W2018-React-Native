import { StyleSheet } from "react-native";
import { CommonStyles } from "../../helpers/common-styles";

export default StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    paddingHorizontal: 22,
    paddingTop: 40,
    justifyContent: "flex-start",
    alignItems: "center"
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
    ...CommonStyles.title,
    marginTop: 35,
    marginBottom: 10
  },
  containerEvents: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 12
  },
  containerEventItem: {
    marginBottom: 20
  }
});
