import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from "../components/Text.component";
import PropTypes from "prop-types";
import { sizeWidth, sizeHeight } from "../helpers/size.helper";
import { COLORS, CommonStyles } from "../helpers/common-styles";
import { OPEN_QRCODE_POPUP } from "../actions/qrcode.action";
import FastImage from "react-native-fast-image";
import {
  toDateString,
  getDayDuration
} from "../helpers/date-time.helper";
import EventAPI from "../api/event";
import Toast from "@remobile/react-native-toast";
import { USER_STATUS } from "../config";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: sizeHeight(25)
  },
  content: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 5
  },
  dateCountDown: {
    borderColor: COLORS.GRAYISH_BLUE,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: "center"
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingTop: 8,
    borderTopColor: "#F3F3F3",
    borderTopWidth: 1
  },
  actionButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 36,
    height: 36,
    borderRadius: 18,
    marginLeft: 5,
    borderColor: "#F6F6F6",
    borderWidth: 1
  }
});

class EventCard extends React.Component {
  constructor (props) {
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
        <FastImage 
          source={{uri: event.imageUrl}}
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover} />
        <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
          <View style={styles.content}>
            <DateCountDown dateFrom={event.dateFrom} dateTo={event.dateTo} />
            <View style={{ marginLeft: 10, width: sizeWidth(60) }}>
              <Text style={{ color: COLORS.GREEN_PET_ICT, fontSize: 15 }}>
                {event.eventName}
              </Text>
              <Text style={{ color: COLORS.GRAYISH_BLUE, fontSize: 12 }}>
                {event.eventLocation && event.eventLocation.locationName}
              </Text>
              {
                (event.dateFrom && getDayDuration(event.dateFrom, event.dateTo) > 0) && (
                  <Text style={{ color: COLORS.GRAYISH_BLUE, fontSize: 12 }}>
                    {`${toDateString(event.dateFrom)} - ${toDateString(event.dateTo)}`}
                  </Text>
                )
              }
            </View>
          </View>
          {!withoutBottom && (
            <View style={styles.bottom}>
              <Text style={{ fontSize: 12, color: COLORS.GRAYISH_BLUE }}>
                <Text style={{ color: "#CBD34C" }}>• </Text>
                {`${event.eventType} Event`}
              </Text>
              <View style={{ flexDirection: "row" }}>
              {
                this.state.userStatus === USER_STATUS.NEW && (
                  <TouchableOpacity style={styles.actionButton} onPress={this.onJoin}>
                    <Image
                      source={require("../../assets/images/plus_filled.png")}
                      style={{ width: 20, height: 20 }}
                    />
                  </TouchableOpacity>
                )
              }
              {
                this.state.userStatus === USER_STATUS.JOINED && (
                  <TouchableOpacity style={styles.actionButton} onPress={this.onUnJoin}>
                    <Image
                      source={require("../../assets/images/close.png")}
                      style={{ width: 20, height: 20 }}
                    />
                  </TouchableOpacity>
                )
              }
              {
                this.state.isBookmark ? (
                  <TouchableOpacity style={styles.actionButton} onPress={this.onUnBookmark}>
                    <Image
                      source={require("../../assets/images/bookmarked.png")}
                      style={{ width: 15, height: 20 }}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.actionButton} onPress={this.onBookmark}>
                    <Image
                      source={require("../../assets/images/bookmark.png")}
                      style={{ width: 15, height: 20 }}
                    />
                  </TouchableOpacity>
                )
              }
              {
                this.state.userStatus === USER_STATUS.CHECKIN ? (
                  <TouchableOpacity style={styles.actionButton}>
                    <Image
                      source={require("../../assets/images/qrcode_selected.png")}
                      style={{ width: 20, height: 20 }}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.actionButton} onPress={() => this.props.openPopup(event.eventId)}>
                    <Image
                      source={require("../../assets/images/qrcode.png")}
                      style={{ width: 20, height: 20 }}
                    />
                  </TouchableOpacity>
                )
              }
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }

  async onBookmark () {
    const { event } = this.props;
    // const result = await EventAPI.bookmark(event.eventId);
    const result = true;
    if (result) {
      this.setState({ isBookmark: true });
      Toast.showLongBottom("Event is bookmarked successfully.");
    } else {
      Toast.showLongBottom("Event is bookmarked failed.");
    }
  }
  async onUnBookmark () {
    const { event } = this.props;
    // const result = await EventAPI.unBookmark(event.eventId);
    const result = true;
    if (result) {
      this.setState({ isBookmark: false });
      Toast.showLongBottom("Event is unbookmarked successfully.");
    } else {
      Toast.showLongBottom("Event is unbookmarked failed.");
    }
  }
  async onJoin () {
    const { event } = this.props;
    // const result = await EventAPI.join(event.eventId);
    const result = true;
    if (result) {
      this.setState({ userStatus: USER_STATUS.JOINED });
      Toast.showLongBottom("Event is joined successfully.");
    } else {
      Toast.showLongBottom("Event is joined failed.");
    }
  }
  async onUnJoin () {
    const { event } = this.props;
    // const result = await EventAPI.unJoin(event.eventId);
    const result = true;
    if (result) {
      this.setState({ userStatus: USER_STATUS.NEW });
      Toast.showLongBottom("Event is unjoined successfully.");
    } else {
      Toast.showLongBottom("Event is unjoined failed.");
    }
  }
}

const DateCountDown = ({dateFrom, dateTo}) => {
  const dayDuration = getDayDuration(dateFrom, dateTo);
  const day = toDateString(dateFrom, "DD");
  const month = toDateString(dateFrom, "MMM");
  return (
    <View style={styles.dateCountDown}>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          backgroundColor: COLORS.GRAYISH_BLUE,
          paddingHorizontal: 8,
          paddingBottom: 2
        }}
      >
        <Text style={{ fontSize: 28, color: "#FFF", marginTop: -2 }}>{day}</Text>
        <Text style={{ fontSize: 16, color: "#FFF", marginTop: -5 }}>{month}</Text>
      </View>
      {
        dayDuration > 0 && <Text style={{ fontSize: 9, padding: 2 }}>{dayDuration + 1} days</Text>
      }
    </View>
  );
}

EventCard.propTypes = {
  event: PropTypes.object,
  containerStyles: PropTypes.object,
  width: PropTypes.any,
  withoutBottom: PropTypes.bool
};

EventCard.defaultProps = {
  containerStyles: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#FFF",
    ...CommonStyles.boxShadow
  },
  width: "100%"
};

const mapDispatchToProps = dispatch => {
  return {
    openPopup: (eventId) => dispatch({ type: OPEN_QRCODE_POPUP, eventId })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EventCard);
