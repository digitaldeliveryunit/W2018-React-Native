import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS, CommonStyles } from "../helpers/common-styles";
import { sizeWidth } from "../helpers/size.helper";

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 30,
    left: sizeWidth(6),
    zIndex: 2,
    width: sizeWidth(10),
    height: sizeWidth(10),
    backgroundColor: "rgb(55, 163, 184)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: sizeWidth(5),
    opacity: 0.5,
    ...CommonStyles.boxShadow
  },
  backIcon: {
    width: sizeWidth(6),
    height: sizeWidth(6)
  }
});

const BackButton = props => {
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => props.navigation.goBack()}
    >
      <Image
        source={require("../../assets/images/left_white.png")}
        style={styles.backIcon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default BackButton;
