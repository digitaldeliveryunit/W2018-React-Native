import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { getShortcutName } from "../helpers/function.helper";
import FastImage from "react-native-fast-image";

const Avatar = props => {
  const { containerStyles, avatarStyle, user } = props;
  return (
    <View style={containerStyles}>
        <View style={avatarStyle}>
        {
          user ? (
            user.photo 
            ? <FastImage style={avatarStyle} source={{uri: user.photo}} resizeMode={FastImage.resizeMode.cover} /> 
            : <Text style={{ color: "#FFF", fontSize: 15 }}>{getShortcutName(user.firstName, user.lastName, user.displayName)}</Text>
          ) : <Text style={{ color: "#FFF", fontSize: 15 }}>{"N/A"}</Text>
        }
        </View>
    </View>
  );
};

Avatar.propTypes = {
  avatarStyle: PropTypes.object.isRequired,
  containerStyles: PropTypes.object,
  user: PropTypes.object
};

Avatar.defaultProps = {
  avatarStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: "#FFF",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(195, 195, 195)"
  }
};

export default Avatar;
