import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import styles from "./styles";
import { CommonStyles, COLORS } from "../../helpers/common-styles";
import WrapperComponent from "../../components/Wrapper.component";
import EventCard from "../..//components/EventCard";

const results = [
  {
    id: 1, isPrivate: false, isUpcoming: true
  },
  {
    id: 2, isPrivate: true, isUpcoming: true
  }
];

class Search extends Component {
  render() {
    return (
      <WrapperComponent>
        {this._renderHeader()}
        {this._renderSearchBox()}
        <View style={styles.searchResult}>
          <Text style={styles.founds}>Search Results (1)</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {this._renderSearchResult(results)}
          </ScrollView>
        </View>
      </WrapperComponent>
    );
  }

  _renderHeader = () => (
    <View style={CommonStyles.header}>
      <Text style={CommonStyles.title}>Search</Text>
    </View>
  );

  _renderSearchBox = () => (
    <View style={styles.searchBox}>
      <Image 
        source={require("../../../assets/images/search_white.png")}
        style={styles.searchIcon}
        resizeMode={"contain"} />
      <TextInput
          placeholder={"Say something..."}
          style={styles.searchInput}
          underlineColorAndroid="transparent"
          placeholderTextColor={COLORS.PALE_NAVY}
        />
    </View>
  );

  _renderSearchResult = (events) => (
    <View style={styles.listContainer}>
    {
      events.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          style={{ marginBottom: 20}} 
          onPress={() => this.onGoDetail()}>
          <EventCard event={item} />
        </TouchableOpacity>
      ))
    }
    </View>
  );

  onGoDetail () {
    this.props.navigation.navigate("EventDetail");
  }
}

export default connect(
  null,
  null
)(Search);
