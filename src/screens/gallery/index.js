import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import { CommonStyles } from "../../helpers/common-styles";
import WrapperComponent from "../../components/Wrapper.component";
import DetailHeader from "../../components/DetailHeader";
import GalleryCard from "../../components/GalleryCard";
import GalleryShelf from "../../components/gallery/GalleryShelf";
import QuickAccessMenu from "../../components/QuickAccessMenu";

const files = [
  { id: 1, type: "file", extension: "PDF", name: "File PDF 1.pdf" },
  { id: 2, type: "file", extension: "Docx", name: "File Docx 2.pdf" },
  { id: 3, type: "file", extension: "Xlsx", name: "File Xlsx 3.pdf" },
  { id: 4, type: "file", extension: "Pptx", name: "File Pptx 4.pdf" }
];
const images = [
  { id: 1, type: "image", extension: "jpg", name: "Image 1.jpg" },
  { id: 2, type: "image", extension: "png", name: "Image 2.png" },
  { id: 3, type: "image", extension: "gif", name: "Image 3.gif" }
];
const videos = [
  { id: 1, type: "video", extension: "mp4", name: "sample 1.mp4" },
  { id: 2, type: "video", extension: "mp4", name: "sample 2.mp4" },
  { id: 3, type: "video", extension: "mp4", name: "sample 3.mp4" },
  { id: 4, type: "video", extension: "mp4", name: "sample 4.mp4" },
  { id: 5, type: "video", extension: "mp4", name: "sample 4.mp4" }
];

class Gallery extends Component {
  render() {
    return (
      <WrapperComponent>
        <View style={{
          flex: 1,
          alignItems: "center"
        }}>
          <DetailHeader title={"Gallery"} />
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <GalleryShelf title="Files" items={files} />
            <GalleryShelf title="Images" items={images} reversedColor={true} />
            <GalleryShelf title="Videos" items={videos} reversedColor={true} />
          </ScrollView>
        </View>
        <QuickAccessMenu />
      </WrapperComponent>
    );
  }

  _renderHeader = () => (
    <View style={CommonStyles.header}>
      <Text style={CommonStyles.title}>myEvents</Text>
    </View>
  );

  _renderFiles = (files) => (
    <View style={styles.listContainer}>
      <GalleryCard />
    </View>
  );
}

export default connect(
  null,
  null
)(Gallery);
