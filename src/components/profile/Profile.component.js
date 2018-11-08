import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import styles from "./Profile.style";
import WrapperComponent from "../Wrapper.component";

class ProfileComponent extends Component {
  render() {
    return (
      <WrapperComponent>
        <Text>Profile</Text>
      </WrapperComponent>
    );
  }
}

export default connect(
  null,
  null
)(ProfileComponent);
