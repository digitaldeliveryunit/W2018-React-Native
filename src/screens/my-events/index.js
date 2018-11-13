import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import { CommonStyles } from "../../helpers/common-styles";
import WrapperComponent from "../../components/Wrapper.component";
import Avatar from "../../components/Avatar";
import EventCard from "../..//components/EventCard";

const upcomingEvents = [
  {
    id: 1, isPrivate: false, isUpcoming: true
  },
  {
    id: 2, isPrivate: true, isUpcoming: true
  },
  {
    id: 3, isPrivate: true, isUpcoming: true
  },
  {
    id: 4, isPrivate: false, isUpcoming: true
  },
  {
    id: 5, isPrivate: true, isUpcoming: true
  }
];

class MyEvents extends Component {
  render() {
    return (
      <WrapperComponent>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {this._renderHeader()}
          {this._renderMyEvents(upcomingEvents)}
        </ScrollView>
      </WrapperComponent>
    );
  }

  _renderHeader = () => (
    <View style={CommonStyles.header}>
      <Text style={CommonStyles.title}>myEvents</Text>
      <Avatar user={{
        firstName: "Khoa",
        lastName: "Tran"
      }} />
    </View>
  );

  _renderMyEvents = (events) => (
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
)(MyEvents);
