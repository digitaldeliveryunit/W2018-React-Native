import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import styles from "./Search.style";
import WrapperComponent from "../Wrapper.component";
class SearchComponent extends Component {
  render() {
    return (
      <WrapperComponent>
        <Text>Search</Text>
      </WrapperComponent>
    );
  }
}

export default connect(
  null,
  null
)(SearchComponent);
