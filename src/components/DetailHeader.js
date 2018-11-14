import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { sizeWidth } from "../helpers/size.helper";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: sizeWidth(90),
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  backButton: {
    position: "absolute",
    left: 0
  },
  backIcon: {
    width: 20,
    height: 20
  },
  title: {
    fontSize: 17,
    color: "#FFF",
    fontWeight: "500"
  }
});

const DetailHeader = props => {
  const {title, onBack} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Image source={require("../../assets/images/left_white.png")} style={styles.backIcon} resizeMode="contain" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

DetailHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func
};

DetailHeader.defaultProps = {
  title: "[Title]"
};

export default DetailHeader;
