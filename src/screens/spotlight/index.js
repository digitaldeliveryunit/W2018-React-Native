import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image, Text, FlatList, TouchableOpacity, Dimensions } from "react-native";
import _ from "lodash";
import styles from "./styles";
import WrapperComponent from "../../components/Wrapper.component";
import SpotlightCard from "../../components/SpotlightCard";
import { CommonStyles, COLORS } from "../../helpers/common-styles";
import { spotlightList } from "../../helpers/mock-data.helper";
import DetailHeader from "../../components/DetailHeader";
import Carousel from "react-native-snap-carousel";
import { sizeWidth, sizeHeight } from "../../helpers/size.helper";
import {SpotlightItem} from "../../components/SpotlightCard";
import QuickAccessMenu from "../../components/QuickAccessMenu";

const { height } = Dimensions.get("window");

const ViewMode = {
  LIST: 0,
  CAROUSEL: 1
};

class Spotlight extends Component {
  constructor () {
    super();
    this.state = {
      viewMode: ViewMode.LIST,
      activeSlide: 0
    };
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

  _onPressSpotlightItem = spotlightId => {
    this.setState({
      viewMode: ViewMode.CAROUSEL
    });
  };

  _renderItem = (item, index) => {
    return (
      <SpotlightCard
        spotlight={item}
        onPressSpotlightItem={this._onPressSpotlightItem}
      />
    );
  };

  _keyExtractor = (item, index) => index.toString();

  render() {
    const spotlightCouples = _.chunk(spotlightList, 2);
    return (
      <WrapperComponent>
        <View style={{
          flex: 1,
          alignItems: "center"
        }}>
        {
          this.state.viewMode === ViewMode.LIST ? (
            <DetailHeader title={"Spotlight"} />
          ) : (
            <DetailHeader title={"Spotlight"} RightComponent={() => this._renderRightHeader()} />
          )
        }
        {
          this.state.viewMode === ViewMode.LIST ? (
            <FlatList
              data={spotlightCouples}
              renderItem={({ item, index }) => this._renderItem(item, index)}
              keyExtractor={this._keyExtractor}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            this._renderCarousel()
          )
        }
        </View>
        <QuickAccessMenu />
      </WrapperComponent>
    );
  }

  _renderCarousel = () => (
    <View style={styles.carouselContainer}>
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        data={spotlightList}
        renderItem={this._renderSpotlightFullCard.bind(this)}
        sliderWidth={sizeWidth(100)}
        itemWidth={sizeWidth(90)}
        loop={false}
        onSnapToItem={(index) => this.setState({ activeSlide: index }) }
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        slideStyle={styles.slide}
      />
      <View style={styles.currentSlide}>
        <Text style={styles.currentSlideText}>{ this.state.activeSlide + 1 } / {spotlightList.length}</Text>
      </View>
    </View>
  );

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
            fontSize: 20,
            color: COLORS.GREEN_PET_ICT,
            fontWeight: "bold",
            marginTop: 15,
            paddingHorizontal: 25
          }}
          roleStyle={{
            fontSize: 14,
            color: COLORS.GRAYISH_BLUE,
            paddingHorizontal: 25
          }}
        />
      </TouchableOpacity>
    );
  }
}

export default connect(
  null,
  null
)(Spotlight);
