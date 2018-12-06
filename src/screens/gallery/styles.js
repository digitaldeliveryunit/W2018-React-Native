import { StyleSheet } from "react-native";
import { sizeWidth, sizeHeight } from "../../helpers/size.helper";

export default StyleSheet.create({
    listContainer: {
        paddingHorizontal: sizeWidth(3)
    },
    emptyContainer: {
        height: sizeHeight(25),
        justifyContent: "center",
        alignItems: "center"
    }
});
