import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from "../components/Text.component";
import PropTypes from "prop-types";
import { sizeWidth, sizeHeight } from "../helpers/size.helper";
import { COLORS } from "../helpers/common-styles";
import { OPEN_QRCODE_POPUP } from "../actions/qrcode.action";

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

const DateCountDown = () => (
  <View style={styles.dateCountDown}>
    <View
      style={{
        width: "100%",
        alignItems: "center",
        backgroundColor: COLORS.GRAYISH_BLUE,
        paddingHorizontal: 5,
        paddingBottom: 2
      }}
    >
      <Text style={{ fontSize: 28, color: "#FFF", marginTop: -2 }}>28</Text>
      <Text style={{ fontSize: 16, color: "#FFF", marginTop: -5 }}>OCT</Text>
    </View>
    <Text style={{ fontSize: 9, padding: 2 }}>3 days</Text>
  </View>
);

class EventCard extends React.Component {
  render() {
    const { containerStyles, event, width, withoutBottom } = this.props;
    return (
      <View style={[containerStyles, { width: width }]}>
        <Image
          source={require("../../assets/event_image.png")}
          style={styles.image}
          resizeMode={"cover"}
        />
        <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
          <View style={styles.content}>
            <DateCountDown />
            <View style={{ marginLeft: 10, width: sizeWidth(60) }}>
              <Text style={{ color: COLORS.GREEN_PET_ICT, fontSize: 15 }}>
                Formula 1 PETRONAS Malaysia Grand Prix 2018
              </Text>
              <Text style={{ color: COLORS.GRAYISH_BLUE, fontSize: 12 }}>
                Sepang 28th - 30th October 2018
              </Text>
            </View>
          </View>
          {!withoutBottom && (
            <View style={styles.bottom}>
              <Text style={{ fontSize: 12, color: COLORS.GRAYISH_BLUE }}>
                <Text style={{ color: "#CBD34C" }}>• </Text>
                {event.isPrivate ? " Private Event" : " Public Event"}
              </Text>
              {event.isUpcoming ? (
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity style={styles.actionButton}>
                    <Image
                      source={require("../../assets/images/plus_filled.png")}
                      style={{ width: 20, height: 20 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionButton}>
                    <Image
                      source={require("../../assets/images/bookmark.png")}
                      style={{ width: 15, height: 20 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionButton}>
                    <Image
                      source={require("../../assets/images/qrcodelighter.png")}
                      style={{ width: 20, height: 20 }}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity style={styles.actionButton}>
                    <Image
                      source={require("../../assets/images/close.png")}
                      style={{ width: 20, height: 20 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionButton}>
                    <Image
                      source={require("../../assets/images/bookmarked.png")}
                      style={{ width: 15, height: 20 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => this.props.openPopup()}
                  >
                    <Image
                      source={require("../../assets/images/qrcode.png")}
                      style={{ width: 20, height: 20 }}
                    />
                  </TouchableOpacity>
                </View>
              )}
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
    openPopup: () => {
      dispatch({ type: OPEN_QRCODE_POPUP });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EventCard);
