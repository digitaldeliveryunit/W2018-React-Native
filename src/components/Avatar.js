import React from "react";
import { View } from "react-native";
import Text from "./Text.component";
import PropTypes from "prop-types";
import FastImage from "react-native-fast-image";
import _ from "lodash";
import { getShortcutName } from "../helpers/function.helper";
import { COLORS } from "../helpers/common-styles";
import { sizeWidth } from "../helpers/size.helper";
import { fontMaker, fontSize } from "../helpers/font.helper";

const Avatar = props => {
  const { containerStyles, textStyle, size, user } = props;
  const avatarStyle = [props.avatarStyle, {
    width: size || sizeWidth(12),
    height: size || sizeWidth(12),
    borderRadius: size ? (size / 2) : sizeWidth(6)
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
            <Text style={textStyle}>
              {getShortcutName(user.firstName, user.lastName, user.displayName)}
            </Text>
          )
        ) : (
          <Text style={textStyle}>{"N/A"}</Text>
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
  },
  textStyle: { 
    color: "#FFF", 
    fontSize: fontSize.f16,
    ...fontMaker({ weight: "600" })
  }
};

export default Avatar;
