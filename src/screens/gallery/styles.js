import { StyleSheet } from "react-native";
import { CommonStyles } from "../../helpers/common-styles";
import { sizeHeight } from "../../helpers/size.helper";

export default StyleSheet.create({
    listContainer: {
        paddingLeft: 15,
        paddingRight: 15
    },
    emptyContainer: {
        height: sizeHeight(25),
        justifyContent: "center",
        alignItems: "center"
    }
});
