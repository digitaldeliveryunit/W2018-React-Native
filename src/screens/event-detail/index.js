import React, { Component } from "react";
import { connect } from "react-redux";
import { ScrollView, View, Image, Text } from "react-native";
import _ from "lodash";
import moment from "moment";
import styles from "./styles";
import { event } from "../../helpers/mock-data.helper";
import QuickAccessMenu from "../../components/QuickAccessMenu";

class EventDetail extends Component {
  render() {
    const cover = _.get(event, "imageUrl");
    return (
      <View style={{
        flex: 1
      }}>
        <ScrollView style={styles.whiteOverlay}>
          <View style={styles.container}>
            <Image source={{ uri: cover }} style={styles.imageCover} />
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
                      style={{ ...styles.lblInfoName, ...styles.colorHighLight }}
                    >
                      {_.get(event, "eventLocation.locationName")}
                    </Text>
                    <Text style={styles.lblInfoMeta}>
                      {_.get(event, "eventLocation.locationName")}
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.mapsImage}
                  borderRadius={5}
                  source={require("../../../assets/images/googlemap.png")}
                />
              </View>
            </View>
            <View style={styles.horizontalDivider} />
            <View style={styles.aboutContainer}>
              <Text style={styles.lblAbout}>About</Text>
              <Text style={styles.contentAbout}>
                {_.get(event, "eventDescription")}
              </Text>
            </View>
          </View>
        </ScrollView>
        <QuickAccessMenu />
      </View>
    );
  }
}

export default connect(
  null,
  null
)(EventDetail);
