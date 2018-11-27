import React, { Component } from "react";
import { connect } from "react-redux";
import { ScrollView, View, Image, TouchableOpacity } from "react-native";
import _ from "lodash";
import moment from "moment";
import styles from "./styles";
import { OPEN_QRCODE_POPUP } from "../../actions/qrcode.action";
import openGoogleMapDirection from "../../helpers/google-map-direction";
import QuickAccessButton from "../../components/QuickAccessButton";
import Text from "../../components/Text.component";
import EventAPI from "../../api/event";
import { SELECT_MENU } from "../../actions/quick-access-menu.action";
import AppWebView from "../../components/AppWebView";
import { USER_STATUS } from "../../config";
import Toast from "@remobile/react-native-toast";

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingEvent: false,
      loadedEvent: false,
      event: {}
    };
    this.onBookmark = this.onBookmark.bind(this);
    this.onUnBookmark = this.onUnBookmark.bind(this);
    this.onJoin = this.onJoin.bind(this);
    this.onUnJoin = this.onUnJoin.bind(this);
  }

  _onPressOpenGoogleMap = location => {
    const lat = _.get(location, "latitude");
    const lng = _.get(location, "longitude");

    if (lat && lng) {
      const data = {
        source: null,
        destination: {
          latitude: lat,
          longitude: lng
        }
      };

      openGoogleMapDirection(data);
    }
  };

  render() {
    const { event } = this.state;
    const cover = _.get(event, "imageUrl");
    return (
      <View style={styles.whiteOverlay}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => this.props.navigation.goBack()}
            >
              <Image
                source={require("../../../assets/images/left_black.png")}
                style={styles.backIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Image source={{ uri: cover }} style={styles.imageCover} />
            <View style={styles.containerActionButton}>
            {
              event.userStatus === USER_STATUS.NEW && (
                <TouchableOpacity style={styles.actionButton} onPress={this.onJoin}>
                  <Image
                    source={require("../../../assets/images/plus_filled.png")}
                    style={styles.iconActionButton}
                  />
                </TouchableOpacity>
              )
            }
            {
              event.userStatus === USER_STATUS.JOINED && (
                <TouchableOpacity style={styles.actionButton} onPress={this.onUnJoin}>
                  <Image
                    source={require("../../../assets/images/close.png")}
                    style={styles.iconActionButton}
                  />
                </TouchableOpacity>
              )
            }
            {
              event.isBookmark ? (
                <TouchableOpacity style={styles.actionButton} onPress={this.onUnBookmark}>
                  <Image
                    source={require("../../../assets/images/bookmarked.png")}
                    style={[styles.iconActionButton, { width: 15 }]}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.actionButton} onPress={this.onBookmark}>
                  <Image
                    source={require("../../../assets/images/bookmark.png")}
                    style={[styles.iconActionButton, { width: 15 }]}
                  />
                </TouchableOpacity>
              )
            }
            {
              event.userStatus === USER_STATUS.CHECKIN ? (
                <TouchableOpacity
                  style={styles.actionButton}
                  disabled={true}
                >
                  <Image
                    source={require("../../../assets/images/qrcode_selected.png")}
                    style={styles.iconActionButton}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => this.props.openPopupQRCode()}
                >
                  <Image
                    source={require("../../../assets/images/qrcode.png")}
                    style={styles.iconActionButton}
                  />
                </TouchableOpacity>
              )
            }
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.lblEventName} numberOfLines={2}>
                {_.get(event, "eventName", "")}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.rowInfo}>
                <Image
                  style={styles.infoIcon}
                  source={require("../../../assets/images/calendar.png")}
                />
                <View style={styles.infoLabelWrapper}>
                  <Text style={styles.lblInfoName}>
                    {moment(_.get(event, "dateFrom")).format("MMM DD, YYYY")} -{" "}
                    {moment(_.get(event, "dateTo")).format("MMM DD, YYYY")}
                  </Text>
                  <Text style={styles.colorHighLight}>Add to calendar</Text>
                </View>
              </View>
              <View style={styles.rowInfo}>
                <Image
                  style={{ ...styles.infoIcon, width: 22 }}
                  source={require("../../../assets/images/clock.png")}
                />
                <View style={styles.infoLabelWrapper}>
                  <Text style={styles.lblInfoName}>
                    {moment(_.get(event, "dateFrom")).format("HH:MM A")} -{" "}
                    {moment(_.get(event, "dateTo")).format("HH:MM A")}
                  </Text>
                </View>
              </View>
              <View style={styles.rowLocation}>
                <View style={styles.rowInfo}>
                  <Image
                    style={{ ...styles.infoIcon, height: 25 }}
                    source={require("../../../assets/images/marker.png")}
                  />
                  <View style={styles.infoLabelWrapper}>
                    <Text
                      style={{
                        ...styles.lblInfoName,
                        ...styles.colorHighLight
                      }}
                    >
                      {_.get(event, "eventLocation.locationName")}
                    </Text>
                    <Text style={styles.lblInfoMeta}>
                      {_.get(event, "eventLocation.locationName")}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => this._onPressOpenGoogleMap(_.get(event, "eventLocation"))}
                >
                  <Image
                    style={styles.mapsImage}
                    source={require("../../../assets/images/googlemap.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.horizontalDivider} />
            <View style={styles.aboutContainer}>
              <Text style={styles.lblAbout}>About</Text>
              <View style={styles.contentAbout}>
                <AppWebView content={event.eventDescription} />
              </View>
            </View>
          </View>
        </ScrollView>
        <QuickAccessButton currentEvent={event} />
      </View>
    );
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.loadEventDetail(_.get(params, "eventId"));

    // Reset Quick Access Menu to section About
    this.props.resetQuickAccessMenu();
  }

  async loadEventDetail(eventId) {
    this.setState({
      loadingEvent: true,
      loadedEvent: false
    });
    try {
      const event = await EventAPI.getEventDetail(eventId);
      this.setState({
        loadingEvent: false,
        loadedEvent: true,
        event
      });
    } catch (e) {
      this.setState({
        loadingEvent: false,
        loadedEvent: false,
        event: {}
      });
    }
  }
  async onBookmark () {
    const { event } = this.state;
    const result = await EventAPI.bookmark(event.eventId);
    if (result) {
      event.isBookmark = true;
      this.setState({ event });
      Toast.showLongBottom("Event is bookmarked successfully.");
    } else {
      Toast.showLongBottom("Event is bookmarked failed.");
    }
  }
  async onUnBookmark () {
    const { event } = this.state;
    const result = await EventAPI.unBookmark(event.eventId);
    if (result) {
      event.isBookmark = false;
      this.setState({ event });
      Toast.showLongBottom("Event is unbookmarked successfully.");
    } else {
      Toast.showLongBottom("Event is unbookmarked failed.");
    }
  }
  async onJoin () {
    const { event } = this.state;
    const result = await EventAPI.join(event.eventId);
    if (result) {
      event.userStatus = USER_STATUS.JOINED;
      this.setState({ event });
      Toast.showLongBottom("Event is joined successfully.");
    } else {
      Toast.showLongBottom("Event is joined failed.");
    }
  }
  async onUnJoin () {
    const { event } = this.state;
    const result = await EventAPI.unJoin(event.eventId);
    if (result) {
      event.userStatus = USER_STATUS.NEW;
      this.setState({ event });
      Toast.showLongBottom("Event is unjoined successfully.");
    } else {
      Toast.showLongBottom("Event is unjoined failed.");
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openPopupQRCode: () => {
      dispatch({ type: OPEN_QRCODE_POPUP });
    },
    resetQuickAccessMenu: () => dispatch({ type: SELECT_MENU, selectedMenuId: "About" })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EventDetail);
