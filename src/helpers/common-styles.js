import { StyleSheet } from "react-native";
import {
  sizeWidth
} from "../helpers/size.helper";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingTop: 30
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: sizeWidth(100),
    paddingRight: 20,
    marginBottom: 20
  },
  title: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 23,
    marginBottom: -5,
    paddingLeft: 30
  }
});
