import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import _ from "lodash";
import styles from "./styles";
import WrapperComponent from "../../components/Wrapper.component";
import SpotlightCard from "../../components/SpotlightCard";
import { CommonStyles } from "../../helpers/common-styles";
import { spotlightList } from "../../helpers/mock-data.helper";
import DetailHeader from "../../components/DetailHeader";

class Spotlight extends Component {
  _renderRightHeader = () => (
    <TouchableOpacity>
      <Image
        source={require("../../../assets/images/group.png")}
        style={styles.backIcon}
        resizeMode={"contain"}
      />
    </TouchableOpacity>
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
        <DetailHeader title={"Spotlight"}
          RightComponent={() => this._renderRightHeader()} />
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
