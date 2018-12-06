import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image, FlatList, TouchableOpacity, Dimensions } from "react-native";
import Text from "../../components/Text.component";
import _ from "lodash";
import styles from "./styles";
import WrapperComponent from "../../components/Wrapper.component";
import SpotlightCard from "../../components/SpotlightCard";
import { COLORS } from "../../helpers/common-styles";
import DetailHeader from "../../components/DetailHeader";
import Carousel from "react-native-snap-carousel";
import { sizeWidth, sizeHeight } from "../../helpers/size.helper";
import {SpotlightItem} from "../../components/SpotlightCard";
import QuickAccessButton from "../../components/QuickAccessButton";
import SpotlightAPI from "../../api/spotlight";
import AppActivityIndicator from "../../components/AppActivityIndicator";
import AppEmpty from "../../components/AppEmpty";
import { fontMaker, fontSize } from "../../helpers/font.helper";
import TabBarBottom from "../../components/tab-bar/TabBarBottom";

const ViewMode = {
  LIST: 0,
  CAROUSEL: 1
};

class Spotlight extends Component {
  constructor (props) {
    super(props);
    const { currentEvent } = props.navigation.state.params;
    this.state = {
      viewMode: ViewMode.LIST,
      activedSlide: 0,
      currentEvent,
      loading: false,
      loadingMore: false,
      loaded: false,
      spotlights: [],
      refreshing: false,
      take: 10,
      hasNextPage: false,
      continuationKey: null
    };
    this._renderSpotlightFullCard = this._renderSpotlightFullCard.bind(this);
    this.onLoadMore = this.onLoadMore.bind(this);
  }

  _renderRightHeader = () => (
    <TouchableOpacity onPress={() => this.setState({ viewMode: ViewMode.LIST })}>
      <Image
        source={require("../../../assets/images/group.png")}
        style={styles.viewIcon}
      />
    </TouchableOpacity>
  );

  _onPressSpotlightItem = (spotlightId) => {
    const activedSlide = this.state.spotlights.findIndex(item => item.spotlightId === spotlightId);
    this.setState({
      viewMode: ViewMode.CAROUSEL,
      activedSlide
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
    const { spotlights, loadingMore, viewMode, currentEvent } = this.state;
    const spotlightCouples = _.chunk(spotlights, 2);
    return (
      <WrapperComponent>
        <View style={{ flex: 1, alignItems: "center" }}>
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
        <QuickAccessButton currentEvent={currentEvent} />
        <TabBarBottom navigation={this.props.navigation}/>
      </WrapperComponent>
    );
  }

  componentDidMount () {
    this.loadSpotlights();
  }

  _renderCarousel = () => {
    const { activedSlide, spotlights } = this.state;
    return (
      <View style={styles.carouselContainer}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          firstItem={activedSlide}
          data={spotlights}
          renderItem={this._renderSpotlightFullCard}
          sliderWidth={sizeWidth(100)}
          itemWidth={sizeWidth(85)}
          loop={false}
          onSnapToItem={(index) => this.setState({ activedSlide: index }) }
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          slideStyle={styles.slide}
        />
        <View style={styles.currentSlide}>
          <Text style={styles.currentSlideText}>{ activedSlide + 1 } / { spotlights.length }</Text>
        </View>
      </View>
    );
  }

  _renderSpotlightFullCard({ item, index }) {
    return (
      <SpotlightItem 
        key={index}
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
          fontSize: fontSize.f20,
          color: COLORS.GREEN_PET_ICT,
          paddingHorizontal: sizeWidth(1.5),
          ...fontMaker({ weight: "500" })
        }}
        roleStyle={{
          fontSize: fontSize.f14,
          color: COLORS.GRAYISH_BLUE,
          paddingHorizontal: sizeWidth(3)
        }}
      />
    );
  }
  
  async loadSpotlights () {
    const { take, currentEvent } = this.state;
    this.setState({
      loading: true,
      loaded: false,
      spotlights: [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10]
    });
    try {
      const spotlights = await SpotlightAPI.getSpotlights(currentEvent.eventId, {
        take
      });
      this.setState({
        loading: false,
        loaded: true,
        spotlights
      });
    } catch (e) {
      this.setState({
        loading: false,
        loaded: false,
        spotlights: []
      });
    };
  }

  async onLoadMore () {
    try {
      const {
        hasNextPage,
        loadingMore,
        take,
        spotlights,
        loading,
        refreshing,
        currentEvent,
        continuationKey
      } = this.state;
      if (!hasNextPage || loadingMore || loading || refreshing) {
        return;
      }
      this.setState({
        loadingMore: true
      });
      const data = await SpotlightAPI.getSpotlights(currentEvent.eventId, {
        take,
        continuationKey
      });

      this.setState({
        spotlights: spotlights.concat(data.spotlights),
        hasNextPage: data.hasNextPage,
        continuationKey: data.continuationKey,
        loadingMore: false
      });
    } catch (e) {
      this.setState({
        spotlights: [],
        hasNextPage: false,
        loadingMore: false,
        continuationKey: null
      });
    }
  }
}

export default connect(
  null,
  null
)(Spotlight);
