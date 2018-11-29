import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl
} from "react-native";
import _ from "lodash";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import styles from "./styles";
import WrapperComponent from "../../components/Wrapper.component";
import Avatar from "../../components/Avatar";
import EventCard from "../../components/EventCard";
import AppActivityIndicator from "../../components/AppActivityIndicator";
import EventAPI from "../../api/event";
import { user } from "../../helpers/mock-data.helper";
import { CommonStyles } from "../../helpers/common-styles";

class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingPastEvents: false,
      loadingMore: false,
      loadedPastEvents: false,
      pastEvents: [],
      refreshing: false,
      skip: 0,
      take: 10,
      hasNextItems: true
    };
    this.onFreshPastEvents = this.onFreshPastEvents.bind(this);
    this.onLoadMore = this.onLoadMore.bind(this);
  }

  _onPressEventItem = (eventId) => {
    this.props.navigation.navigate("About", { eventId });
  };

  _keyExtractor = (item, index) => `${index}`;

  _renderEventItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.containerEventItem}
        onPress={() => this._onPressEventItem(_.get(item, "eventId"))}
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
    const { pastEvents, refreshing } = this.state;
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
            contentContainerStyle={styles.containerEvents}
            data={pastEvents}
            keyExtractor={this._keyExtractor}
            onEndReached={this.onLoadMore}
            onEndReachedThreshold={1}
            renderItem={this._renderEventItem}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={this.onFreshPastEvents}
                tintColor="#FFF"
              />
            }
            ListFooterComponent={() => {
              return (
                this.state.loadingMore && (
                  <AppActivityIndicator
                    color="#000"
                    containerStyles={{
                      paddingBottom: 20
                    }}
                  />
                )
              );
            }}
            ListEmptyComponent={<AppActivityIndicator />}
          />
        </ParallaxScrollView>
      </WrapperComponent>
    );
  }

  componentDidMount() {
    this.loadPastEvents();
  }

  async loadPastEvents() {
    const { take } = this.state;
    this.setState({
      loadingPastEvents: true,
      loadedPastEvents: false
    });
    try {
      const pastEvents = await EventAPI.getPastEvents({
        skip: 0,
        take
      });
      this.setState({
        loadingPastEvents: false,
        loadedPastEvents: true,
        pastEvents,
        hasNextItems: pastEvents.length === take
      });
    } catch (e) {
      this.setState({
        loadingPastEvents: false,
        loadedPastEvents: false,
        myEvents: [],
        hasNextItems: false
      });
    }
  }

  async onFreshPastEvents() {
    const { take } = this.state;
    this.setState({
      refreshing: true,
      skip: 0
    });
    const pastEvents = await EventAPI.getPastEvents({
      skip: 0,
      take
    });
    this.setState({
      pastEvents,
      refreshing: false,
      hasNextItems: pastEvents.length === take
    });
  }

  async onLoadMore() {
    const {
      hasNextItems,
      loadingMore,
      skip,
      take,
      pastEvents
    } = this.state;
    if (!hasNextItems || loadingMore) {
      return;
    }
    this.setState({
      loadingMore: true
    });
    const nextSkip = skip + take;
    const nextEvents = await EventAPI.getPastEvents({
      skip: nextSkip,
      take
    });
    this.setState({
      pastEvents: pastEvents.concat(nextEvents),
      skip: nextSkip,
      hasNextItems: nextEvents.length === ttake,
      loadingMore: false
    });
  }

}

export default connect(
  null,
  null
)(ProfileComponent);
