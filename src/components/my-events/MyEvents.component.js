import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import styles from "./MyEvents.style";
import WrapperComponent from "../Wrapper.component";

class MyEventsComponent extends Component {
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
)(MyEventsComponent);
