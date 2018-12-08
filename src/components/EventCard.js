import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from "../components/Text.component";
import PropTypes from "prop-types";
import { sizeWidth } from "../helpers/size.helper";
import { COLORS, CommonStyles } from "../helpers/common-styles";
import { OPEN_QRCODE_POPUP } from "../actions/qrcode.action";
import FastImage from "react-native-fast-image";
import { toDateString, getDayDuration } from "../helpers/date-time.helper";
import EventAPI from "../api/event";
import Toast from "@remobile/react-native-toast";
import { USER_STATUS } from "../config";
import { fontMaker, fontSize } from "../helpers/font.helper";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: sizeWidth(40)
  },
  content: {
    flexDirection: "row",
    marginBottom: sizeWidth(1.5)
  },
  dateCountDown: {
    borderColor: COLORS.GRAYISH_BLUE,
    borderRadius: 4,
    borderWidth: 1,
    alignItems: "center"
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: sizeWidth(1.5),
    borderTopColor: "#F3F3F3",
    borderTopWidth: 1
  },
  actionButton: {
    justifyContent: "center",
    alignItems: "center",
    width: sizeWidth(8),
    height: sizeWidth(8),
    borderRadius: sizeWidth(4),
    borderWidth: 1,
    borderColor: COLORS.LIGHT_BORDER,
    marginLeft: 5
  },
  icon: {
    width: sizeWidth(3.5),
    height: sizeWidth(3.5),
    resizeMode: "contain"
  },
  eventTitle: {
    color: COLORS.GREEN_PET_ICT, 
    fontSize: fontSize.f14,
    lineHeight: fontSize.f16,
    ...fontMaker({ weight: "500" }),
    marginBottom: sizeWidth(0.7)
  },
  eventDescription: {
    color: COLORS.GRAYISH_BLUE,
    fontSize: fontSize.f11,
    lineHeight: fontSize.f12
  }
});

class EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBookmark: props.event.isBookmark,
      userStatus: props.event.userStatus
    };
    this.onBookmark = this.onBookmark.bind(this);
    this.onUnBookmark = this.onUnBookmark.bind(this);
    this.onJoin = this.onJoin.bind(this);
    this.onUnJoin = this.onUnJoin.bind(this);
  }
  render() {
    const { containerStyles, event, width, withoutBottom } = this.props;
    return (
      <View style={[containerStyles, { width: width }]}>
        <FastImage source={{ uri: event.imageUrl }} style={styles.image} resizeMode={FastImage.resizeMode.cover} />
        <View style={{ padding: sizeWidth(1.5) }}>
          <View style={styles.content}>
            <View>
              <DateCountDown dateFrom={event.dateFrom} dateTo={event.dateTo} />
            </View>
            <View style={{ paddingLeft: sizeWidth(1.5), flex: 1 }}>
              <Text style={styles.eventTitle} numberOfLines={2}>
                {event.eventName}
              </Text>
              <Text style={styles.eventDescription} numberOfLines={1}>
                {event.eventLocation && event.eventLocation.locationName}
              </Text>
              {
                event.dateFrom && getDayDuration(event.dateFrom, event.dateTo) > 0 && (
                  <Text style={styles.eventDescription} numberOfLines={1}>
                    {`${toDateString(event.dateFrom)} - ${toDateString(event.dateTo)}`}
                  </Text>
                )
              }
            </View>
          </View>
          {!withoutBottom && (
            <View style={styles.bottom}>
              <Text style={styles.eventDescription}>
                <Text style={{ color: "#CBD34C" }}>• </Text>
                {`${event.eventType} Event`}
              </Text>
              <View style={{ flexDirection: "row" }}>
                {this.state.userStatus === USER_STATUS.NEW && (
                  <TouchableOpacity style={styles.actionButton} onPress={this.onJoin}>
                    <Image
                      source={require("../../assets/images/plus_filled.png")}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                )}
                {this.state.userStatus === USER_STATUS.JOINED && (
                  <TouchableOpacity style={styles.actionButton} onPress={this.onUnJoin}>
                    <Image
                      source={require("../../assets/images/close.png")}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                )}
                {this.state.isBookmark ? (
                  <TouchableOpacity style={styles.actionButton} onPress={this.onUnBookmark}>
                    <Image
                      source={require("../../assets/images/bookmarked.png")}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.actionButton} onPress={this.onBookmark}>
                    <Image
                      source={require("../../assets/images/bookmark.png")}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                )}
                {this.state.userStatus === USER_STATUS.CHECKIN ? (
                  <TouchableOpacity style={styles.actionButton}>
                    <Image
                      source={require("../../assets/images/qrcode_selected.png")}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.actionButton} onPress={() => this.props.openPopup(event.eventId)}>
                    <Image
                      source={require("../../assets/images/qrcode.png")}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }

  async onBookmark() {
    const { event } = this.props;
    const result = await EventAPI.bookmark(event.eventId);
    if (result) {
      this.setState({ isBookmark: true });
      Toast.showLongBottom("Event is bookmarked successfully.");
    } else {
      Toast.showLongBottom("Event is bookmarked failed.");
    }
  }
  async onUnBookmark() {
    const { event } = this.props;
    const result = await EventAPI.unBookmark(event.eventId);
    if (result) {
      this.setState({ isBookmark: false });
      Toast.showLongBottom("Event is unbookmarked successfully.");
    } else {
      Toast.showLongBottom("Event is unbookmarked failed.");
    }
  }
  async onJoin() {
    const { event } = this.props;
    const result = await EventAPI.join(event.eventId);
    if (result) {
      this.setState({ userStatus: USER_STATUS.JOINED });
      Toast.showLongBottom("Event is joined successfully.");
    } else {
      Toast.showLongBottom("Event is joined failed.");
    }
  }
  async onUnJoin() {
    const { event } = this.props;
    const result = await EventAPI.unJoin(event.eventId);
    if (result) {
      this.setState({ userStatus: USER_STATUS.NEW });
      Toast.showLongBottom("Event is unjoined successfully.");
    } else {
      Toast.showLongBottom("Event is unjoined failed.");
    }
  }
}

const DateCountDown = ({ dateFrom, dateTo }) => {
  const dayDuration = getDayDuration(dateFrom, dateTo);
  const day = toDateString(dateFrom, "DD");
  const month = toDateString(dateFrom, "MMM");
  return (
    <View style={styles.dateCountDown}>
      <View
        style={{
          alignItems: "center",
          backgroundColor: COLORS.GRAYISH_BLUE,
          padding: sizeWidth(1)
        }}
      >
        <Text style={{ fontSize: fontSize.f24, color: "#FFF", lineHeight: fontSize.f24, ...fontMaker({ weight: "500" }) }}>{day}</Text>
        <Text style={{ fontSize: fontSize.f14, color: "#FFF", lineHeight: fontSize.f14, ...fontMaker({ weight: "500" }) }}>
          {month && month.toUpperCase()}
        </Text>
      </View>
      {dayDuration > 0 && <Text style={{ fontSize: fontSize.f9, lineHeight: fontSize.f12 }}>{dayDuration + 1} days</Text>}
    </View>
  );
};

EventCard.propTypes = {
  event: PropTypes.any,
  containerStyles: PropTypes.object,
  width: PropTypes.any,
  withoutBottom: PropTypes.bool
};

EventCard.defaultProps = {
  containerStyles: {
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: "#FFF",
    ...CommonStyles.boxShadow
  },
  width: "100%"
};

const mapDispatchToProps = dispatch => {
  return {
    openPopup: eventId => dispatch({ type: OPEN_QRCODE_POPUP, eventId })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EventCard);
