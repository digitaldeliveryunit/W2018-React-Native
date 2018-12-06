import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import Text from "../Text.component";
import { COLORS } from "../../helpers/common-styles";
import PropTypes from "prop-types";
import moment from "moment";
import { fontMaker, fontSize } from "../../helpers/font.helper";
import { sizeWidth } from "../../helpers/size.helper";

const styles = StyleSheet.create({
  wrapperItem: {
    flexDirection: "row",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderColor: COLORS.GRAY
  },
  dayMonthContainer: {
    paddingHorizontal: sizeWidth(1.5),
    height: sizeWidth(14.2),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.GRAYISH_BLUE,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    zIndex: 2
  },
  day: {
    paddingTop: sizeWidth(1.5),
    lineHeight: fontSize.f24,
    fontSize: fontSize.f24,
    color: "#FFF"
  },
  month: {
    paddingBottom: sizeWidth(1.5),
    fontSize: fontSize.f16,
    lineHeight: fontSize.f16,
    color: "#FFF",
    ...fontMaker({ weight: "500" })
  },
  containerDayInOrder: {
    marginLeft: -4,
    height: "100%",
    justifyContent: "center",
    paddingLeft: 14,
    paddingRight: 11
  },
  activeItem: {
    borderColor: COLORS.GRAY,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4
  },
  dayInOrder: {
    fontSize: fontSize.f16,
    lineHeight: fontSize.f16,
    color: COLORS.GRAYISH_BLUE
  },
  inactiveItem: {
    backgroundColor: "#FFF",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.8,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: COLORS.LIGHT_BORDER,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4
  }
});

const DateItem = ({ date, dayInOrder, isActive }) => {
  return (
    <View style={styles.wrapperItem}>
      <View style={styles.dayMonthContainer}>
        <Text style={styles.day}>{moment(date).format("DD")}</Text>
        <Text style={styles.month}>
          {moment(date)
            .format("MMM")
            .toUpperCase()}
        </Text>
      </View>
      <View style={[styles.containerDayInOrder, isActive && styles.activeItem]}>
        <Text style={styles.dayInOrder}>DAY {dayInOrder}</Text>
      </View>
      {!isActive && <View style={styles.inactiveItem} />}
    </View>
  );
};

DateItem.propTypes = {
  date: PropTypes.object.isRequired,
  dayInOrder: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default DateItem;
