import { StyleSheet } from "react-native";
import { CommonStyles, COLORS } from "../../helpers/common-styles";
import { sizeWidth, sizeHeight, sizeFont } from "../../helpers/size.helper";
import { fontMaker } from "../../helpers/font.helper";

export default StyleSheet.create({
  listContainer: {
    minHeight: sizeHeight(75),
    paddingTop: 10
  },
  searchBox: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    width: sizeWidth(90),
    paddingBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.PALE_NAVY
  },
  searchIcon: {
    width: 20,
    height: 20
  },
  searchInput: {
    borderWidth: 0,
    width: "100%",
    color: "#FFF",
    paddingLeft: 5,
    paddingRight: 12,
    fontSize: sizeFont(5),
    ...fontMaker({})
  },
  founds: {
    marginTop: 15,
    paddingLeft: 10,
    color: "#FFF",
    fontSize: sizeFont(4.5)
  },
  foregroundSection: {
    alignItems: "center"
  },
  stickyHeader: {
    alignItems: "center",
    height: sizeHeight(15),
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
      fontSize: sizeFont(6),
      color: COLORS.GRAYISH_BLUE,
      paddingLeft: sizeWidth(10),
      paddingRight: sizeWidth(10),
      textAlign: "center",
      marginTop: sizeHeight(40)
  },
  emptyButton: {
    backgroundColor: "rgb(55, 163, 184)",
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 25,
    marginTop: 20,
    ...CommonStyles.boxShadow
  },
  emptyButtonText: { 
    color: "#FFF", 
    fontSize: sizeFont(4.5)
  }
});
