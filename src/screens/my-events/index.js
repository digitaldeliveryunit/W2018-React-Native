import React, { Component } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import styles from "./styles";
import WrapperComponent from "../../components/Wrapper.component";

class MyEvents extends Component {
  render() {
    return (
      <WrapperComponent>
        <Text>MyEvents</Text>
      </WrapperComponent>
    );
  }
}

export default connect(
  null,
  null
)(MyEvents);
