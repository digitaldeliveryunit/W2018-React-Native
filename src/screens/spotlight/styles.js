import { StyleSheet } from "react-native";
import { COLORS } from "../../helpers/common-styles";

export default StyleSheet.create({
  viewIcon: {
    width: 20,
    height: 20
  },
  carouselContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 15
  },
  slide: { 
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5
  },
  currentSlide: {
    height: 40,
    justifyContent: "center"
  },
  currentSlideText: {
    fontSize: 16,
    color: COLORS.GRAYISH_BLUE
  }
});
