import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image, TouchableOpacity, FlatList } from "react-native";
import Text from "../../components/Text.component";
import styles from "./styles";
import { CommonStyles, COLORS } from "../../helpers/common-styles";
import WrapperComponent from "../../components/Wrapper.component";
import Avatar from "../../components/Avatar";
import EventsCarousel from "../../components/home/EventsCarousel";
import EventCard from "../../components/EventCard";
import AppActivityIndicator from "../../components/AppActivityIndicator";
import EventAPI from "../../api/event";
import _ from "lodash";
import AppEmpty from "../../components/AppEmpty";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { sizeHeight, sizeWidth } from "../../helpers/size.helper";

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
    return (
      <WrapperComponent>
        <ParallaxScrollView
          ref={ref => {
            this.parallaxScrollView = ref;
          }}
          backgroundColor={"transparent"}
          backgroundScrollSpeed={2}
          fadeOutForeground={true}
          parallaxHeaderHeight={sizeHeight(63)}
          renderForeground={this._renderForeground}
          stickyHeaderHeight={100}
          renderStickyHeader={this._renderStickyHeader}
          contentBackgroundColor={"transparent"}
          showsVerticalScrollIndicator={false}
          onMomentumScrollEnd={this.onScroll}
          scrollEventThrottle={500}
        >
        { 
          this._renderUpcomingEvents()
        }
        </ParallaxScrollView>
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
  _renderUpcomingEvents = () => {
    const {loadingUpcoming, upcomingEvents, loadingNextUpcoming} = this.state;
    return (
      <View style={{ 
        backgroundColor: "#F1F3F5", 
        marginTop: 20, 
        paddingTop: 20,
        paddingBottom: 20 }}>
        <Text style={[CommonStyles.title, { color: COLORS.GRAYISH_BLUE }]}>Upcoming Events</Text>
        {
          loadingUpcoming ? (
            <AppActivityIndicator color="#000" containerStyles={styles.emptyUpcomingContainer} />
          ) : (
            <FlatList
              style={{
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 25
              }}
              data={upcomingEvents}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={() => {
                return loadingNextUpcoming && (
                  <AppActivityIndicator color="#000" containerStyles={{
                    paddingBottom: 20
                  }} />
                );
              }}
              ListEmptyComponent={<AppEmpty containerStyles={styles.emptyUpcomingContainer} />}
            />
          )
        }
      </View>
    );
  };

  _renderItem = ({item}) => (
    <TouchableOpacity 
      style={{ marginBottom: 20 }}
      onPress={() => this.onGoDetail()}>
      <EventCard event={item} />
    </TouchableOpacity>
  );
  _renderForeground = () => {
    const { loadingFeatured, featuredEvents } = this.state;
    return (
      <View style={styles.foregroundSection}>
      { this._renderHeader() }
      {
        loadingFeatured ? (
          <AppActivityIndicator containerStyles={styles.featuredLoadingContainer} />
        ) : (
          _.isEmpty(featuredEvents) ? (
            <AppEmpty textColor={"#FFF"} containerStyles={styles.emptyContainer} />
          ) : (
            <EventsCarousel events={featuredEvents} navigation={this.props.navigation} />
          )
        )
      }
      </View>
    );
  };

  _renderStickyHeader = () => (
    <View style={styles.stickyHeader}>
      <View style={styles.stickyContainer}>
        <TouchableOpacity 
          style={styles.closeButton} 
          onPress={() => this.parallaxScrollView.scrollTo({ x: 0, y: 0, animated: true })}
        >
          <Image source={require("../../../assets/images/close_white.png")} style={styles.closeIcon} resizeMode="contain" />
        </TouchableOpacity>
        <Text style={styles.title}>HOME</Text>
      </View>
    </View>
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
