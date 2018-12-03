import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  WebView
} from "react-native";
import _ from "lodash";
import styles from "./styles";
import WrapperComponent from "../../components/Wrapper.component";
import DetailHeader from "../../components/DetailHeader";
import QuickAccessButton from "../../components/QuickAccessButton";
import TabBarBottom from "../../components/tab-bar/TabBarBottom";

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLoadEnd: false
    }
  }

  render() {
    const { currentEvent } = this.props.navigation.state.params;
    const sourceUrl = "https://www.google.com/";

    return (
      <WrapperComponent>
        <View style={styles.wrapper}>
          <DetailHeader title={"Feedback"} />
          <View style={styles.containerWebview}>
            <WebView
              style={styles.webView}
              source={{ uri: sourceUrl }}
              onLoadEnd={() => this.setState({ onLoadEnd: true })}
              javaScriptEnabled={true}
              startInLoadingState={true}
            />
          </View>
        </View>
        <QuickAccessButton currentEvent={currentEvent} />
        <TabBarBottom navigation={this.props.navigation}/>
      </WrapperComponent>
    )
  }

}

export default connect(
  null,
  null
)(Feedback);
