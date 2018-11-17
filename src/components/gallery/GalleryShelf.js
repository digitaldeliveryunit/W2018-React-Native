import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList
} from "react-native";
import Text from "../Text.component";
import PropTypes from "prop-types";
import { sizeWidth } from "../../helpers/size.helper";
import GalleryCard from "../../components/GalleryCard";
import { COLORS } from "../../helpers/common-styles";

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
    fontSize: 20,
    fontWeight: "bold"
  },
  reversedTitle: {
    color: COLORS.GRAYISH_BLUE,
    fontSize: 20,
    fontWeight: "bold"
  },
  seeAll: {
    color: "#FFF",
    fontSize: 14
  },
  reversedSeeAll: {
    color: COLORS.GREEN_PET_ICT,
    fontSize: 14
  },
  shelf: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 10
  }
});

class GalleryShelf extends React.Component {
  render() {
    const { reversedColor, title, items } = this.props;
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
        {this._renderGalleries(items)}
      </View>
    );
  }
  _keyExtractor = (item, index) => `${index}`;
  _renderGalleries = galleries => {
    return (
        <FlatList
            data={galleries}
            keyExtractor={this._keyExtractor}
            renderItem={({ item, index }) => {
            return (
                <TouchableOpacity
                key={index}
                style={{
                    paddingRight: 10
                }}
                >
                <GalleryCard item={item} width={sizeWidth(50)} />
                </TouchableOpacity>
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
}

GalleryShelf.propTypes = {
  reversedColor: PropTypes.bool,
  title: PropTypes.string.isRequired,
  items: PropTypes.array
};

GalleryShelf.defaultProps = {
  reversedColor: false
};

export default GalleryShelf;
