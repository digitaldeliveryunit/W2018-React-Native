import React, { Component } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { CommonStyles } from "../helpers/common-styles";

const styles = StyleSheet.create({
  container: CommonStyles.container
});

export default class WrapperComponent extends Component {
  render() {
    return (
      <ImageBackground 
        source={require("../../assets/images/background.png")}
        style={styles.container}>
        {this.props.children}
      </ImageBackground>
    );
  }
}
