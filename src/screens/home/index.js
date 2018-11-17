import React, { Component } from "react";
import { connect } from "react-redux";
import { View, ScrollView, TouchableOpacity } from "react-native";
import Text from "../../components/Text.component";
import styles from "./styles";
import { CommonStyles, COLORS } from "../../helpers/common-styles";
import WrapperComponent from "../../components/Wrapper.component";
import Avatar from "../../components/Avatar";
import EventsCarousel from "../../components/home/EventsCarousel";
import EventCard from "../..//components/EventCard";

const featuredEvents = [
  {
    id: 1, isPrivate: false, isUpcoming: false
  },
  {
    id: 2, isPrivate: true, isUpcoming: false
  },
  {
    id: 3, isPrivate: true, isUpcoming: false
  },
  {
    id: 4, isPrivate: false, isUpcoming: false
  },
  {
    id: 5, isPrivate: true, isUpcoming: false
  }
];

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

class Home extends Component {
  render() {
    return (
      <WrapperComponent>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {this._renderHeader()}
          <EventsCarousel events={featuredEvents} navigation={this.props.navigation} />
          {this._renderUpcomingEvents(upcomingEvents)}
        </ScrollView>
      </WrapperComponent>
    );
  }

  _renderHeader = () => (
    <View style={CommonStyles.header}>
      <Text style={CommonStyles.title}>Featured Events</Text>
      <TouchableOpacity>
        <Avatar user={{
          firstName: "Khoa",
          lastName: "Tran"
        }} />
      </TouchableOpacity>
    </View>
  );

  _renderUpcomingEvents = (events) => (
    <View style={{ 
      flex: 1, 
      backgroundColor: "#F1F3F5", 
      marginTop: 20, 
      paddingTop: 20,
      paddingBottom: 20 }}>
      <Text style={[CommonStyles.title, { color: COLORS.GRAYISH_BLUE }]}>Upcoming Events</Text>
      <View style={{
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 25
      }}>
      {
        events.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={{ marginBottom: 20 }}
            onPress={() => this.onGoDetail()}>
            <EventCard event={item} />
          </TouchableOpacity>
        ))
      }
      </View>
    </View>
  );

  onGoDetail () {
    this.props.navigation.navigate("EventDetail");
  }
}

export default connect(
  null,
  null
)(Home);
