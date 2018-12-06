import { StyleSheet } from "react-native";
import { COLORS } from "../../helpers/common-styles";
import { sizeWidth, sizeHeight } from "../../helpers/size.helper";
import { fontSize } from "../../helpers/font.helper";

export default StyleSheet.create({
  viewIcon: {
    width: sizeWidth(5),
    height: sizeWidth(5),
    resizeMode: "contain"
  },
  carouselContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: sizeWidth(5)
  },
  slide: { 
    paddingHorizontal: sizeWidth(1.5),
    paddingBottom: sizeWidth(1.5)
  },
  currentSlide: {
    height: sizeHeight(6),
    justifyContent: "center"
  },
  currentSlideText: {
    fontSize: fontSize.f16,
    color: COLORS.GRAYISH_BLUE,
    opacity: 0.55
  }
});
