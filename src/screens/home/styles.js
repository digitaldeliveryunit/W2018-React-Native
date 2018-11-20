import { StyleSheet } from "react-native";
import { CommonStyles } from "../../helpers/common-styles";
import { sizeHeight } from "../../helpers/size.helper";

export default StyleSheet.create({
   featuredLoadingContainer: {
       height: sizeHeight(40),
       justifyContent: "center",
       alignItems: "center"
   } 
});
