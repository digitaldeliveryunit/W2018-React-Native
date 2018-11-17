import { Platform } from "react-native";

// we define available font weight and styles for each font here
const font = {
  "Helvetica Neue": {
    "weights": {
      "800": "Heavy",
      "700": "Bold",
      "600": "Medium",
      "500": "Regular",
      "400": "Light",
      "300": "Thin"
    },
    "styles": {
      "italic": "Italic"
    }
  },
  "SF Pro Text": {
    "weights": {
      "800": "Heavy",
      "700": "Bold",
      "600": "Semibold",
      "500": "Medium",
      "400": "Regular",
      "300": "Light"
    },
    "styles": {
      "italic": "Italic"
    }
  }
};

// generate styles for a font with given weight and style
export const fontMaker = (options = {}) => {
  let { weight, style, family } = Object.assign(
    {
      weight: null,
      style: null,
      family: "Helvetica Neue"
    },
    options
  );

  const { weights, styles } = font[family];

  if (Platform.OS === "android") {
    weight = weights[weight] ? weights[weight] : "";
    style = styles[style] ? styles[style] : "";

    const suffix = weight + style;

    return {
      fontFamily: family + (suffix.length ? `-${suffix}` : ""),
      fontWeight: "normal"
    };
  } else {
    style = styles[style] ? style : "normal";

    return {
      fontFamily: family,
      fontWeight: weight || "400",
      fontStyle: style
    };
  }
};
