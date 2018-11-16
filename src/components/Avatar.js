import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import FastImage from "react-native-fast-image";
import _ from "lodash";
import { getShortcutName } from "../helpers/function.helper";
import { COLORS } from "../helpers/common-styles";

const Avatar = props => {
  const { containerStyles, size, user } = props;
  const avatarStyle = [props.avatarStyle, {
    width: size || 40,
    height: size || 40,
    borderRadius: size ? (size / 2) : 20
  }];
  return (
    <View style={containerStyles}>
      <View style={avatarStyle}>
        {user ? (
          user.photo ? (
            <FastImage
              style={avatarStyle}
              source={{ uri: user.photo }}
              resizeMode={FastImage.resizeMode.cover}
            />
          ) : (
            <Text style={{ color: "#FFF", fontSize: 15 }}>
              {getShortcutName(user.firstName, user.lastName, user.displayName)}
            </Text>
          )
        ) : (
          <Text style={{ color: "#FFF", fontSize: 15 }}>{"N/A"}</Text>
        )}
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(195, 195, 195)",
    shadowColor: COLORS.GRAYISH_BLUE,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 9,
    shadowOpacity: 0.3
  }
};

export default Avatar;
