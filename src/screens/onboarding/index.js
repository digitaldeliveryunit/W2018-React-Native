import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import Text from "../../components/Text.component";
import styles from "./styles";
import { CommonStyles } from "../../helpers/common-styles";
import Swiper from "react-native-swiper";

export default class OnBoarding extends Component {
  render() {
    return (
      <ImageBackground 
        source={require("../../../assets/images/bg_onboard.png")}
        style={CommonStyles.container}>
        <Swiper
          ref={ref => this.swiper = ref}
          style={styles.swiper}
          showsButtons={false}
          dot={<View style={styles.dotNormal} />}
          activeDot={<View style={styles.dotActive} />}
          autoplay={false}
          loop={false}
        >
          <View style={styles.onboarding}>
            <View style={styles.image}>
              <Image 
                source={require("../../../assets/images/onboarding_1.png")}
                resizeMode={"contain"} />
            </View>
            <Text style={styles.title}>Easy to find events</Text>
            <Text style={styles.content}>Easily find all the latest events near you.</Text>
          </View>
          <View style={styles.onboarding}>
            <View style={styles.image}>
              <Image 
                source={require("../../../assets/images/onboarding_2.png")}
                resizeMode={"contain"} />
            </View>
            <Text style={styles.title}>Save events to Calendar</Text>
            <Text style={styles.content}>Easily add the events to your calendar.</Text>
          </View>
          <View style={styles.onboarding}>
            <View style={styles.image}>
              <Image 
                source={require("../../../assets/images/onboarding_3.png")}
                resizeMode={"contain"} />
            </View>
            <Text style={styles.title}>Engage in the events</Text>
            <Text style={styles.content}>Do More, See More, Learn More by engaging in all the variety of events. </Text>
          </View>
        </Swiper>
        <View style={styles.bottomRow}>
          <TouchableOpacity style={styles.bottomButton} onPress={() => this.goToHome()}>
            <Text style={styles.bottomText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton} onPress={this.onNextSlide.bind(this)}>
            <Text style={styles.bottomText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }

  goToHome () {
    this.props.navigation.navigate("MainScreen");
  }

  onNextSlide () {
    const { index } = this.swiper.state;
    if (index >= 2) {
      this.goToHome();
    }
    this.swiper.scrollBy(1);
  }
}