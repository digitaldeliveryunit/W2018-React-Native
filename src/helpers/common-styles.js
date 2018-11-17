import { StyleSheet } from "react-native";
import {
  sizeWidth
} from "../helpers/size.helper";

export const COLORS = {
  GRAY: "#979797",
  LIGHT_GRAY: "#DFDFDF",
  LIGHT_GRAY_WHITE: "#F7F7F7",
  GRAYISH_BLUE: "#3C5063",
  GREEN_PET_ICT: "#00A19C",
  SOFT_PURPLE: "#58478D",
  PALE_NAVY: "#C4C9DF",
  LIGHT_BORDER: "#F3F3F3"
};

export const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: sizeWidth(100),
    height: 70,
    paddingRight: 20,
    paddingTop: 30,
    marginBottom: 20
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: -5,
    paddingLeft: 30
  },
  horizontalDivider: {
    backgroundColor: COLORS.PALE_NAVY,
    height: 1
  }
});
