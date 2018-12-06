import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Placeholder from "rn-placeholder";
import { COLORS, CommonStyles } from "../helpers/common-styles";
import { sizeWidth, sizeHeight } from "../helpers/size.helper";
import ImagePlaceholder from "./ImagePlaceholder";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: sizeHeight(25)
  },
  content: {
    width: "100%",
    flexDirection: "row",
    paddingBottom: 5
  },
  bottom: {
    paddingTop: 8,
    borderTopColor: "#F3F3F3",
    borderTopWidth: 1
  }
});

class CardPlaceholder extends Component {
  render() {
    const { containerStyles, width, onReady } = this.props;
    return (
      <View style={[containerStyles, { width: width }]}>
        <View style={styles.image}>
          <ImagePlaceholder onReady={onReady} animate="fade" />
        </View>
        <View style={{ padding: 10 }}>
          <View style={styles.content}>
            <View
              style={{
                marginLeft: 10,
                width: sizeWidth(60),
                height: sizeHeight(12)
              }}
            >
              <Placeholder.Paragraph
                lineNumber={3}
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
          <View style={styles.bottom}>
            <Placeholder.Line
              color={COLORS.CARD_PLACEHOLDER}
              width="80%"
              textSize={14}
              onReady={onReady}
              animate="fade"
            />
          </View>
        </View>
      </View>
    );
  }
}

CardPlaceholder.defaultProps = {
  containerStyles: {
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: "#FFF",
    ...CommonStyles.boxShadow,
    marginBottom: sizeWidth(3)
  },
  width: "100%"
};

export default Placeholder.connect(CardPlaceholder);
