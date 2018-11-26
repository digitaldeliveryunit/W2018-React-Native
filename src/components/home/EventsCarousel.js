
import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import _ from "lodash";
import EventCard from "../EventCard";
import { sizeWidth, sizeHeight } from "../../helpers/size.helper";
import { CommonStyles } from "../../helpers/common-styles";

const styles = StyleSheet.create({
});

export default class EventsCarousel extends Component {
  constructor() {
    super();
    this.state = {
      activeSlide: 0
    };
    this._renderItem = this._renderItem.bind(this);
  }
  render() {
    const {events} = this.props;
    return (
      <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={events}
          renderItem={this._renderItem}
          sliderWidth={sizeWidth(100)}
          itemWidth={sizeWidth(90)}
          loop={false}
          onSnapToItem={(index) => this.setState({ activeSlide: index }) }
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          slideStyle={{ paddingRight: 15, paddingLeft: 3, marginBottom: 10 }}
        />
    );
  }
  _renderItem({ item, index }) {
    return (
      <TouchableOpacity 
        key={index}
        style={CommonStyles.boxShadow}
        onPress={() => this.onGoDetail(_.get(item, "eventId"))}>
        <EventCard event={item} />
      </TouchableOpacity>
    );
  }
  onGoDetail (eventId) {
    this.props.navigation.navigate("EventDetail", { eventId });
  }
}
