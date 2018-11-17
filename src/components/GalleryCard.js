import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "./Text.component";
import PropTypes from "prop-types";
import FastImage from "react-native-fast-image";
import { sizeWidth, sizeHeight } from "../helpers/size.helper";
import { COLORS } from "../helpers/common-styles";

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
  return (
    <View style={[containerStyles, { width: props.width }]}>
      <Image
        source={require("../../assets/event_image.png")}
        style={styles.image}
        resizeMode={"cover"}
      />
      <View style={{ padding: 10 }}>
        <View style={styles.content}>
            <Text style={{ color: COLORS.GRAYISH_BLUE, fontSize: 15, marginBottom: 10 }}>{item.name}</Text>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <FileType type={item.type} extension={item.extension} />
                <Text style={{ fontSize: 10, color: "#CCC" }}>18 Feb 2018</Text>
            </View>
        </View>
      </View>
    </View>
  );
};

const FileType = ({type, extension}) => (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
        {
            type === "file" && <Image source={require("../../assets/images/pdf.png")} style={{ width: 12, height: 17 }} resizeMode="contain" />
        }
        {
            type === "image" && <Image source={require("../../assets/images/image.png")} style={{ width: 17, height: 12 }} resizeMode="contain" />
        }
        {
            type === "video" && <Image source={require("../../assets/images/mp4.png")} style={{ width: 17, height: 12 }} resizeMode="contain" />
        }
        <Text style={{ fontSize: 12, color: "#273D52", marginLeft: 5 }}>{extension}</Text>
    </View>
);

GalleryCard.propTypes = {
  containerStyles: PropTypes.object,
  width: PropTypes.any
};

GalleryCard.defaultProps = {
  containerStyles: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F3F3F3",
    overflow: "hidden",
    backgroundColor: "#FFF"
  },
  width: "100%"
};

export default GalleryCard;
