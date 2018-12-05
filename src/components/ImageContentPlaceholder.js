import React, {Component} from "react";
import { View } from "react-native";
import Placeholder from "rn-placeholder";
import { COLORS } from "../helpers/common-styles";

class ImageContentPlaceholder extends Component {
  render () {
    const { containerStyles, onReady } = this.props;
    return (
      <View style={containerStyles}>
        <Placeholder.ImageContent
          position="right"
          lineNumber={4}
          textSize={14}
          lineSpacing={10}
          color={COLORS.CARD_PLACEHOLDER}
          width="100%"
          lastLineWidth="30%"
          firstLineWidth="10%"
          onReady={onReady}
          animate="fade"
        />
      </View>
    );
  }
}

ImageContentPlaceholder.defaultProps = {
  containerStyles: {
    paddingVertical: 20
  }
};

export default Placeholder.connect(ImageContentPlaceholder);