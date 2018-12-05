import { StyleSheet } from "react-native";
import { sizeWidth, sizeFont } from "../helpers/size.helper";
import { fontMaker } from "../helpers/font.helper";

export const COLORS = {
  GRAY: "#979797",
  LIGHT_GRAY: "#DFDFDF",
  LIGHT_GRAY_WHITE: "#F7F7F7",
  GRAYISH_BLUE: "#3C5063",
  GREEN_PET_ICT: "#00A19C",
  SOFT_PURPLE: "#58478D",
  PALE_NAVY: "#C4C9DF",
  LIGHT_BORDER: "#F3F3F3",
  CARD_PLACEHOLDER: "#F3F3F3"
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
    fontSize: sizeFont(6),
    marginBottom: -5,
    paddingLeft: sizeWidth(5),
    ...fontMaker({ weight: "600" })
  },
  horizontalDivider: {
    backgroundColor: COLORS.PALE_NAVY,
    height: 1
  },
  boxShadow: {
    shadowColor: "#060606",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 3
  }
});
