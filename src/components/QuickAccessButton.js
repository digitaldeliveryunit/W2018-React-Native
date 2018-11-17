import React, { Component } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { TOGGLE_MENU } from "../actions/quick-access-menu.action";
import {COLORS} from "../helpers/common-styles";

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    bottom: 15,
    right: 25
  },
  item: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    shadowColor: "#060606",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2
    },
    borderColor: COLORS.LIGHT_BORDER,
    borderWidth: 0.5
  },
  activedItem: {
    backgroundColor: "rgb(55, 163, 184)"
  }
});

class QuickAccessButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.toggleMenu()}
        style={[styles.menu, styles.item, styles.activedItem]}
      >
        <Image
          source={require("../../assets/images/menu.png")}
          resizeMode={"contain"}
          style={{
            width: 25,
            height: 25
          }}
        />
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => dispatch({ type: TOGGLE_MENU })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(QuickAccessButton);