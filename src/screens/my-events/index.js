import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, Button } from "react-native";
import styles from "./styles";
import WrapperComponent from "../../components/Wrapper.component";

class MyEvents extends Component {
  render() {
    return (
      <WrapperComponent>
        <Text>MyEvents</Text>
        <Button
          title="Go to event detail"
          onPress={() => this.props.navigation.navigate("EventDetail")}
        />
      </WrapperComponent>
    );
  }
}

export default connect(
  null,
  null
)(MyEvents);
