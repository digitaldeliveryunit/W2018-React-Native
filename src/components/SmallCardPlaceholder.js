import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Placeholder from "rn-placeholder";
import { COLORS, CommonStyles } from "../helpers/common-styles";
import { sizeHeight } from "../helpers/size.helper";
import ImagePlaceholder from "./ImagePlaceholder";

const styles = StyleSheet.create({
  image: {
    width: "100%"
  },
  content: {
    width: "100%"
  }
});

class SmallCardPlaceholder extends Component {
  render() {
    const { containerStyles, width, onReady, imageHeight } = this.props;
    return (
      <View style={[ containerStyles, { width }]}>
        <View style={[styles.image, { height: imageHeight }]}>
          <ImagePlaceholder onReady={onReady} animate="fade" />
        </View>
        <View style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
          <View style={styles.content}>
            <Placeholder.Paragraph
              lineNumber={2}
              textSize={16}
              lineSpacing={5}
              color={COLORS.CARD_PLACEHOLDER}
              width="100%"
              lastLineWidth="70%"
              firstLineWidth="50%"
              onReady={onReady}
              animate="fade"
            />
          </View>
        </View>
      </View>
    );
  }
}

SmallCardPlaceholder.defaultProps = {
  containerStyles: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#FFF",
    ...CommonStyles.boxShadow
  },
  width: "100%",
  imageHeight: sizeHeight(20)
};

export default Placeholder.connect(SmallCardPlaceholder);
