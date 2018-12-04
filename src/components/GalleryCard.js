import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "./Text.component";
import PropTypes from "prop-types";
import FastImage from "react-native-fast-image";
import { sizeWidth, sizeHeight, sizeFont } from "../helpers/size.helper";
import { COLORS, CommonStyles } from "../helpers/common-styles";
import { toDateString } from "../helpers/date-time.helper";

const MEDIA_TYPES = {
  DOCUMENT: "Document",
  IMAGE: "Image",
  VIDEO: "Video"
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: sizeHeight(20)
  },
  content: {
    width: "100%"
  }
});

const GalleryCard = props => {
  const { containerStyles, item } = props;
  const split = item.fileName.split(".");
  const extension = split[split.length - 1];
  return (
    <View style={[containerStyles, { width: props.width }]}>
      <FastImage
        source={{uri: item.thumbUrl}}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={{ padding: 10 }}>
        <View style={styles.content}>
            <Text style={{ color: COLORS.GRAYISH_BLUE, fontSize: sizeFont(4), marginBottom: 10 }}>{item.fileName}</Text>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <FileType type={item.mediaType} extension={extension} />
                <Text style={{ fontSize: sizeFont(3), color: "#CCC" }}>{toDateString(item.createDate)}</Text>
            </View>
        </View>
      </View>
    </View>
  );
};

const FileType = ({type, extension}) => (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
        {
            type === MEDIA_TYPES.DOCUMENT && <Image source={require("../../assets/images/pdf.png")} style={{ width: sizeWidth(3.5), height: sizeWidth(5) }} resizeMode="contain" />
        }
        {
            type === MEDIA_TYPES.IMAGE && <Image source={require("../../assets/images/image.png")} style={{ width: sizeWidth(5), height: sizeWidth(3.5) }} resizeMode="contain" />
        }
        {
            type === MEDIA_TYPES.VIDEO && <Image source={require("../../assets/images/mp4.png")} style={{ width: sizeWidth(5), height: sizeWidth(3.5) }} resizeMode="contain" />
        }
        <Text style={{ fontSize: sizeFont(3), color: "#273D52", marginLeft: 5 }}>{extension}</Text>
    </View>
);

GalleryCard.propTypes = {
  containerStyles: PropTypes.object,
  width: PropTypes.any
};

GalleryCard.defaultProps = {
  containerStyles: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#FFF",
    ...CommonStyles.boxShadow
  },
  width: "100%"
};

export default GalleryCard;
