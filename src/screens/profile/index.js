import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import _ from "lodash";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import styles from "./styles";
import WrapperComponent from "../../components/Wrapper.component";
import Avatar from "../../components/Avatar";
import EventCard from "../../components/EventCard";
import { user, eventList } from "../../helpers/mock-data.helper";

class ProfileComponent extends Component {
  _onPressEventItem = (eventId) => {
    this.props.navigation.navigate("EventDetail");
  };

  _renderEventItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.containerEventItem}
        onPress={() => this._onPressEventItem(_.get(item, "id"))}
      >
        <EventCard event={item} withoutBottom />
      </TouchableOpacity>
    );
  };

  _renderForeground = () => (
    <View style={styles.foregroundSection}>
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
    </View>
  );

  _renderStickyHeader = () => (
    <View style={[styles.containerHeader, styles.stickyHeader]}>
      <Avatar user={user} size={54} />
      <View style={styles.containerInfo}>
        <Text style={styles.displayName}>{_.get(user, "displayName")}</Text>
        <Text style={styles.displayPosition}>
          {_.get(user, "displayPosition")}
        </Text>
      </View>
    </View>
  );

  render() {
    return (
      <WrapperComponent>
        <ParallaxScrollView
          ref={ref => {
            this.parallaxScrollView = ref;
          }}
          backgroundColor={"transparent"}
          backgroundScrollSpeed={2}
          fadeOutForeground={true}
          parallaxHeaderHeight={200}
          renderForeground={this._renderForeground}
          stickyHeaderHeight={100}
          renderStickyHeader={this._renderStickyHeader}
          contentBackgroundColor={"transparent"}
          showsVerticalScrollIndicator={false}
        >
          <FlatList
            style={styles.containerEvents}
            data={eventList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this._renderEventItem}
            showsVerticalScrollIndicator={false}
          />
        </ParallaxScrollView>
      </WrapperComponent>
    );
  }
}

export default connect(
  null,
  null
)(ProfileComponent);
