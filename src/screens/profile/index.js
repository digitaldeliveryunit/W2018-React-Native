import React, { Component } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import styles from "./styles";
import WrapperComponent from "../../components/Wrapper.component";

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
