import { StyleSheet } from "react-native";
import { sizeWidth, sizeHeight, sizeFont } from "../../helpers/size.helper";
import { fontMaker } from "../../helpers/font.helper";
 
export default StyleSheet.create({
  swiper: {
  },
  dotNormal: {
    backgroundColor: "#fff",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 4,
    marginRight: 4,
    opacity: 0.3
  },
  dotActive: {
    backgroundColor: "#fff",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 4,
    marginRight: 4
  },
  onboarding: {
    flex: 1,
    alignItems: "center",
    marginTop: sizeHeight(15)
  },
  image: {
    width: sizeWidth(90),
    height: sizeWidth(90),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40
  },
  title: {
    color: "#FFF",
    fontSize: sizeFont(6),
    marginBottom: 10,
    ...fontMaker({ weight: "600" })
  },
  content: {
    color: "#FFF",
    fontSize: sizeFont(4),
    textAlign: "center",
    paddingLeft: sizeWidth(8),
    paddingRight: sizeWidth(8)
  },
  bottomRow: {
    width: sizeWidth(100),
    paddingLeft: sizeWidth(5),
    paddingRight: sizeWidth(5),
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  }, 
  bottomButton: {
  },
  bottomText: {
    color: "#FFF",
    fontSize: 16
  }
});
