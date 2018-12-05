import { StyleSheet } from "react-native";
import { CommonStyles, COLORS } from "../../helpers/common-styles";
import { sizeWidth, sizeFont, sizeHeight } from "../../helpers/size.helper";

export default StyleSheet.create({
  viewIcon: {
    width: sizeWidth(6),
    height: sizeWidth(6)
  },
  carouselContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 5
  },
  slide: { 
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5
  },
  currentSlide: {
    height: sizeHeight(8),
    justifyContent: "center"
  },
  currentSlideText: {
    fontSize: sizeFont(4.5),
    color: COLORS.GRAYISH_BLUE,
    opacity: 0.55
  }
});
