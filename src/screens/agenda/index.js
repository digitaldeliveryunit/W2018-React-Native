import React, { Component } from "react";
import { connect } from "react-redux";
import { ScrollView, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import _ from "lodash";
import moment from "moment";
import DateItem from "../../components/agenda/DateItem";
import AgendaItem from "../../components/agenda/AgendaItem";
import AppEmpty from "../../components/AppEmpty";
import AppActivityIndicator from "../../components/AppActivityIndicator";
import AgendaAPI from "../../api/agenda";
import QuickAccessButton from "../../components/QuickAccessButton";
import NavigationService from "../../helpers/navigation-service";
import { SELECT_MENU } from "../../actions/quick-access-menu.action";

class Agenda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayInOrderActive: 1,
      loadingAgendas: false,
      loadedAgendas: false,
      agendas: []
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

  _renderAgenda = (agenda) => {
    return agenda ? (
      <AgendaItem agenda={agenda} />
    ) : (
      <AppEmpty containerStyles={styles.loadingOrEmptyContainer} textColor={"#000"} />
    );
  };

  render() {
    const { currentEvent } = this.props.navigation.state.params;
    const { agendas, loadingAgendas } = this.state;
    const agendaOfActiveDay = _.find(agendas, [
      "day",
      this.state.dayInOrderActive
    ]);
    return (
      <View style={{ flex: 1, alignItems: "center"}}>
        <ScrollView
          style={styles.whiteOverlay}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => this.onBack()}
            >
              <Image
                source={require("../../../assets/images/left_black.png")}
                style={styles.backIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
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
            <View style={styles.containerAgendas}>
              {loadingAgendas ? (
                <AppActivityIndicator
                  color="#000"
                  containerStyles={styles.loadingOrEmptyContainer}
                />
              ) : this._renderAgenda(agendaOfActiveDay)}
            </View>
          </View>
        </ScrollView>
        <QuickAccessButton currentEvent={currentEvent} />
      </View>
    );
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.loadAgendaOfEvent(_.get(params, "currentEvent.eventId"));
  }

  async loadAgendaOfEvent(eventId) {
    this.setState({
      loadingAgendas: true,
      loadedAgendas: false
    });
    try {
      const agendas = await AgendaAPI.getAgendasOfEvent(eventId);
      this.setState({
        loadingAgendas: false,
        loadedAgendas: true,
        agendas
      });
    } catch (e) {
      this.setState({
        loadingAgendas: false,
        loadedAgendas: false,
        agendas: []
      });
    }
  }
  onBack () {
    const navigation = NavigationService.getNavigation();
    const { index, routes } = navigation.state.nav;
    const backRoute = routes[index - 1].routeName;
    this.props.selectMenu(backRoute);
    NavigationService.goBack();
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectMenu: selectedMenuId => dispatch({ type: SELECT_MENU, selectedMenuId })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Agenda);
