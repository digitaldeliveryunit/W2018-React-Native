import React, { Component } from "react";
import { connect } from "react-redux";
import { View, ScrollView } from "react-native";
import Text from "../../components/Text.component";
import styles from "./styles";
import { CommonStyles } from "../../helpers/common-styles";
import WrapperComponent from "../../components/Wrapper.component";
import DetailHeader from "../../components/DetailHeader";
import GalleryShelf from "../../components/gallery/GalleryShelf";
import QuickAccessButton from "../../components/QuickAccessButton";
import GalleryAPI from "../../api/gallery";

const MEDIA_TYPES = {
  DOCUMENT: "Document",
  IMAGE: "Image",
  VIDEO: "Video"
};

const eventId = "ca301f67-7b95-4c97-8013-19b5f15ad78e";

class Gallery extends Component {
  constructor () {
    super();
    this.state = {
      document: {
        loading: false,
        loaded: false,
        items: []
      },
      image: {
        loading: false,
        loaded: false,
        items: []
      },
      video: {
        loading: false,
        loaded: false,
        items: []
      }
    };
  }
  render() {
    const {document, image, video} = this.state;
    return (
      <WrapperComponent>
        <View style={{
          flex: 1,
          alignItems: "center"
        }}>
          <DetailHeader title={"Gallery"} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <GalleryShelf title="Files" items={document.items} loading={document.loading} />
            <GalleryShelf title="Images" items={image.items} loading={image.loading} reversedColor={true} />
            <GalleryShelf title="Videos" items={video.items} loading={video.loading} reversedColor={true} />
          </ScrollView>
        </View>
        <QuickAccessButton />
      </WrapperComponent>
    );
  }

  async componentDidMount () {
    this.loadDocuments();
    this.loadImages();
    this.loadVideos();
  }

  _renderHeader = () => (
    <View style={CommonStyles.header}>
      <Text style={CommonStyles.title}>myEvents</Text>
    </View>
  );

  async loadDocuments () {
    const { document } = this.state;
    this.setState({
      document: Object.assign({}, document, {
        loading: true,
        loaded: false
      })
    });
    try {
      const items = await GalleryAPI.getMediasByType(eventId, MEDIA_TYPES.DOCUMENT);
      this.setState({
        document: Object.assign({}, document, {
          loading: false,
          loaded: true,
          items
        })
      });
    } catch (e) {
      this.setState({
        document: {
          loading: false,
          loaded: false,
          items: []
        }
      });
    };
  }

  async loadVideos () {
    const { video } = this.state;
    this.setState({
      video: Object.assign({}, video, {
        loading: true,
        loaded: false
      })
    });
    try {
      const items = await GalleryAPI.getMediasByType(eventId, MEDIA_TYPES.VIDEO);
      this.setState({
        video: Object.assign({}, video, {
          loading: false,
          loaded: true,
          items
        })
      });
    } catch (e) {
      this.setState({
        video: {
          loading: false,
          loaded: false,
          items: []
        }
      });
    };
  }

  async loadImages () {
    const { image } = this.state;
    this.setState({
      image: Object.assign({}, image, {
        loading: true,
        loaded: false
      })
    });
    try {
      const items = await GalleryAPI.getMediasByType(eventId, MEDIA_TYPES.IMAGE);
      this.setState({
        image: Object.assign({}, image, {
          loading: false,
          loaded: true,
          items
        })
      });
    } catch (e) {
      this.setState({
        image: {
          loading: false,
          loaded: false,
          items: []
        }
      });
    };
  }
}

export default connect(
  null,
  null
)(Gallery);
