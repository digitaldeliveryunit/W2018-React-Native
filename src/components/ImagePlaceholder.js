import React, { Component } from "react";
import { View } from "react-native";
import Placeholder from "rn-placeholder";

class ImagePlaceholder extends Component {
  render() {
    return <View style={{
      backgroundColor: "#CCC",
      width: "100%",
      height: "100%"
    }} />;
  }
}

export default Placeholder.connect(ImagePlaceholder);
