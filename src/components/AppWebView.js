import React from "react";
import PropTypes from "prop-types";
import MyWebView from "react-native-webview-autoheight";
import { Platform } from "react-native";

const AppWebView = props => {
  const html = `
    <html>
      <head>
        <style>
          ${props.htmlStyles}
        </style>
      </head>
      <body>
          ${props.content}
      </body>
    </html>
  `;
  return (
    <MyWebView
      autoHeight={true}
      width={"100%"}
      source={{html}}
      startInLoadingState={true}
      scalesPageToFit={Platform.OS === "android"}
    />
  );
};

AppWebView.propTypes = {
  content: PropTypes.string,
  htmlStyles: PropTypes.string
};

AppWebView.defaultProps = {
  content: "",
  htmlStyles: `
    body {
      color: rgb(60,80,99);
      font-family: Helvetica Neue;
      font-size: 14px;
    }
    img {
      height: auto !important;
      max-width: 100% !important;
    }`
};

export default AppWebView;