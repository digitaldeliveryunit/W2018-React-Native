import React from "react";
import { View } from "react-native";
import Text from "../components/Text.component";
import PropTypes from "prop-types";
import { fontMaker, fontSize } from "../helpers/font.helper";

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
    fontSize: fontSize.f16,
    ...fontMaker({ style: "italic" })
  },
  message: "There is nothing to show here",
  textColor: "#000"
};

export default AppEmpty;
