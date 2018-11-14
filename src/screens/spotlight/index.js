import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image, Text, FlatList } from "react-native";
import _ from "lodash";
import styles from "./styles";
import WrapperComponent from "../../components/Wrapper.component";
import SpotlightCard from "../../components/SpotlightCard";
import { CommonStyles } from "../../helpers/common-styles";
import { spotlightList } from "../../helpers/mock-data.helper";

class Spotlight extends Component {
  _renderHeader = () => (
    <View style={{ ...CommonStyles.header, paddingHorizontal: 15 }}>
      <Image
        source={require("../../../assets/images/left_white.png")}
        style={styles.backIcon}
        resizeMode={"contain"}
      />
      <Text style={CommonStyles.title}>Spotlight</Text>
      <Image
        source={require("../../../assets/images/group.png")}
        style={styles.backIcon}
        resizeMode={"contain"}
      />
    </View>
  );

  _onPressSpotlightItem = spotlightId => {
    console.log("spotlightId", spotlightId);
  };

  _renderItem = (item, index) => {
    return (
      <SpotlightCard
        spotlight={item}
        onPressSpotlightItem={this._onPressSpotlightItem}
      />
    );
  };

  _keyExtractor = (item, index) => index.toString();

  render() {
    const spotlightCouples = _.chunk(spotlightList, 2);
    return (
      <WrapperComponent>
        {this._renderHeader()}
        <FlatList
          data={spotlightCouples}
          renderItem={({ item, index }) => this._renderItem(item, index)}
          keyExtractor={this._keyExtractor}
          showsVerticalScrollIndicator={false}
        />
      </WrapperComponent>
    );
  }
}

export default connect(
  null,
  null
)(Spotlight);
