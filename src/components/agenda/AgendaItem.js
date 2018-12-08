import React, { Component } from "react";
import { connect } from "react-redux";
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
import { OPEN_QRCODE_POPUP } from "../../actions/qrcode.action";
import { COLORS } from "../../helpers/common-styles";
import { fontMaker, fontSize } from "../../helpers/font.helper";
import { sizeWidth } from "../../helpers/size.helper";

const { width } = Dimensions.get("window");
const WIDTH_CONTAINER_ICON = sizeWidth(10);
const WIDTH_CONTAINER_AGENDA =
  width - WIDTH_CONTAINER_ICON * 2 - 20 * 2 - 11 * 2;

const styles = StyleSheet.create({
  wrapperItem: {
    flexDirection: "column"
  },
  containerAgendaItem: {
    flexDirection: "row",
    backgroundColor: COLORS.GREEN_PET_ICT,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.GRAY,
    padding: sizeWidth(3)
  },
  leftRowWrapper: {
    width: sizeWidth(11.5),
    alignItems: "center"
  },
  iconToggle: {
    width: sizeWidth(6),
    height: sizeWidth(6),
    resizeMode: "contain"
  },
  containerAgenda: {
    width: WIDTH_CONTAINER_AGENDA,
    flexDirection: "column",
    paddingHorizontal: sizeWidth(3)
  },
  agendaName: {
    fontSize: fontSize.f16,
    lineHeight: fontSize.f18,
    color: "#FFF",
    ...fontMaker({ weight: "600" })
  },
  venueName: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f16,
    color: "#FFF"
  },
  containerIconQRCode: {
    width: WIDTH_CONTAINER_ICON,
    height: WIDTH_CONTAINER_ICON,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: WIDTH_CONTAINER_ICON / 2,
    shadowColor: COLORS.GRAYISH_BLUE,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 4,
    shadowOpacity: 0.6,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_BORDER
  },
  iconQRCode: {
    width: sizeWidth(5),
    height: sizeWidth(5),
    resizeMode: "contain"
  },
  containerSubAgendaList: {
    paddingVertical: sizeWidth(1.5)
  },
  // begin styles for SubAgenda Item
  wrapperSubAgenda: {
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
    shadowOpacity: 0.15,
    alignItems: "center",
    padding: sizeWidth(1.5)
  },
  containerTime: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.GRAYISH_BLUE,
    borderRadius: 4,
    marginLeft: sizeWidth(1.5),
    padding: sizeWidth(1.5),
    width: sizeWidth(15)
  },
  time: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f16,
    color: "#FFF",
    ...fontMaker({ weight: "500" })
  },
  containerSubAgenda: {
    paddingHorizontal: sizeWidth(1.5),
    paddingVertical: sizeWidth(1.5),
    flexDirection: "column"
  },
  subAgendaName: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f16,
    color: COLORS.GRAYISH_BLUE
  },
  subVenueName: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f14,
    color: "rgba(36, 37, 61, .5)"
  }
});

const SubAgendaItem = ({ subAgenda }) => (
  <View style={styles.wrapperSubAgenda}>
    <View style={styles.containerTime}>
      <Text style={styles.time}>{_.get(subAgenda, "timeFrom")}</Text>
      <Text style={styles.time}>{_.get(subAgenda, "timeTo")}</Text>
    </View>
    <View style={styles.containerSubAgenda}>
      <Text style={styles.subAgendaName}>
        {_.get(subAgenda, "agendaName")}
      </Text>
      <Text style={styles.subVenueName}>
        {_.get(subAgenda, "venue")}
      </Text>
    </View>
  </View>
);

SubAgendaItem.propsTypes = {
  subAgenda: PropTypes.object.isRequired
};

class AgendaItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  _onPressToggleIcon = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { agenda } = this.props;
    const { isOpen } = this.state;
    const iconToggle = isOpen
      ? require("../../../assets/images/arrow_up.png")
      : require("../../../assets/images/arrow_down.png");
    return (
      <View style={styles.wrapperItem}>
        <View style={styles.containerAgendaItem}>
          <View style={{
            flexDirection: "row",
            alignItems: "center"
          }}>
            <TouchableOpacity 
            style={styles.leftRowWrapper}
            onPress={() => this._onPressToggleIcon()}>
              <Image style={styles.iconToggle} source={iconToggle} />
            </TouchableOpacity>
            <View style={styles.containerAgenda}>
              <Text style={styles.agendaName}>
                {_.get(agenda, "agendaName")}
              </Text>
              <Text style={styles.venueName}>
                {_.get(agenda, "venue")}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            elevation={5}
            style={styles.containerIconQRCode}
            onPress={() => this.props.openPopup(_.get(agenda, "agendaId"))}
          >
            <Image
              style={styles.iconQRCode}
              source={require("../../../assets/images/qrcode.png")}
            />
          </TouchableOpacity>
        </View>
        {isOpen && (
          <View style={styles.containerSubAgendaList}>
            {agenda.subAgendas.map((subAgenda, index) => (
              <SubAgendaItem key={index} subAgenda={subAgenda} />
            ))}
          </View>
        )}
      </View>
    );
  }
}

AgendaItem.propsTypes = {
  agenda: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    openPopup: (agendaId) => dispatch({ type: OPEN_QRCODE_POPUP, agendaId })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AgendaItem);