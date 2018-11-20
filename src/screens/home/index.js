import React, { Component } from "react";
import { connect } from "react-redux";
import { View, ScrollView, TouchableOpacity, FlatList } from "react-native";
import Text from "../../components/Text.component";
import styles from "./styles";
import { CommonStyles, COLORS } from "../../helpers/common-styles";
import WrapperComponent from "../../components/Wrapper.component";
import Avatar from "../../components/Avatar";
import EventsCarousel from "../../components/home/EventsCarousel";
import EventCard from "../../components/EventCard";
import AppActivityIndicator from "../../components/AppActivityIndicator";
import EventAPI from "../../api/event";

class Home extends Component {
  constructor () {
    super();
    this.state = {
      loadingFeatured: false,
      loadedFeatured: false,
      featuredEvents: [],
      loadingUpcoming: false,
      loadingNextUpcoming: false,
      loadedUpcoming: false,
      upcomingEvents: [],
      skipUpcoming: 0,
      takeUpcoming: 10,
      hasNextUpcomingItems: true
    };
    this.onScroll = this.onScroll.bind(this);
  }
  render() {
    const { loadingFeatured, featuredEvents, loadingUpcoming, upcomingEvents } = this.state;
    return (
      <WrapperComponent>
        <ScrollView 
          style={{ flex: 1 }} 
          showsVerticalScrollIndicator={false}
          onMomentumScrollEnd={this.onScroll}
          scrollEventThrottle={500}>
          {this._renderHeader()}
          {
            loadingFeatured ? (
              <AppActivityIndicator containerStyles={styles.featuredLoadingContainer} />
            ) : (
              <EventsCarousel events={featuredEvents} navigation={this.props.navigation} />
            )
          }
          {
            loadingUpcoming ? (
              <AppActivityIndicator color="#000" />
            ) : this._renderUpcomingEvents(upcomingEvents)
          }
        </ScrollView>
      </WrapperComponent>
    );
  }

  componentDidMount () {
    this.loadFeaturedEvents();
    this.loadUpcomingEvents();
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

  _keyExtractor = (item, index) => `${index}`;

  _renderUpcomingEvents = (events) => (
    <View style={{ 
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
        <FlatList
          data={events}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          showsVerticalScrollIndicator={false}
        />
        {
          this.state.loadingNextUpcoming && (
            <AppActivityIndicator color="#000" containerStyles={{
              paddingBottom: 20
            }} />
          )
        }
      </View>
    </View>
  );

  _renderItem = ({item}) => (
    <TouchableOpacity 
      style={{ marginBottom: 20 }}
      onPress={() => this.onGoDetail()}>
      <EventCard event={item} />
    </TouchableOpacity>
  );

  onGoDetail () {
    this.props.navigation.navigate("EventDetail");
  }

  async loadFeaturedEvents () {
    this.setState({
      loadingFeatured: true,
      loadedFeatured: false
    });
    try {
      // There are not many featured events, so 100 items are enough for that slide to show.
      const featuredEvents = await EventAPI.getFeaturedEvents({
        skip: 0,
        take: 100
      });
      this.setState({
        loadingFeatured: false,
        loadedFeatured: true,
        featuredEvents
      });
    } catch (e) {
      this.setState({
        loadingFeatured: false,
        loadedFeatured: true,
        featuredEvents: []
      });
    };
  }
  async loadUpcomingEvents () {
    this.setState({
      loadingUpcoming: true,
      loadedUpcoming: false
    });
    try {
      const upcomingEvents = await EventAPI.getUpcomingAllEvents({
        skip: 0,
        take: this.state.takeUpcoming
      });
      this.setState({
        loadingUpcoming: false,
        loadedUpcoming: true,
        upcomingEvents,
        hasNextUpcomingItems: upcomingEvents.length === this.state.takeUpcoming
      });
    } catch (e) {
      this.setState({
        loadingUpcoming: false,
        loadedUpcoming: false,
        upcomingEvents: [],
        hasNextUpcomingItems: false
      });
    };
  }

  async onLoadMoreUpcoming () {
    if (!this.state.hasNextUpcomingItems || this.state.loadingNextUpcoming) {
      return;
    }
    this.setState({
      loadingNextUpcoming: true
    });
    const nextSkip = this.state.skipUpcoming + this.state.takeUpcoming;
    const nextUpcomingEvents = await EventAPI.getUpcomingAllEvents({
      skip: nextSkip,
      take: this.state.take
    });
    this.setState({
      upcomingEvents: this.state.upcomingEvents.concat(nextUpcomingEvents),
      skipUpcoming: nextSkip,
      hasNextUpcomingItems: nextUpcomingEvents.length === this.state.takeUpcoming,
      loadingNextUpcoming: false
    });
  }

  isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 50;
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
  };

  onScroll ({nativeEvent}) {
    if (this.isCloseToBottom(nativeEvent)) {
      this.onLoadMoreUpcoming();
    }
  }
}

export default connect(
  null,
  null
)(Home);
