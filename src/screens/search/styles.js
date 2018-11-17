import { StyleSheet } from "react-native";
import { CommonStyles, COLORS } from "../../helpers/common-styles";
import { sizeWidth } from "../../helpers/size.helper";

export default StyleSheet.create({
    listContainer: {
        paddingLeft: 15,
        paddingRight: 15
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
    searchResult: {
        flex: 1,
        width: sizeWidth(100),
        paddingTop: 30
    },
    founds: {
        paddingLeft: 20,
        paddingBottom: 10,
        color: "#FFF",
        fontSize: 16
    }
});
