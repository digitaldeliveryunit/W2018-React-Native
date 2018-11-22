import React from "react";
import { ActivityIndicator, View } from "react-native";
import PropTypes from "prop-types";

const AppActivityIndicator = props => {
  const { containerStyles } = props;
  return (
    <View style={containerStyles}>
      <ActivityIndicator size={props.size} color={props.color} />
    </View>
  );
};

AppActivityIndicator.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  containerStyles: PropTypes.object
};

AppActivityIndicator.defaultProps = {
  size: "large",
  color: "#FFF"
};

export default AppActivityIndicator;
