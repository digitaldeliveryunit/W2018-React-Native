import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image, TouchableOpacity, FlatList, Animated } from "react-native";
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
import { user } from "../../helpers/mock-data.helper";
import { isCloseToBottom } from "../../helpers/function.helper";

const heightOfForegroundDefault = sizeHeight(70);

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
      hasNextUpcomingItems: true,
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
          stickyHeaderHeight={sizeHeight(10)}
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
    console.log("oke");
  }

  _renderHeader = () => (
    <View style={CommonStyles.header}>
      <Text style={CommonStyles.title}>Featured Events</Text>
      <TouchableOpacity>
        <Avatar user={user} />
      </TouchableOpacity>
    </View>
  );

  _keyExtractor = (item, index) => `${index}`;
  _renderUpcomingEvents = () => {
    const {loadingUpcoming, upcomingEvents, loadingNextUpcoming} = this.state;
    return (
      <View style={{ 
        backgroundColor: "#F1F3F5", 
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
      style={{ marginBottom: 20, padding: 5, ...CommonStyles.boxShadow }}
      onPress={() => this.onGoDetail(_.get(item, "eventId"))}>
      <EventCard event={item} />
    </TouchableOpacity>
  );
  _renderForeground = () => {
    const { loadingFeatured, featuredEvents } = this.state;
    return (
      <View style={styles.foregroundSection} onLayout={(event) => {
        var {height} = event.nativeEvent.layout;
        if (height > heightOfForegroundDefault) {
          this.setState({
            heightOfForeground: height
          });
        }
      }}>
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

  onGoDetail (eventId) {
    this.props.navigation.navigate("About", { eventId });
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
    const { takeUpcoming } = this.state;
    this.setState({
      loadingUpcoming: true,
      loadedUpcoming: false
    });
    try {
      // console.log(upcomingEvents);
      const upcomingEvents = await EventAPI.getUpcomingAllEvents({
        skip: 0,
        take: takeUpcoming
      });
      console.log(upcomingEvents);
      this.setState({
        loadingUpcoming: false,
        loadedUpcoming: true,
        upcomingEvents,
        hasNextUpcomingItems: upcomingEvents.length === takeUpcoming
      });
    } catch (e) {
      console.log(e);
      this.setState({
        loadingUpcoming: false,
        loadedUpcoming: false,
        upcomingEvents: [],
        hasNextUpcomingItems: false
      });
    };
  }

  async onLoadMoreUpcoming () {
    const {
      hasNextUpcomingItems, 
      loadingNextUpcoming, 
      skipUpcoming, 
      takeUpcoming,
      upcomingEvents
    } = this.state;
    if (!hasNextUpcomingItems || loadingNextUpcoming) {
      return;
    }
    this.setState({
      loadingNextUpcoming: true
    });
    const nextSkip = skipUpcoming + takeUpcoming;
    const nextUpcomingEvents = await EventAPI.getUpcomingAllEvents({
      skip: nextSkip,
      take: takeUpcoming
    });
    this.setState({
      upcomingEvents: upcomingEvents.concat(nextUpcomingEvents),
      skipUpcoming: nextSkip,
      hasNextUpcomingItems: nextUpcomingEvents.length === takeUpcoming,
      loadingNextUpcoming: false
    });
  }

  onScroll ({nativeEvent}) {
    if (isCloseToBottom(nativeEvent)) {
      this.onLoadMoreUpcoming();
    }
  }
}

export default connect(
  null,
  null
)(Home);
