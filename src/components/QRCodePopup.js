import React, { Component } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { COLORS } from "../helpers/common-styles";
import QRCode from "react-native-qrcode";
import { sizeWidth } from "../helpers/size.helper";
import { connect } from "react-redux";
import { CLOSE_QRCODE_POPUP } from "../actions/qrcode.action";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9,
    backgroundColor: "#FFF"
  }
});

class QRCodePopup extends Component {
  render() {
    const { eventId } = this.props;
    return (
      this.props.isOpen && (
        <TouchableWithoutFeedback onPress={() => this.props.closePopup()}>
          <View style={styles.container}>
            <QRCode
              value={eventId}
              size={sizeWidth(60)}
              bgColor={COLORS.GRAYISH_BLUE}
              fgColor="#FFF"
            />
          </View>
        </TouchableWithoutFeedback>
      )
    );
  }
}

const mapStateToProps = state => {
  return state.qrcode;
};

const mapDispatchToProps = dispatch => {
  return {
    closePopup: () => dispatch({ type: CLOSE_QRCODE_POPUP })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QRCodePopup);
