import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Text from "../Text.component";
import _ from "lodash";
import PropTypes from "prop-types";
import { COLORS } from "../../helpers/common-styles";

const { width } = Dimensions.get("window");
const WIDTH_CONTAINER_ICON = 40;
const WIDTH_CONTAINER_AGENDA =
  width - WIDTH_CONTAINER_ICON * 2 - 20 * 2 - 11 * 2;

const styles = StyleSheet.create({
  wrapperItem: {
    flexDirection: "column"
  },
  containerSessionItem: {
    flexDirection: "row",
    backgroundColor: COLORS.GREEN_PET_ICT,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.GRAY,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  containerIconToggle: {
    width: WIDTH_CONTAINER_ICON,
    height: WIDTH_CONTAINER_ICON,
    alignItems: "center",
    justifyContent: "center"
  },
  iconToggle: {
    width: 24,
    height: 12
  },
  containerAgenda: {
    width: WIDTH_CONTAINER_AGENDA,
    flexDirection: "column",
    paddingHorizontal: 20
  },
  agendaName: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 22,
    color: "#FFF"
  },
  venueName: {
    marginTop: 2,
    fontSize: 14,
    lineHeight: 16,
    color: "#FFF"
  },
  containerIconQRCode: {
    width: WIDTH_CONTAINER_ICON,
    height: WIDTH_CONTAINER_ICON,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    shadowColor: COLORS.GRAYISH_BLUE,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 4,
    shadowOpacity: 0.6,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GRAY
  },
  iconQRCode: {
    width: 22,
    height: 22
  },
  containerSubSessionList: {
    paddingVertical: 10
  },
  // begin styles for SubSession Item
  containerSubSession: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    marginVertical: 5,
    paddingHorizontal: 1,
    borderRadius: 4,
    shadowColor: COLORS.GRAYISH_BLUE,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 4,
    shadowOpacity: 0.15
  },
  containerTime: {
    paddingHorizontal: 15,
    paddingVertical: 13,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: COLORS.GRAYISH_BLUE,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.GRAY
  },
  time: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFF"
  },
  containerSubAgenda: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "column"
  },
  subAgendaName: {
    fontSize: 15,
    lineHeight: 17,
    color: COLORS.GRAYISH_BLUE
  },
  subVenueName: {
    marginTop: 2,
    fontSize: 12,
    lineHeight: 14,
    color: "rgba(36, 37, 61, .5)"
  }
});

const SubSessionItem = ({ subSession }) => (
  <View style={styles.containerSubSession}>
    <View style={styles.containerTime}>
      <Text style={styles.time}>{_.get(subSession, "timeFrom")}</Text>
      <Text style={styles.time}>{_.get(subSession, "timeTo")}</Text>
    </View>
    <View style={styles.containerSubAgenda}>
      <Text style={styles.subAgendaName}>
        {_.get(subSession, "agendaName")}
      </Text>
      <Text style={styles.subVenueName}>
        {_.get(subSession, "venue.venueName")}
      </Text>
    </View>
  </View>
);

SubSessionItem.propsTypes = {
  subSession: PropTypes.object.isRequired
};

export default class SessionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  _onPressToggleIcon = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  _onPressQRCodeIcon = () => {
    console.log("_onPressQRCodeIcon");
  };

  render() {
    const { session } = this.props;
    const { isOpen } = this.state;
    const iconToggle = isOpen
      ? require("../../../assets/images/arrow_up.png")
      : require("../../../assets/images/arrow_down.png");
    return (
      <View style={styles.wrapperItem}>
        <View style={styles.containerSessionItem}>
          <TouchableOpacity
            style={styles.containerIconToggle}
            onPress={() => this._onPressToggleIcon()}
          >
            <Image style={styles.iconToggle} source={iconToggle} />
          </TouchableOpacity>
          <View style={styles.containerAgenda}>
            <Text style={styles.agendaName}>
              {_.get(session, "agendaName")}
            </Text>
            <Text style={styles.venueName}>
              {_.get(session, "venue.venueName")}
            </Text>
          </View>
          <TouchableOpacity
            elevation={5}
            style={styles.containerIconQRCode}
            onPress={() => this._onPressQRCodeIcon()}
          >
            <Image
              style={styles.iconQRCode}
              source={require("../../../assets/images/qrcode.png")}
            />
          </TouchableOpacity>
        </View>
        {isOpen && (
          <View style={styles.containerSubSessionList}>
            {session.subSessions.map((subSession, index) => (
              <SubSessionItem key={index} subSession={subSession} />
            ))}
          </View>
        )}
      </View>
    );
  }
}

SessionItem.propsTypes = {
  session: PropTypes.object.isRequired
};
