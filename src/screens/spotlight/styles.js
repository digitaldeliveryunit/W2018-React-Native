import { StyleSheet } from "react-native";
import { CommonStyles, COLORS } from "../../helpers/common-styles";

export default StyleSheet.create({
  viewIcon: {
    width: 20,
    height: 20
  },
  carouselContainer: {
    flex: 1,
    alignItems: "center"
  },
  slide: { 
    paddingRight: 5, 
    paddingLeft: 5,
    paddingBottom: 10
  },
  currentSlide: {
    height: 40,
    justifyContent: "center"
  },
  currentSlideText: {
    fontSize: 16,
    color: COLORS.GREEN_PET_ICT
  }
});
