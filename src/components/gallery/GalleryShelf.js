import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Linking
} from "react-native";
import Text from "../Text.component";
import PropTypes from "prop-types";
import { sizeWidth, sizeFont } from "../../helpers/size.helper";
import GalleryCard from "../../components/GalleryCard";
import { COLORS, CommonStyles } from "../../helpers/common-styles";
import AppEmpty from "../../components/AppEmpty";
import {sizeHeight} from "../../helpers/size.helper";
import _ from "lodash";
import AppActivityIndicator from "../../components/AppActivityIndicator";
import { fontMaker } from "../../helpers/font.helper";
import SmallCardPlaceholder from "../../components/SmallCardPlaceholder";

const styles = StyleSheet.create({
  shelfContainer: {
    width: sizeWidth(100),
    alignItems: "center",
    marginBottom: 20
  },
  shelfHeader: {
    width: sizeWidth(90),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  title: {
    color: "#FFF",
    fontSize: sizeFont(5),
    ...fontMaker({ weight: "600" })
  },
  reversedTitle: {
    color: COLORS.GRAYISH_BLUE,
    fontSize: sizeFont(5),
    ...fontMaker({ weight: "600" })
  },
  seeAll: {
    color: "#FFF",
    fontSize: sizeFont(4)
  },
  reversedSeeAll: {
    color: COLORS.GREEN_PET_ICT,
    fontSize: sizeFont(4)
  },
  shelf: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 10
  },
  emptyContainer: {
    height: sizeHeight(20),
    justifyContent: "center",
    alignItems: "center"
  },
  itemWrapper: {
    paddingRight: 5,
    paddingLeft: 5,
    marginBottom: 5
  }
});

class GalleryShelf extends React.Component {
  render() {
    const { reversedColor, title, items, loading } = this.props;
    return (
      <View style={styles.shelfContainer}>
        <View style={styles.shelfHeader}>
          <Text style={reversedColor ? styles.reversedTitle : styles.title}>
            {title}
          </Text>
          <TouchableOpacity>
            <Text style={reversedColor ? styles.reversedSeeAll : styles.seeAll}>
              See All ({items.length})
            </Text>
          </TouchableOpacity>
        </View>
        {
          _.isEmpty(items) ? (
            <AppEmpty 
              containerStyles={styles.emptyContainer} 
              textColor={reversedColor ? "#000" : "#FFF"} />
          ) : this._renderGalleries(items)
        }
      </View>
    );
  }
  _keyExtractor = (item, index) => `${index}`;
  _renderGalleries = galleries => {
    const { loading } = this.props;
    return (
        <FlatList
            data={galleries}
            keyExtractor={this._keyExtractor}
            renderItem={({ item, index }) => {
            return (
              <View style={styles.itemWrapper}>
                <SmallCardPlaceholder onReady={!loading} width={sizeWidth(50)}>
                  <TouchableOpacity 
                    key={index} 
                    onPress={() => this.openMediaUrl(item.url)}
                  >
                    <GalleryCard item={item} width={sizeWidth(50)} />
                  </TouchableOpacity>
                </SmallCardPlaceholder>
              </View>
            );
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.shelf}
            directionalLockEnabled
            legacyImplementation={false}
            enableEmptySections={true}
            onEndReachedThreshold={0.5}
            onEndReached={() => {}}
        />
    );
  };
  openMediaUrl (url) {
    if (!url) {
      return;
    }
    Linking.openURL(url);
  }
}

GalleryShelf.propTypes = {
  reversedColor: PropTypes.bool,
  title: PropTypes.string.isRequired,
  items: PropTypes.array,
  loading: PropTypes.bool
};

GalleryShelf.defaultProps = {
  reversedColor: false,
  loading: false
};

export default GalleryShelf;
