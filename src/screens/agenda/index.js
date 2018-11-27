import React, { Component } from "react";
import { connect } from "react-redux";
import { ScrollView, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import _ from "lodash";
import moment from "moment";
import DateItem from "../../components/agenda/DateItem";
import AgendaItem from "../../components/agenda/AgendaItem";
import AppActivityIndicator from "../../components/AppActivityIndicator";
import AgendaAPI from "../../api/agenda";

class Agenda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayInOrderActive: 1,
      loadingAgenda: false,
      loadedAgenda: false,
      agenda: {}
    };
  }

  _onPressDateItem = dayInOrder => {
    this.setState({ dayInOrderActive: dayInOrder });
  };

  _renderDatesOfEvent = (dateFrom, dateTo) => {
    const numberDayEvent = moment(dateTo).diff(dateFrom, "days") + 1;
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
    const { currentEvent } = this.props.navigation.state.params;
    const { agenda, loadingAgenda } = this.state;
    const agendaOfActiveDay = _.find(agenda, [
      "day",
      this.state.dayInOrderActive
    ]);
    return (
      <ScrollView
        style={styles.whiteOverlay}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Image
            source={{ uri: currentEvent.imageUrl }}
            style={styles.imageCover}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.datesContainer}
          >
            {this._renderDatesOfEvent(
              _.get(currentEvent, "dateFrom"),
              _.get(currentEvent, "dateTo")
            )}
          </ScrollView>
          <View style={styles.containerAgendaItem}>
           {
             loadingAgenda ? (
                <AppActivityIndicator
                  color="#000"
                  containerStyles={styles.loadingAgenda}
                />
              ) : (agendaOfActiveDay && <AgendaItem agenda={agendaOfActiveDay} />)
           }
          </View>
        </View>
      </ScrollView>
    );
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.loadAgendaOfEvent(_.get(params, "currentEvent.eventId"));
  }

  async loadAgendaOfEvent(eventId) {
    this.setState({
      loadingAgenda: true,
      loadedAgenda: false
    });
    try {
      const agenda = await AgendaAPI.getAgendaOfEvent(eventId);
      this.setState({
        loadingAgenda: false,
        loadedAgenda: true,
        agenda
      });
    } catch (e) {
      this.setState({
        loadingAgenda: false,
        loadedAgenda: false,
        agenda: {}
      });
    }
  }
}

export default connect(
  null,
  null
)(Agenda);
