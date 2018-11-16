import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import _ from "lodash";
import styles from "./styles";
import WrapperComponent from "../../components/Wrapper.component";
import Avatar from "../../components/Avatar";
import EventCard from "../../components/EventCard";
import { user, eventList } from "../../helpers/mock-data.helper";

class ProfileComponent extends Component {
  _onPressEventItem = (eventId) => {
    this.props.navigation.navigate("EventDetail");
  };

  _renderEventItem = (event, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.containerEventItem}
        onPress={() => this._onPressEventItem(_.get(event, "id"))}
      >
        <EventCard event={event} withoutBottom />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <WrapperComponent>
        <View style={styles.containerHeader}>
          <Avatar user={user} size={84} />
          <View style={styles.containerInfo}>
            <Text style={styles.displayName}>{_.get(user, "displayName")}</Text>
            <Text style={styles.displayPosition}>
              {_.get(user, "displayPosition")}
            </Text>
            <Text style={styles.company}>{_.get(user, "company")}</Text>
          </View>
        </View>
        <Text style={styles.title}>Past Events</Text>
        <FlatList
          style={styles.containerEvents}
          data={eventList}
          keyExtractor={(event, index) => index.toString()}
          renderItem={this._renderEventItem}
          showsVerticalScrollIndicator={false}
        />
      </WrapperComponent>
    );
  }
}

export default connect(
  null,
  null
)(ProfileComponent);
