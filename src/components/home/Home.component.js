import React, { Component } from "react";
import { connect } from "react-redux";
import { Platform, View, Text, ActivityIndicator } from "react-native";
import styles from "./Home.style";
import { DEMO_REQUESTED } from "../../actions";

function mapDispatchToProps(dispatch) {
  return {
    requestDemo: () => {
      dispatch({ type: DEMO_REQUESTED });
    }
  };
}

function mapStateToProps(state) {
  return {
    demo: state.demo
  };
}

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

class HomeComponent extends Component {
  componentDidMount() {
    this.props.requestDemo();
  }
  render() {
    const { post, fetching, fetched, fetchFailed } = this.props.demo;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        {fetching && <ActivityIndicator />}
        {fetched && <Text style={styles.welcome}>{post.title}</Text>}
        {fetchFailed && <Text style={styles.welcome}>Cannot Load Post!</Text>}
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
