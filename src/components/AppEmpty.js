import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

const AppEmpty = props => {
  const { containerStyles, textStyles, message, textColor } = props;
  return (
    <View style={containerStyles}>
      <Text style={[textStyles, {color: textColor}]}>{message}</Text>
    </View>
  );
};

AppEmpty.propTypes = {
  containerStyles: PropTypes.object,
  textStyles: PropTypes.object,
  message: PropTypes.string,
  textColor: PropTypes.string
};

AppEmpty.defaultProps = {
  containerStyles: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  textStyles: {
    fontStyle: "italic",
    fontSize: 15
  },
  message: "There is nothing to show here",
  textColor: "#000"
};

export default AppEmpty;
