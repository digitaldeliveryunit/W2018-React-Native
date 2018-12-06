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
import { fontMaker, fontSize } from "../helpers/font.helper";
import { sizeHeight, sizeWidth } from "../helpers/size.helper";
import SmallCardPlaceholder from "../components/SmallCardPlaceholder";

const { width } = Dimensions.get("window");
const WIDTH_SPOTLIGHT_ITEM = width / 2 - 20;
const IMAGE_HEIGHT = sizeHeight(17);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: sizeWidth(3)
  },
  wrapperItem: {
    backgroundColor: "#FFF",
    alignItems: "center",
    borderRadius: 4,
    margin: 0,
    ...CommonStyles.boxShadow
  },
  imageContainer: {
    width: "100%",
    overflow: "hidden",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  description: {
    borderTopWidth: 1,
    borderTopColor: COLORS.LIGHT_BORDER,
    margin: sizeWidth(3)
  },
  descriptionText: {
    fontSize: fontSize.f12,
    color: COLORS.GRAYISH_BLUE,
    textAlign: "justify",
    overflow: "hidden",
    opacity: 0.8,
    paddingTop: sizeWidth(1.5)
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
      <View style={{
        padding: sizeWidth(1.5),
        alignItems: "center"
      }}>
        <Text style={titleStyle} numberOfLines={1}>
          {item.spotlightName}
        </Text>
        <Text style={roleStyle} numberOfLines={1}>
          {item.spotlightTitle}
        </Text>
        {
          showDetail && (
            <View style={styles.description}>
              <Text style={styles.descriptionText} numberOfLines={10}>
              { item.description }
              </Text>
            </View>
          )
        }
      </View>
    </TouchableOpacity>
  );
};

const SpotlightCard = props => {
  const { spotlight, onPressSpotlightItem, loading } = props;
  return (
    <View style={styles.container}>
    {
      !_.isEmpty(spotlight) && spotlight.map((item, index) => (
        <View style={{ margin: 5 }} key={index}>
          <SmallCardPlaceholder
            onReady={!loading} 
            width={WIDTH_SPOTLIGHT_ITEM}
            imageHeight={IMAGE_HEIGHT}>
            <SpotlightItem
              item={item}
              onPressSpotlightItem={spotlightId => onPressSpotlightItem(spotlightId)}
              containerStyle={{
                width: WIDTH_SPOTLIGHT_ITEM
              }}
            />
          </SmallCardPlaceholder>
        </View>
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
  item: PropTypes.any.isRequired,
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
    height: IMAGE_HEIGHT
  },
  titleStyle: {
    paddingHorizontal: sizeWidth(3),
    alignSelf: "center",
    fontSize: fontSize.f16,
    lineHeight: fontSize.f16,
    color: COLORS.GREEN_PET_ICT,
    ...fontMaker({ weight: "600" })
  },
  roleStyle: {
    marginTop: 2,
    paddingHorizontal: sizeWidth(3),
    fontSize: fontSize.f13,
    lineHeight: fontSize.f13,
    color: COLORS.GRAYISH_BLUE
  },
  showDetail: false
};

export default SpotlightCard;
