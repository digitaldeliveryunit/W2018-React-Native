import { StyleSheet } from "react-native";
import { CommonStyles, COLORS } from "../../helpers/common-styles";
import { sizeWidth, sizeHeight } from "../../helpers/size.helper";

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
        width: sizeWidth(100),
        minHeight: sizeHeight(100) - 150
    },
    founds: {
        marginTop: 40,
        paddingLeft: 10,
        color: "#FFF",
        fontSize: 16
    },
    foregroundSection: {
        alignItems: "center"
    },
    stickyHeader: {
        alignItems: "center",
        height: 80,
        justifyContent: "center",
        backgroundColor: "rgb(64, 54, 129)",
        opacity: 0.95,
        shadowColor: "#060606",
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 10
        }
    }
});
