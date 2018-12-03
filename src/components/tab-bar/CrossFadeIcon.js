import React, { Component } from "react";
import PropTypes from "prop-types";
import { Animated, View, StyleSheet } from 'react-native';

export default class TabBarIcon extends Component {
  render() {
    const {
      route,
      activeOpacity,
      inactiveOpacity,
      activeTintColor,
      inactiveTintColor,
      renderIcon,
      horizontal,
      style,
    } = this.props;

    // We render the icon twice at the same position on top of each other:
    // active and inactive one, so we can fade between them.
    return (
      <View style={style}>
        <Animated.View style={[styles.icon, { opacity: activeOpacity }]}>
          {renderIcon({
            route,
            focused: true,
            horizontal,
            tintColor: activeTintColor,
          })}
        </Animated.View>
        <Animated.View style={[styles.icon, { opacity: inactiveOpacity }]}>
          {renderIcon({
            route,
            focused: false,
            horizontal,
            tintColor: inactiveTintColor,
          })}
        </Animated.View>
      </View>
    );
  }
}

TabBarIcon.propsTypes = {
  route: PropTypes.any,
  horizontal: PropTypes.boolean,
  activeOpacity: PropTypes.any,
  inactiveOpacity: PropTypes.any,
  activeTintColor: PropTypes.any,
  inactiveTintColor: PropTypes.any,
  renderIcon: PropTypes.any,
  style: PropTypes.any
};

const styles = StyleSheet.create({
  icon: {
    // We render the icon twice at the same position on top of each other:
    // active and inactive one, so we can fade between them:
    // Cover the whole iconContainer:
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    // Workaround for react-native >= 0.54 layout bug
    minWidth: 25
  }
});