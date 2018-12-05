import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image, FlatList, TouchableOpacity, Dimensions } from "react-native";
import Text from "../../components/Text.component";
import _ from "lodash";
import styles from "./styles";
import WrapperComponent from "../../components/Wrapper.component";
import SpotlightCard from "../../components/SpotlightCard";
import { CommonStyles, COLORS } from "../../helpers/common-styles";
import { spotlightList } from "../../helpers/mock-data.helper";
import DetailHeader from "../../components/DetailHeader";
import Carousel from "react-native-snap-carousel";
import { sizeWidth, sizeHeight, sizeFont } from "../../helpers/size.helper";
import {SpotlightItem} from "../../components/SpotlightCard";
import QuickAccessButton from "../../components/QuickAccessButton";
import SpotlightAPI from "../../api/spotlight";
import AppActivityIndicator from "../../components/AppActivityIndicator";
import AppEmpty from "../../components/AppEmpty";
import { fontMaker } from "../../helpers/font.helper";
import TabBarBottom from "../../components/tab-bar/TabBarBottom";

const ViewMode = {
  LIST: 0,
  CAROUSEL: 1
};

const eventId = "76e7d2a0-11f9-4a4c-b609-aada83a3535a";

class Spotlight extends Component {
  constructor (props) {
    super(props);
    const { currentEvent } = props.navigation.state.params;
    this.state = {
      viewMode: ViewMode.LIST,
      activeSlide: 0,
      currentEvent,
      loading: false,
      loadingMore: false,
      loaded: false,
      spotlights: [],
      refreshing: false,
      skip: 0,
      take: 10,
      hasNextItems: true
    };
    this._renderSpotlightFullCard = this._renderSpotlightFullCard.bind(this);
    this.onLoadMore = this.onLoadMore.bind(this);
  }

  _renderRightHeader = () => (
    <TouchableOpacity onPress={() => this.setState({ viewMode: ViewMode.LIST })}>
      <Image
        source={require("../../../assets/images/group.png")}
        style={styles.viewIcon}
        resizeMode={"contain"}
      />
    </TouchableOpacity>
  );

  _onPressSpotlightItem = (spotlightId) => {
    this.setState({
      viewMode: ViewMode.CAROUSEL,
      activeSlide: this.state.spotlights.findIndex(item => item.spotlightId === spotlightId)
    });
  };

  _renderItem = (item, index) => {
    const { loading, refreshing } = this.state;
    return (
        <SpotlightCard
          spotlight={item}
          onPressSpotlightItem={this._onPressSpotlightItem}
          loading={loading || refreshing}
        />
    );
  };

  _keyExtractor = (item, index) => index.toString();

  render() {
    const { spotlights, loadingMore, viewMode } = this.state;
    const spotlightCouples = _.chunk(spotlights, 2);
    return (
      <WrapperComponent>
        <View style={{
          flex: 1,
          alignItems: "center"
        }}>
        {
          viewMode === ViewMode.LIST ? (
            <DetailHeader title={"Spotlight"} />
          ) : (
            <DetailHeader title={"Spotlight"} RightComponent={() => this._renderRightHeader()} />
          )
        }
        {
          viewMode === ViewMode.LIST ? (
            <FlatList
              data={spotlightCouples}
              renderItem={({ item, index }) => this._renderItem(item, index)}
              keyExtractor={this._keyExtractor}
              onEndReached={this.onLoadMore}
              onEndReachedThreshold={1}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={() => {
                return (
                  loadingMore && <AppActivityIndicator color="#000" containerStyles={{
                    paddingBottom: 20
                  }} />
                )
              }}
              ListEmptyComponent={<AppEmpty textColor={"#FFF"} />}
            />
          ) : (
            this._renderCarousel()
          )
        }
        </View>
        <QuickAccessButton currentEvent={this.state.currentEvent} />
        <TabBarBottom navigation={this.props.navigation}/>
      </WrapperComponent>
    );
  }

  componentDidMount () {
    this.loadSpotlights();
  }

  _renderCarousel = () => {
    const { activeSlide, spotlights } = this.state;
    return (
      <View style={styles.carouselContainer}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          firstItem={activeSlide}
          data={spotlights}
          renderItem={this._renderSpotlightFullCard}
          sliderWidth={sizeWidth(100)}
          itemWidth={sizeWidth(85)}
          loop={false}
          onSnapToItem={(index) => this.setState({ activeSlide: index }) }
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          slideStyle={styles.slide}
        />
        <View style={styles.currentSlide}>
          <Text style={styles.currentSlideText}>{ activeSlide + 1 } / { spotlights.length }</Text>
        </View>
      </View>
    );
  }

  _renderSpotlightFullCard({ item, index }) {
    return (
      <TouchableOpacity key={index}>
        <SpotlightItem 
          item={item} 
          showDetail={true} 
          containerStyle={{
            width: "100%",
            height: "100%"
          }} 
          imageStyle={{
            width: "100%",
            height: sizeHeight(25)
          }}
          titleStyle={{
            fontSize: sizeFont(5),
            color: COLORS.GREEN_PET_ICT,
            paddingHorizontal: 15,
            ...fontMaker({ weight: "500" })
          }}
          roleStyle={{
            fontSize: sizeFont(3.5),
            color: COLORS.GRAYISH_BLUE,
            paddingHorizontal: 15
          }}
        />
      </TouchableOpacity>
    );
  }
  
  async loadSpotlights () {
    const { take } = this.state;
    this.setState({
      loading: true,
      loaded: false,
      spotlights: [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10]
    });
    try {
      const spotlights = await SpotlightAPI.getSpotlights(eventId, {
        skip: 0,
        take
      });
      this.setState({
        loading: false,
        loaded: true,
        spotlights,
        hasNextItems: spotlights.length === take
      });
    } catch (e) {
      this.setState({
        loading: false,
        loaded: false,
        spotlights: [],
        hasNextItems: false
      });
    };
  }

  async onLoadMore () {
    try {
      const {
        hasNextItems,
        loadingMore,
        skip,
        take,
        spotlights,
        loading,
        refreshing
      } = this.state;
      if (!hasNextItems || loadingMore || loading || refreshing) {
        return;
      }
      this.setState({
        loadingMore: true
      });
      const nextSkip = skip + take;
      const nextItems = await SpotlightAPI.getSpotlights(eventId, {
        skip: nextSkip,
        take
      });
      this.setState({
        spotlights: spotlights.concat(nextItems),
        skip: nextSkip,
        hasNextItems: nextItems.length === take,
        loadingMore: false
      });
    } catch (e) {
      this.setState({
        loading: false,
        loaded: false,
        spotlights: [],
        hasNextItems: false
      });
    }
  }
}

export default connect(
  null,
  null
)(Spotlight);
