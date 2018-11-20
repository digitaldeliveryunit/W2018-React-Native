import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from "../components/Text.component";
import PropTypes from "prop-types";
import { sizeWidth, sizeHeight } from "../helpers/size.helper";
import { COLORS } from "../helpers/common-styles";
import { OPEN_QRCODE_POPUP } from "../actions/qrcode.action";
import FastImage from "react-native-fast-image";
import {
  toDateString,
  getDayDuration
} from "../helpers/date-time.helper";

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
    borderColor: "#CCC",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 36,
    height: 36,
    borderRadius: 18,
    marginLeft: 5
  }
});

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

class EventCard extends React.Component {
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
                event.userStatus === "NEW" && (
                  <TouchableOpacity style={styles.actionButton}>
                    <Image
                      source={require("../../assets/images/plus_filled.png")}
                      style={{ width: 20, height: 20 }}
                    />
                  </TouchableOpacity>
                )
              }
              {
                event.userStatus === "JOINED" && (
                  <TouchableOpacity style={styles.actionButton}>
                    <Image
                      source={require("../../assets/images/close.png")}
                      style={{ width: 20, height: 20 }}
                    />
                  </TouchableOpacity>
                )
              }
              {
                event.isBookmark ? (
                  <TouchableOpacity style={styles.actionButton}>
                    <Image
                      source={require("../../assets/images/bookmarked.png")}
                      style={{ width: 15, height: 20 }}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.actionButton}>
                    <Image
                      source={require("../../assets/images/bookmark.png")}
                      style={{ width: 15, height: 20 }}
                    />
                  </TouchableOpacity>
                )
              }
              {
                event.userStatus === "CHECKIN" ? (
                  <TouchableOpacity style={styles.actionButton}>
                    <Image
                      source={require("../../assets/images/qrcodelighter.png")}
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
    borderWidth: 1,
    borderColor: "#F3F3F3",
    overflow: "hidden",
    backgroundColor: "#FFF"
  },
  width: "100%"
};

const mapDispatchToProps = dispatch => {
  return {
    openPopup: (eventId) => {
      dispatch({ type: OPEN_QRCODE_POPUP, eventId });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EventCard);
