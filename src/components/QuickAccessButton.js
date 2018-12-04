import React, { Component } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { TOGGLE_MENU } from "../actions/quick-access-menu.action";
import {COLORS, CommonStyles} from "../helpers/common-styles";
import { sizeWidth } from "../helpers/size.helper";

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    bottom: 85,
    right: 25
  },
  item: {
    width: sizeWidth(14),
    height: sizeWidth(14),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: sizeWidth(7),
    ...CommonStyles.boxShadow
  },
  activedItem: {
    backgroundColor: "rgb(55, 163, 184)"
  }
});

class QuickAccessButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.toggleMenu(this.props.currentEvent)}
        style={[styles.menu, styles.item, styles.activedItem]}
      >
        <Image
          source={require("../../assets/images/menu.png")}
          resizeMode={"contain"}
          style={{
            width: sizeWidth(7),
            height: sizeWidth(7)
          }}
        />
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: (currentEvent) => dispatch({ type: TOGGLE_MENU, currentEvent })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(QuickAccessButton);
