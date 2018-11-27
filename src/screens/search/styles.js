import { StyleSheet } from "react-native";
import { CommonStyles, COLORS } from "../../helpers/common-styles";
import { sizeWidth, sizeHeight } from "../../helpers/size.helper";

export default StyleSheet.create({
  listContainer: {
    minHeight: sizeHeight(100) - 160
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
    height: 45,
    color: "#FFF",
    paddingLeft: 5,
    paddingRight: 12,
    fontSize: 20
  },
  founds: {
    marginTop: 30,
    paddingLeft: 10,
    color: "#FFF",
    fontSize: 16
  },
  foregroundSection: {
    alignItems: "center"
  },
  stickyHeader: {
    alignItems: "center",
    height: 90,
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
      fontSize: 22,
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
    borderRadius: 20,
    marginTop: 20,
    ...CommonStyles.boxShadow
  },
  emptyButtonText: { 
    color: "#FFF", 
    fontSize: 17
  }
});
