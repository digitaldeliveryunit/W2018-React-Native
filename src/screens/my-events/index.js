import React, { Component } from "react";
import { connect } from "react-redux";
import { View, TouchableOpacity, FlatList, RefreshControl } from "react-native";
import _ from "lodash";
import Text from "../../components/Text.component";
import styles from "./styles";
import { CommonStyles } from "../../helpers/common-styles";
import WrapperComponent from "../../components/Wrapper.component";
import Avatar from "../../components/Avatar";
import EventCard from "../..//components/EventCard";
import EventAPI from "../../api/event";
import AppActivityIndicator from "../../components/AppActivityIndicator";
import AppEmpty from "../../components/AppEmpty";
import {user} from "../../helpers/mock-data.helper";

class MyEvents extends Component {
  constructor () {
    super();
    this.state = {
      loadingMyEvents: false,
      loadingMore: false,
      loadedMyEvents: false,
      myEvents: [],
      refreshing: false,
      skip: 0,
      take: 10,
      hasNextItems: true
    };
    this.onFreshMyEvents = this.onFreshMyEvents.bind(this);
    this.onLoadMore = this.onLoadMore.bind(this);
  }
  render() {
    const { myEvents, loadingMyEvents } = this.state;
    return (
      <WrapperComponent>
        <View style={styles.listContainer}>
          <FlatList
            data={myEvents}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            onEndReached={this.onLoadMore}
            onEndReachedThreshold={1}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this.onFreshMyEvents}
                  tintColor="#FFF"
              />
            }
            ListHeaderComponent={this._renderHeader}
            ListFooterComponent={() => {
              return (
                this.state.loadingMore && <AppActivityIndicator color="#000" containerStyles={{
                  paddingBottom: 20
                }} />
              )
            }}
            ListEmptyComponent={() => loadingMyEvents ? <AppActivityIndicator /> : <AppEmpty textColor={"#FFF"} />}
          />
        </View>
      </WrapperComponent>
    );
  }

  componentDidMount () {
    this.loadMyEvents();
  }

  _renderHeader = () => (
    <View style={CommonStyles.header}>
      <Text style={CommonStyles.title}>myEvents</Text>
      <Avatar user={user} />
    </View>
  );

  _keyExtractor = (item, index) => `${index}`;

  _renderItem = ({item}) => (
    <TouchableOpacity 
      style={{ marginBottom: 20, paddingLeft: 15, paddingRight: 15, ...CommonStyles.boxShadow }} 
      onPress={() => this.onGoDetail(_.get(item, "eventId"))}>
      <EventCard event={item} />
    </TouchableOpacity>
  );

  onGoDetail (eventId) {
    this.props.navigation.navigate("EventDetail", { eventId });
  }

  async loadMyEvents () {
    const { take } = this.state;
    this.setState({
      loadingMyEvents: true,
      loadedMyEvents: false
    });
    try {
      const myEvents = await EventAPI.getUpcomingEvents({
        skip: 0,
        take
      });
      this.setState({
        loadingMyEvents: false,
        loadedMyEvents: true,
        myEvents,
        hasNextItems: myEvents.length === take
      });
    } catch (e) {
      this.setState({
        loadingMyEvents: false,
        loadedMyEvents: false,
        myEvents: [],
        hasNextItems: false
      });
    };
  }
  async onFreshMyEvents () {
    const { take } = this.state;
    this.setState({
      refreshing: true,
      skip: 0
    });
    const myEvents = await EventAPI.getUpcomingEvents({
      skip: 0,
      take
    });
    this.setState({
      myEvents,
      refreshing: false,
      hasNextItems: myEvents.length === take
    });
  }
  async onLoadMore () {
    const {
      hasNextItems,
      loadingMore,
      skip,
      take,
      myEvents
    } = this.state;
    if (!hasNextItems || loadingMore) {
      return;
    }
    this.setState({
      loadingMore: true
    });
    const nextSkip = skip + take;
    const nextEvents = await EventAPI.getUpcomingEvents({
      skip: nextSkip,
      take
    });
    this.setState({
      myEvents: myEvents.concat(nextEvents),
      skip: nextSkip,
      hasNextItems: nextEvents.length === take,
      loadingMore: false
    });
  }
}

export default connect(
  null,
  null
)(MyEvents);
