import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Animated
} from "react-native";
import Text from "../../components/Text.component";
import styles from "./styles";
import { CommonStyles, COLORS } from "../../helpers/common-styles";
import WrapperComponent from "../../components/Wrapper.component";
import EventCard from "../../components/EventCard";
import ParallaxScrollView from "react-native-parallax-scroll-view";

const results = [
  {
    eventId: "ad94c1d4-38c6-49d6-bdf4-85b5796e80cc",
    imageUrl:
      "https://stagingfileservice.petronas.com/api/v2/r/p/ccb3ce26-af6f-42e9-a9e4-4d009f29a7bc/b831b4f2-05a3-47b0-b37f-56c5dde380ae-1-906845.jpg",
    eventName: "Formula 1 PETRONAS Malaysia Grand Prix 2018",
    eventDescription:
      "<p>The Malaysian Grand Prix is a round of the Formula One World Championship. It has been held at the Sepang International Circuit since 1999, although FIA-sanctioned racing in Malaysia has existed since the 1960s. Since 2011, the race has been officially known as the Malaysia Grand Prix.</p>",
    dateFrom: "2018-12-26T08:00:00",
    dateTo: "2018-12-27T16:00:00",
    venue: "Entrance",
    eventLocation: {
      id: "6c5059a4-aef2-441e-b412-7483bdf5bec7",
      locationName: "Sepang",
      latitude: 2.7568664,
      longitude: 101.6463927,
      isDeleted: false,
      discriminator: "Location"
    },
    eventStatus: "Published",
    isFeatured: true,
    eventType: "Public",
    surveyUrl: null,
    surveyResultUrl: null,
    isBookmark: true,
    userStatus: "JOINED"
  },
  {
    eventId: "ca301f67-7b95-4c97-8013-19b5f15ad78e",
    imageUrl:
      "https://fileservice.petronas.com/api/v1/view/image/6747e91a-4e26-479c-8645-4d8337c7840d-capture-1280x720.png",
    eventName: "BAMup Strategy 2019 & PUReCOP#4 2018",
    eventDescription:
      "<p>Bad Actor Upstream Strategy 2019 &amp; PETRONAS Upstream Reliability COP 2018&nbsp;</p>",
    dateFrom: "2018-12-30T08:00:00",
    dateTo: "2018-12-31T18:30:00",
    venue: "Be Amazing-Level 21",
    eventLocation: {
      id: "c816f57b-8b61-422f-b2f0-4260993d13a3",
      locationName: "Suria KLCC, Kuala Lumpur",
      latitude: 3.157951,
      longitude: 101.711623,
      isDeleted: false,
      discriminator: "Location"
    },
    eventStatus: "Published",
    isFeatured: true,
    eventType: "Public",
    surveyUrl: null,
    surveyResultUrl: null,
    isBookmark: false,
    userStatus: "NEW"
  }
];

class Search extends Component {
  render() {
    return (
      <WrapperComponent>
        <View
          style={{
            flex: 1,
            alignItems: "center"
          }}
        >
          {this._renderHeader()}
          {this._renderSearchBox()}
          <View style={styles.searchResult}>
            <Text style={styles.founds}>Search Results (1)</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              {this._renderSearchResult(results)}
            </ScrollView>
          </View>

          {/* <ParallaxScrollView
          // Reference id
          ref={ref => {
            this.parallaxScrollView = ref;
          }}
          // The color of the header background.
          backgroundColor="none"
          // The speed factor that the background moves at relative to the foreground.
          backgroundScrollSpeed={2}
          // If true, the foreground will fade out as the user scrolls up.
          fadeOutForeground={true}
          // The height of parallax header, required
          parallaxHeaderHeight={200}
          renderForeground={() => (
            <View>
              {
                this._renderHeader()
              }
              {
                this._renderSearchBox()
              }
            </View>
          )}
          stickyHeaderHeight={100}
          renderStickyHeader={() => (
            this._renderSearchBox()
          )}
          renderFixedHeader={() => (
            this._renderSearchBox()
          )}
          // The background color of the content.
          contentBackgroundColor="transparent"
        >
          <View style={styles.searchResult}>
            <Text style={styles.founds}>Search Results (1)</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              {this._renderSearchResult(results)}
            </ScrollView>
          </View>
        </ParallaxScrollView> */}
        </View>
      </WrapperComponent>
    );
  }

  _renderHeader = () => (
    <View style={CommonStyles.header}>
      <Text style={CommonStyles.title}>Search</Text>
    </View>
  );

  _renderSearchBox = () => (
    <View style={styles.searchBox}>
      <Image
        source={require("../../../assets/images/search_white.png")}
        style={styles.searchIcon}
        resizeMode={"contain"}
      />
      <TextInput
        placeholder={"Say something..."}
        style={styles.searchInput}
        underlineColorAndroid="transparent"
        placeholderTextColor={COLORS.PALE_NAVY}
      />
    </View>
  );

  _renderSearchResult = events => (
    <View style={styles.listContainer}>
      {events.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{ marginBottom: 20 }}
          onPress={() => this.onGoDetail()}
        >
          <EventCard event={item} />
        </TouchableOpacity>
      ))}
    </View>
  );

  onGoDetail() {
    this.props.navigation.navigate("EventDetail");
  }
}

export default connect(
  null,
  null
)(Search);
