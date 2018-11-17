import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Text from "../Text.component";
import { COLORS } from "../../helpers/common-styles";
import PropTypes from "prop-types";
import moment from "moment";

const styles = StyleSheet.create({
  wrapperItem: {
    flexDirection: "row",
    borderRadius: 4,
    alignItems: "center",
    backgroundColor: "#FFF",
    shadowColor: "#060606",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    opacity: 0.2
  },
  activeItem: {
    borderWidth: 1,
    borderColor: COLORS.GRAY,
    shadowOpacity: 0.1,
    opacity: 1
  },
  dayMonthContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.GRAYISH_BLUE,
    borderRadius: 3,
    paddingHorizontal: 6,
    paddingVertical: 4
  },
  day: {
    fontSize: 28,
    lineHeight: 27,
    color: "#FFF"
  },
  month: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 13,
    color: "#FFF"
  },
  dayInOrder: {
    padding: 8,
    fontSize: 17,
    lineHeight: 20,
    color: COLORS.GRAYISH_BLUE
  }
});

const DateItem = ({ date, dayInOrder, isActive }) => {
  return (
    <View
      elevation={5}
      style={[styles.wrapperItem, isActive && styles.activeItem]}
    >
      <View style={styles.dayMonthContainer}>
        <Text style={styles.day}>{moment(date).format("DD")}</Text>
        <Text style={styles.month}>
          {moment(date)
            .format("MMM")
            .toUpperCase()}
        </Text>
      </View>
      <Text style={styles.dayInOrder}>DAY {dayInOrder}</Text>
    </View>
  );
};

DateItem.propTypes = {
  date: PropTypes.object.isRequired,
  dayInOrder: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default DateItem;
