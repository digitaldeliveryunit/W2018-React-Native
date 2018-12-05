import React, { Component } from "react";
import { View } from "react-native";
import Placeholder from "rn-placeholder";
import { COLORS } from "../helpers/common-styles";

class ImagePlaceholder extends Component {
  render() {
    return <View style={{
      backgroundColor: COLORS.CARD_PLACEHOLDER,
      width: "100%",
      height: "100%"
    }} />;
  }
}

export default Placeholder.connect(ImagePlaceholder);
