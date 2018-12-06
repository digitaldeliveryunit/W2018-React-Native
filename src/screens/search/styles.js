import { StyleSheet } from "react-native";
import { CommonStyles, COLORS } from "../../helpers/common-styles";
import { sizeWidth, sizeHeight } from "../../helpers/size.helper";
import { fontMaker, fontSize } from "../../helpers/font.helper";

export default StyleSheet.create({
  listContainer: {
    minHeight: sizeHeight(80),
    paddingTop: 10
  },
  searchBox: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    width: sizeWidth(94),
    paddingBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.PALE_NAVY
  },
  searchIcon: {
    width: sizeWidth(6),
    height: sizeWidth(6)
  },
  searchInput: {
    borderWidth: 0,
    width: "100%",
    color: "#FFF",
    paddingLeft: sizeWidth(1.5),
    paddingRight: sizeWidth(6.5),
    fontSize: fontSize.f18,
    ...fontMaker({})
  },
  founds: {
    marginTop: sizeHeight(5),
    color: "#FFF",
    fontSize: fontSize.f16
  },
  foregroundSection: {
    alignItems: "center"
  },
  stickyHeader: {
    alignItems: "center",
    height: sizeHeight(13),
    justifyContent: "center",
    backgroundColor: "rgb(64, 54, 129)",
    opacity: 0.95,
    shadowColor: "#060606",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 10
    }
  },
  emptyContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  emptyText: {
      fontSize: fontSize.f24,
      color: COLORS.GRAYISH_BLUE,
      paddingLeft: sizeWidth(10),
      paddingRight: sizeWidth(10),
      textAlign: "center",
      marginTop: sizeHeight(40)
  },
  emptyButton: {
    backgroundColor: "rgb(55, 163, 184)",
    paddingHorizontal: sizeWidth(10),
    paddingVertical: sizeWidth(2),
    borderRadius: sizeWidth(10),
    marginTop: sizeHeight(3),
    ...CommonStyles.boxShadow
  },
  emptyButtonText: { 
    color: "#FFF",
    fontSize: fontSize.f18
  }
});
