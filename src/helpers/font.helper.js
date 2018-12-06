import { Platform } from "react-native";
import normalize from "./normalize";

// we define available font weight and styles for each font here
const font = {
  "Helvetica Neue": {
    weights: {
      "800": "Heavy",
      "700": "Bold",
      "600": "Medium",
      "500": "Regular",
      "400": "Light",
      "300": "Thin"
    },
    styles: {
      "italic": "Italic"
    }
  },
  "SF-Pro-Display": {
    weights: {
      "800": "Heavy",
      "700": "Bold",
      "600": "Semibold",
      "500": "Medium",
      "400": "Regular",
      "300": "Light",
      "200": "Thin",
      "100": "Ultralight"
    },
    styles: {
      "italic": "Italic"
    }
  },
  Montserrat: {
    weights: {
      "800": "ExtraBold",
      "700": "Bold",
      "600": "SemiBold",
      "500": "Medium",
      "400": "Regular",
      "300": "Light"
    },
    styles: {
      "italic": "Italic"
    }
  }
};

// generate styles for a font with given weight and style
const fontMaker = (options = {}) => {
  let { weight, style, family } = Object.assign(
    {
      weight: null,
      style: null,
      family: "SF-Pro-Display"
    },
    options
  );

  const { weights, styles } = font[family];
  if (Platform.OS === "android") {
    weight = weight ? weights[weight] : "Regular";
    style = style ? styles[style] : "";
    const suffix = weight + style;

    return {
      fontFamily: `${family}-${suffix}`,
      fontWeight: "normal"
    };
  } else {
    style = styles[style] ? style : "normal";

    return {
      // fontFamily: family,
      fontWeight: weight || "400",
      fontStyle: style
    };
  }
};

const fontSize = {
  smaller: normalize(10),
  small: normalize(12),
  medium: normalize(14),
  large: normalize(16),
  larger: normalize(18),
  f9: normalize(9),
  f10: normalize(10),
  f11: normalize(11),
  f12: normalize(12),
  f13: normalize(13),
  f14: normalize(14),
  f16: normalize(16),
  f18: normalize(18),
  f20: normalize(20),
  f24: normalize(24),
  f30: normalize(30),
  f40: normalize(40),
  f50: normalize(50)
};

export {
  fontSize,
  fontMaker
};