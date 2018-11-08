import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import styles from "./Home.style";
import WrapperComponent from "../Wrapper.component";

class HomeComponent extends Component {
  render() {
    return (
      <WrapperComponent>
        <Text>Home</Text>
      </WrapperComponent>
    );
  }
}

export default connect(
  null,
  null
)(HomeComponent);
