import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS, CommonStyles } from "../helpers/common-styles";
import { sizeWidth } from "../helpers/size.helper";

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 30,
    left: sizeWidth(3),
    zIndex: 2,
    width: sizeWidth(8),
    height: sizeWidth(8),
    backgroundColor: "rgb(55, 163, 184)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: sizeWidth(4),
    opacity: 0.8,
    ...CommonStyles.boxShadow
  },
  backIcon: {
    width: sizeWidth(4),
    height: sizeWidth(4),
    resizeMode: "contain"
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
      />
    </TouchableOpacity>
  );
};

export default BackButton;
