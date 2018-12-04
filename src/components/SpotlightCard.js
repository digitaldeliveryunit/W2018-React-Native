import React from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { COLORS, CommonStyles } from "../helpers/common-styles";
import Text from "./Text.component";
import _ from "lodash";
import { fontMaker } from "../helpers/font.helper";
import { sizeWidth, sizeFont } from "../helpers/size.helper";

const { width } = Dimensions.get("window");
const WIDTH_SPOTLIGHT_ITEM = width / 2 - 44;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 12
  },
  wrapperItem: {
    backgroundColor: "#FFF",
    alignItems: "center",
    borderRadius: 9,
    margin: 0,
    ...CommonStyles.boxShadow
  },
  imageContainer: {
    width: "100%",
    overflow: "hidden",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9
  },
  description: {
    borderTopWidth: 1,
    borderTopColor: "#F3F3F3",
    width: "90%",
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  descriptionText: {
    fontSize: sizeFont(4),
    color: COLORS.GRAYISH_BLUE,
    textAlign: "justify",
    overflow: "hidden",
    opacity: 0.8,
    lineHeight: 24
  }
});

export const SpotlightItem = (props) => {
  const { item, onPressSpotlightItem, containerStyle, imageStyle, titleStyle, roleStyle, showDetail } = props;
  return (
    <TouchableOpacity
      style={[styles.wrapperItem, containerStyle]}
      onPress={() => onPressSpotlightItem(item.spotlightId)}
    >
      <View style={styles.imageContainer}>
        <Image
          style={imageStyle}
          source={{ uri: item.imageUrl }}
          resizeMode="cover"
        />
      </View>
      <Text style={titleStyle} numberOfLines={1}>
        {item.spotlightName}
      </Text>
      <Text style={roleStyle} numberOfLines={1}>
        {item.description}
      </Text>
      {
        showDetail && (
          <View style={styles.description}>
            <Text style={styles.descriptionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>
        )
      }
    </TouchableOpacity>
  );
};

const SpotlightCard = props => {
  const { spotlight, onPressSpotlightItem } = props;
  return (
    <View style={styles.container}>
    {
      !_.isEmpty(spotlight) && spotlight.map((item, index) => (
        <SpotlightItem
          key={index}
          item={item}
          onPressSpotlightItem={spotlightId => onPressSpotlightItem(spotlightId)}
          containerStyle={{
            width: WIDTH_SPOTLIGHT_ITEM,
            margin: 10
          }}
        />
      ))
    }
    </View>
  );
};

SpotlightCard.propTypes = {
  spotlight: PropTypes.array.isRequired,
  onPressSpotlightItem: PropTypes.func
};

SpotlightItem.propTypes = {
  item: PropTypes.object.isRequired,
  onPressSpotlightItem: PropTypes.func,
  containerStyle: PropTypes.any,
  imageStyle: PropTypes.any,
  titleStyle: PropTypes.any,
  roleStyle: PropTypes.any,
  detailMode: PropTypes.bool,
  showDetail: PropTypes.bool
};

SpotlightItem.defaultProps = {
  onPressSpotlightItem: function () {},
  containerStyle: {
    width: WIDTH_SPOTLIGHT_ITEM
  },
  imageStyle: {
    width: WIDTH_SPOTLIGHT_ITEM,
    height: 92
  },
  titleStyle: {
    marginTop: 10,
    paddingHorizontal: 25,
    alignSelf: "center",
    fontSize: sizeFont(3.8),
    lineHeight: 16,
    color: COLORS.GREEN_PET_ICT,
    ...fontMaker({ weight: "600" })
  },
  roleStyle: {
    marginTop: 2,
    marginBottom: 14,
    paddingHorizontal: 25,
    fontSize: sizeFont(3),
    lineHeight: 13,
    color: COLORS.GRAYISH_BLUE
  },
  showDetail: false
};

export default SpotlightCard;
