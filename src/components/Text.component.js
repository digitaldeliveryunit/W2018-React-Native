import React, { PureComponent } from "react";
import { Text, StyleSheet } from "react-native";
import {fontMaker} from "../helpers/font.helper";

const EMPTY = "";

const styles = StyleSheet.create({
  default: Object.assign({
    backgroundColor: "transparent"
  }, fontMaker({}))
});

export default class AppText extends PureComponent {
  render() {
    const { style, numberOfLines } = this.props;
    const children =
      this.props.children !== null && this.props.children !== undefined
        ? this.props.children
        : EMPTY;

    return (
      <Text
        ellipsizeMode="tail"
        numberOfLines={numberOfLines}
        style={[styles.default, style]}
      >
        {children}
      </Text>
    );
  }
}
