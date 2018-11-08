import React, { Component } from "react";
import { ImageBackground } from "react-native";
import styles from "./Wrapper.style";

export default class WrapperComponent extends Component {
  render() {
    return (
      <ImageBackground source={require("../../assets/images/background.png")} style={styles.container}>
        {this.props.children}
      </ImageBackground>
    );
  }
}
