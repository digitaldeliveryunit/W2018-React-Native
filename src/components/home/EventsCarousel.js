
import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { CommonStyles } from "../../helpers/common-styles";
import Carousel from "react-native-snap-carousel";
import PropTypes from "prop-types";
import EventCard from "../EventCard";
import { sizeWidth, sizeHeight } from "../../helpers/size.helper";

const styles = StyleSheet.create({
});

export default class EventsCarousel extends Component {
  constructor() {
    super();
    this.state = {
      activeSlide: 0
    };
  }
  render() {
    const {events} = this.props;
    return (
      <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={events}
          renderItem={this._renderItem.bind(this)}
          sliderWidth={sizeWidth(100)}
          itemWidth={sizeWidth(90)}
          loop={false}
          onSnapToItem={(index) => this.setState({ activeSlide: index }) }
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          slideStyle={{ paddingRight: 20 }}
        />
    );
  }
  _renderItem({ item, index }) {
    return (
      <TouchableOpacity key={index} onPress={() => this.onGoDetail()}>
        <EventCard event={item} />
      </TouchableOpacity>
    );
  }
  onGoDetail () {
    this.props.navigation.navigate("EventDetail");
  }
}
