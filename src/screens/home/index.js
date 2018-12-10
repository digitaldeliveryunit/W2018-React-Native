import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image, TouchableOpacity, TouchableNativeFeedback, FlatList, Animated } from "react-native";
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
import { sizeHeight } from "../../helpers/size.helper";
import { isCloseToBottom } from "../../helpers/function.helper";
import CardPlaceholder from "../../components/CardPlaceholder";
import { sizeWidth } from "../../helpers/size.helper";
import AppInsightHelper from "../../helpers/app-insight.helper";

const heightOfForegroundDefault = sizeHeight(50);

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loadingFeatured: false,
      loadedFeatured: false,
      featuredEvents: [],
      loadingUpcoming: false,
      loadingNextUpcoming: false,
      loadedUpcoming: false,
      upcomingEvents: [],
      upcomingContinuationKey: null,
      takeUpcoming: 10,
      hasNextUpcomingItems: false,
      heightOfForeground: heightOfForegroundDefault
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
          backgroundScrollSpeed={10}
          fadeOutForeground={false}
          parallaxHeaderHeight={this.state.heightOfForeground}
          renderForeground={this._renderForeground}
          stickyHeaderHeight={sizeWidth(6)}
          renderStickyHeader={this._renderStickyHeader}
          contentBackgroundColor={"transparent"}
          showsVerticalScrollIndicator={false}
          onMomentumScrollEnd={this.onScroll}
          scrollEventThrottle={500}
        >
          {this._renderUpcomingEvents()}
        </ParallaxScrollView>
      </WrapperComponent>
    );
  }

  componentDidMount() {
    AppInsightHelper.trackEvent("Load featured events & upcoming events");
    this.loadFeaturedEvents();
    this.loadUpcomingEvents();
  }

  _renderHeader = () => {
    const { currentUser, loading } = this.props;
    return (
      <View style={CommonStyles.header}>
        <Text style={CommonStyles.title}>Featured Events</Text>
        <TouchableOpacity>
          <Avatar user={currentUser} loading={loading} />
        </TouchableOpacity>
      </View>
    );
  }

  _keyExtractor = (item, index) => `${index}`;
  _renderUpcomingEvents = () => {
    const { upcomingEvents, loadingNextUpcoming } = this.state;
    return (
      <View
        style={{
          backgroundColor: "#F1F3F5",
          minHeight: sizeHeight(80)
        }}
      >
        <Text style={[
          CommonStyles.title, 
          { 
            color: COLORS.GRAYISH_BLUE, 
            paddingLeft: sizeWidth(3),
            paddingTop: sizeWidth(3)
          }
        ]}>Upcoming Events</Text>
        <FlatList
          style={{
            paddingTop: sizeWidth(3)
          }}
          data={upcomingEvents}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => {
            return (
              loadingNextUpcoming && (
                <AppActivityIndicator
                  color="#000"
                  containerStyles={{
                    paddingBottom: 20
                  }}
                />
              )
            );
          }}
          ListEmptyComponent={<AppEmpty containerStyles={styles.emptyUpcomingContainer} />}
        />
      </View>
    );
  };

  _renderItem = ({ item }) => (
    <View style={{ marginBottom: sizeWidth(3), paddingHorizontal: sizeWidth(3) }}>
      <CardPlaceholder onReady={!this.state.loadingUpcoming}>
        <TouchableOpacity onPress={() => this.onGoDetail(_.get(item, "eventId"))} activeOpacity={0.8}>
          <EventCard event={item} />
        </TouchableOpacity>
      </CardPlaceholder>
    </View>
  );
  _renderForeground = () => {
    const { loadingFeatured, featuredEvents } = this.state;
    return (
      <View
        style={styles.foregroundSection}
        onLayout={event => {
          var { height } = event.nativeEvent.layout;
          if (height > heightOfForegroundDefault) {
            this.setState({
              heightOfForeground: height
            });
          }
        }}
      >
        {this._renderHeader()}
        <View style={{ width: sizeWidth(100), alignItems: "center" }}>
          <CardPlaceholder onReady={!loadingFeatured} width={sizeWidth(94)}>
          {
            _.isEmpty(featuredEvents) ? (
              <AppEmpty textColor={"#FFF"} containerStyles={styles.emptyContainer} />
            ) : (
              <EventsCarousel events={featuredEvents} navigation={this.props.navigation} />
            )
          }
          </CardPlaceholder>
        </View>
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

  onGoDetail(eventId) {
    this.props.navigation.navigate("About", { eventId });
  }

  async loadFeaturedEvents() {
    this.setState({
      loadingFeatured: true,
      loadedFeatured: false
    });
    try {
      // There are not many featured events, so 100 items are enough for that slide to show.
      const data = await EventAPI.getFeaturedEvents({
        take: 100
      });
      const { events: featuredEvents } = data;
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
    }
  }
  async loadUpcomingEvents() {
    const { takeUpcoming } = this.state;
    this.setState({
      loadingUpcoming: true,
      loadedUpcoming: false,
      upcomingEvents: [1, 2]
    });
    try {
      const data = await EventAPI.getUpcomingAllEvents({
        take: takeUpcoming
      });
      const { events, hasNextPage, continuationKey } = data;
      this.setState({
        loadingUpcoming: false,
        loadedUpcoming: true,
        upcomingEvents: events,
        hasNextUpcomingItems: hasNextPage,
        upcomingContinuationKey: continuationKey
      });
    } catch (e) {
      this.setState({
        loadingUpcoming: false,
        loadedUpcoming: false,
        upcomingEvents: [],
        hasNextUpcomingItems: false,
        upcomingContinuationKey: null
      });
    }
  }

  async onLoadMoreUpcoming() {
    const {
      hasNextUpcomingItems,
      loadingNextUpcoming,
      takeUpcoming,
      upcomingEvents,
      loadingUpcoming,
      upcomingContinuationKey
    } = this.state;
    if (!hasNextUpcomingItems || loadingNextUpcoming || loadingUpcoming) {
      return;
    }
    this.setState({
      loadingNextUpcoming: true
    });
    const data = await EventAPI.getUpcomingAllEvents({
      continuationKey: upcomingContinuationKey,
      take: takeUpcoming
    });
    const { events, continuationKey, hasNextPage } = data;
    this.setState({
      loadingNextUpcoming: false,
      upcomingEvents: upcomingEvents.concat(events),
      hasNextUpcomingItems: hasNextPage,
      upcomingContinuationKey: continuationKey
    });
  }

  onScroll({ nativeEvent }) {
    if (isCloseToBottom(nativeEvent)) {
      this.onLoadMoreUpcoming();
    }
  }
}

const mapStateToProps = state => {
  return state.user;
};

export default connect(
  mapStateToProps,
  null
)(Home);
