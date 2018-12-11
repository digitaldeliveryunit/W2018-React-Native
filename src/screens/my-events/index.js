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
import CardPlaceholder from "../../components/CardPlaceholder";
import AppInsightHelper from "../../helpers/app-insight.helper";

class MyEvents extends Component {
  constructor() {
    super();
    this.state = {
      loadingMyEvents: false,
      loadingMore: false,
      loadedMyEvents: false,
      myEvents: [],
      refreshing: false,
      take: 10,
      hasNextPage: false,
      continuationKey: null
    };
    this.onFreshMyEvents = this.onFreshMyEvents.bind(this);
    this.onLoadMore = this.onLoadMore.bind(this);
  }
  render() {
    const { myEvents } = this.state;
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
            ListEmptyComponent={<AppEmpty textColor={"#FFF"} />}
          />
        </View>
      </WrapperComponent>
    );
  }

  componentDidMount() {
    this.loadMyEvents();
  }

  _renderHeader = () => {
    const { currentUser, loading } = this.props;
    return (
      <View style={CommonStyles.header}>
        <Text style={CommonStyles.title}>myEvents</Text>
        <Avatar user={currentUser} loading={loading} />
      </View>
    );
  };

  _keyExtractor = (item, index) => `${index}`;

  _renderItem = ({ item }) => {
    const { loadingMyEvents, refreshing } = this.state;
    return (
      <View style={styles.itemWrapper}>
        <CardPlaceholder onReady={!loadingMyEvents && !refreshing}>
          <TouchableOpacity
            onPress={() => this.onGoDetail(_.get(item, "eventId"))}
          >
            {/* TODO 01 */}
          </TouchableOpacity>
        </CardPlaceholder>
      </View>
    );
  };

  onGoDetail(eventId) {
    this.props.navigation.navigate("About", { eventId });
  }

  async loadMyEvents() {
    AppInsightHelper.trackEvent("Load my events");
    const { take } = this.state;
    this.setState({
      loadingMyEvents: true,
      loadedMyEvents: false,
      myEvents: [1, 2, 3, 4]
    });
    try {
      const data = await EventAPI.getUpcomingEvents({
        take
      });
      const { events, hasNextPage, continuationKey } = data;
      this.setState({
        loadingMyEvents: false,
        loadedMyEvents: true,
        // TODO 02
        hasNextPage,
        continuationKey
      });
    } catch (e) {
      this.setState({
        loadingMyEvents: false,
        loadedMyEvents: false,
        myEvents: [],
        hasNextPage: false,
        continuationKey: null
      });
    }
  }
  async onFreshMyEvents() {
    const { take } = this.state;
    this.setState({
      refreshing: true,
      myEvents: [1, 2, 3, 4]
    });
    const data = await EventAPI.getUpcomingEvents({ take });
    const { events, hasNextPage, continuationKey } = data;
    this.setState({
      myEvents: events,
      refreshing: false,
      hasNextPage,
      continuationKey
    });
  }
  async onLoadMore() {
    const {
      hasNextPage,
      loadingMore,
      myEvents,
      loadingMyEvents,
      refreshing,
      continuationKey,
      take
    } = this.state;
    if (!hasNextPage || loadingMore || loadingMyEvents || refreshing) {
      return;
    }
    this.setState({
      loadingMore: true
    });
    const data = await EventAPI.getUpcomingEvents({
      take,
      continuationKey
    });
    this.setState({
      myEvents: myEvents.concat(data.events),
      hasNextPage: data.hasNextPage,
      continuationKey: data.continuationKey,
      loadingMore: false
    });
  }
}

const mapStateToProps = state => {
  return state.user;
};

export default connect(
  mapStateToProps,
  null
)(MyEvents);
