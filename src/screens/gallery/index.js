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
import TabBarBottom from "../../components/tab-bar/TabBarBottom";

const MEDIA_TYPES = {
  DOCUMENT: "Document",
  IMAGE: "Image",
  VIDEO: "Video"
};

class Gallery extends Component {
  constructor (props) {
    super(props);
    const { currentEvent } = props.navigation.state.params;
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
      },
      currentEvent
    };
  }
  render() {
    const {document, image, video, currentEvent} = this.state;
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
        <QuickAccessButton currentEvent={currentEvent} />
        <TabBarBottom navigation={this.props.navigation}/>
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
    const { document, currentEvent } = this.state;
    this.setState({
      document: Object.assign({}, document, {
        loading: true,
        loaded: false,
        items: [1, 2, 3]
      })
    });
    try {
      const items = await GalleryAPI.getMediasByType(currentEvent.eventId, MEDIA_TYPES.DOCUMENT);
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
    const { video, currentEvent } = this.state;
    this.setState({
      video: Object.assign({}, video, {
        loading: true,
        loaded: false,
        items: [1, 2, 3]
      })
    });
    try {
      const items = await GalleryAPI.getMediasByType(currentEvent.eventId, MEDIA_TYPES.VIDEO);
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
    const { image, currentEvent } = this.state;
    this.setState({
      image: Object.assign({}, image, {
        loading: true,
        loaded: false,
        items: [1, 2, 3]
      })
    });
    try {
      const items = await GalleryAPI.getMediasByType(currentEvent.eventId, MEDIA_TYPES.IMAGE);
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
