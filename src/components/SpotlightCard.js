import React from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { COLORS } from "../helpers/common-styles";

const { width } = Dimensions.get("window");
const WIDTH_SPOTLIGHT_ITEM = width / 2 - 44;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 12
  },
  wrapperItem: {
    flexDirection: "column",
    backgroundColor: "#FFF",
    alignItems: "center",
    width: WIDTH_SPOTLIGHT_ITEM,
    borderRadius: 9,
    margin: 10,
    shadowColor: "#060606",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 9,
    shadowOpacity: 0.1
  },
  imageContainer: {
    overflow: "hidden",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9
  },
  image: {
    width: WIDTH_SPOTLIGHT_ITEM,
    height: 92
  },
  lblName: {
    marginTop: 10,
    paddingHorizontal: 25,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 13,
    lineHeight: 16,
    color: COLORS.GREEN_PET_ICT,
  },
  lblRole: {
    marginTop: 2,
    marginBottom: 14,
    paddingHorizontal: 25,
    fontSize: 10,
    lineHeight: 13,
    color: COLORS.GRAYISH_BLUE
  }
});

const SpotlightItem = (props) => {
  const { item, onPressSpotlightItem } = props;
  return (
    <TouchableOpacity
      elevation={5}
      style={styles.wrapperItem}
      onPress={() => onPressSpotlightItem(item.id)}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: item.imageUrl }}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.lblName} numberOfLines={1}>
        {item.spotlightName}
      </Text>
      <Text style={styles.lblRole} numberOfLines={1}>
        {item.role}
      </Text>
    </TouchableOpacity>
  );
};

const SpotlightCard = props => {
  const { spotlight, onPressSpotlightItem } = props;
  return (
    <View style={styles.container}>
      <SpotlightItem
        item={spotlight[0]}
        onPressSpotlightItem={spotlightId => onPressSpotlightItem(spotlightId)}
      />
      <SpotlightItem
        item={spotlight[1]}
        onPressSpotlightItem={spotlightId => onPressSpotlightItem(spotlightId)}
      />
    </View>
  );
};

SpotlightCard.propTypes = {
  spotlight: PropTypes.array.isRequired,
  onPressSpotlightItem: PropTypes.func
};

SpotlightItem.propTypes = {
  item: PropTypes.object.isRequired,
  onPressSpotlightItem: PropTypes.func
};

export default SpotlightCard;
