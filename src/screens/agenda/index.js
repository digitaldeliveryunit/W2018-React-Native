import React, { Component } from "react";
import { connect } from "react-redux";
import { ScrollView, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import _ from "lodash";
import moment from "moment";
import DateItem from "../../components/agenda/DateItem";
import SessionItem from "../../components/agenda/SessionItem";
import { event, agenda } from "../../helpers/mock-data.helper";
import { getDayDuration } from "../../helpers/date-time.helper";

class Agenda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayInOrderActive: 1
    };
  }

  _onPressDateItem = dayInOrder => {
    this.setState({ dayInOrderActive: dayInOrder });
  };

  _renderDatesOfEvent = (dateFrom, dateTo) => {
    const numberDayEvent = getDayDuration(dateFrom, dateTo);
    const datesOfEvent = [];
    for (let i = 0; i < numberDayEvent; i++) {
      const date = moment(dateFrom).add(i, "days");
      const dayInOrder = i + 1;
      const isActive = this.state.dayInOrderActive === dayInOrder;
      datesOfEvent.push(
        <TouchableOpacity
          key={i}
          style={styles.dateItem}
          onPress={() => this._onPressDateItem(dayInOrder)}
        >
          <DateItem
            date={date._d}
            dayInOrder={dayInOrder}
            isActive={isActive}
          />
        </TouchableOpacity>
      );
    }
    return datesOfEvent;
  };

  render() {
    const sessionOfActiveDay = _.find(agenda.sessionList, [
      "day",
      this.state.dayInOrderActive
    ]);
    return (
      <ScrollView
        style={styles.whiteOverlay}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Image source={{ uri: event.imageUrl }} style={styles.imageCover} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.datesContainer}
          >
            {this._renderDatesOfEvent(
              _.get(event, "dateFrom"),
              _.get(event, "dateTo")
            )}
          </ScrollView>
          <View style={styles.containerSessionItem}>
            {sessionOfActiveDay && <SessionItem session={sessionOfActiveDay} />}
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default connect(
  null,
  null
)(Agenda);
