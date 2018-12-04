import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Platform,
  Image
} from "react-native";
import { SafeAreaView } from "react-navigation";
import CrossFadeIcon from "./CrossFadeIcon";
import { COLORS } from "../../helpers/common-styles";
import { sizeFont } from "../../helpers/size.helper";
import navigationService from "../../helpers/navigation-service";
import {navStyle} from "../../navigator/main.navigator";

const majorVersion = parseInt(Platform.Version, 10);
const isIos = Platform.OS === "ios";
const isIOS11 = majorVersion >= 11 && isIos;

const DEFAULT_MAX_TAB_ITEM_WIDTH = 125;

const routes = [
  {
    key: "Home",
    routeName: "Home",
    tabBarIcon: () => (
      <Image
        source={require("../../../assets/images/home.png")}
        style={styles.iconStyle}
      />
    )
  },
  {
    key: "MyEvents",
    routeName: "My Events",
    tabBarIcon: () => (
      <Image
        source={require("../../../assets/images/events.png")}
        style={styles.iconStyle}
      />
    )
  },
  {
    key: "Search",
    routeName: "Search",
    tabBarIcon: () => (
      <Image
        source={require("../../../assets/images/search.png")}
        style={styles.iconStyle}
      />
    )
  },
  {
    key: "Profile",
    routeName: "Profile",
    tabBarIcon: () => (
      <Image
        source={require("../../../assets/images/profile.png")}
        style={styles.iconStyle}
      />
    )
  }
];

class TouchableWithoutFeedbackWrapper extends Component {
  render() {
    const { onPress, onLongPress, accessibilityLabel, ...props } = this.props;

    return (
      <TouchableWithoutFeedback
        onPress={onPress}
        onLongPress={onLongPress}
        hitSlop={{ left: 15, right: 15, top: 5, bottom: 5 }}
        accessibilityLabel={accessibilityLabel}
      >
        <View {...props} />
      </TouchableWithoutFeedback>
    );
  }
}

class TabBarBottom extends Component {
  static defaultProps = {
    activeTintColor: "#007AFF",
    activeBackgroundColor: "transparent",
    inactiveTintColor: "#8E8E93",
    inactiveBackgroundColor: "transparent",
    showLabel: true,
    showIcon: true,
    allowFontScaling: true,
    adaptive: isIOS11,
    safeAreaInset: { bottom: "always", top: "never" }
  };

  _renderLabel = ({ route, focused }) => {
    const {
      activeTintColor,
      inactiveTintColor,
      labelStyle,
      showLabel,
      showIcon,
      allowFontScaling
    } = this.props;

    if (showLabel === false) {
      return null;
    }

    const label = route.routeName;
    const tintColor = focused ? activeTintColor : inactiveTintColor;

    if (typeof label === "string") {
      return (
        <Animated.Text
          numberOfLines={1}
          style={[
            styles.label,
            { color: tintColor },
            showIcon && this._shouldUseHorizontalLabels()
              ? styles.labelBeside
              : styles.labelBeneath,
            labelStyle
          ]}
          allowFontScaling={allowFontScaling}
        >
          {label}
        </Animated.Text>
      );
    }

    if (typeof label === "function") {
      return label({ route, focused, tintColor });
    }

    return label;
  };

  _renderIcon = ({ route, focused }) => {
    const {
      navigation,
      activeTintColor,
      inactiveTintColor,
      showIcon,
      showLabel
    } = this.props;
    if (showIcon === false) {
      return null;
    }

    const horizontal = this._shouldUseHorizontalLabels();

    const activeOpacity = focused ? 1 : 0;
    const inactiveOpacity = focused ? 0 : 1;

    return (
      <CrossFadeIcon
        route={route}
        horizontal={horizontal}
        navigation={navigation}
        activeOpacity={activeOpacity}
        inactiveOpacity={inactiveOpacity}
        activeTintColor={activeTintColor}
        inactiveTintColor={inactiveTintColor}
        renderIcon={route.tabBarIcon}
        style={[
          styles.iconWithExplicitHeight,
          showLabel === false && !horizontal && styles.iconWithoutLabel,
          showLabel !== false && !horizontal && styles.iconWithLabel
        ]}
      />
    );
  };

  _shouldUseHorizontalLabels = () => {
    const { dimensions, adaptive, tabStyle } = this.props;

    if (!adaptive) {
      return false;
    }

    if (Platform.isPad) {
      let maxTabItemWidth = DEFAULT_MAX_TAB_ITEM_WIDTH;

      const flattenedStyle = StyleSheet.flatten(tabStyle);

      if (flattenedStyle) {
        if (typeof flattenedStyle.width === "number") {
          maxTabItemWidth = flattenedStyle.width;
        } else if (typeof flattenedStyle.maxWidth === "number") {
          maxTabItemWidth = flattenedStyle.maxWidth;
        }
      }

      return routes.length * maxTabItemWidth <= dimensions.width;
    } else {
      return false; //isLandscape;
    }
  };

  _onTabPress = routeKey => {
    navigationService.navigate(routeKey);
  };

  render() {
    const {
      navigation,
      activeBackgroundColor,
      inactiveBackgroundColor,
      safeAreaInset,
      style,
      tabStyle
    } = this.props;

    const tabBarStyle = [
      styles.tabBar,
      this._shouldUseHorizontalLabels() && !Platform.isPad
        ? styles.tabBarCompact
        : styles.tabBarRegular,
      style
    ];

    return (
      <SafeAreaView style={tabBarStyle} forceInset={safeAreaInset}>
        {routes.map((route, index) => {
          const focused = index === navigation.state.index;
          const scene = { route, focused };
          const accessibilityLabel =
            route.routeName === "string"
              ? route.routeName.toUpperCase()
              : route.routeName;

          const backgroundColor = focused
            ? activeBackgroundColor
            : inactiveBackgroundColor;

          const ButtonComponent = TouchableWithoutFeedbackWrapper;

          return (
            <ButtonComponent
              key={route.key}
              onPress={() => this._onTabPress(route.key)}
              onLongPress={() => this._onTabPress(route.key)}
              accessibilityLabel={accessibilityLabel}
              style={[
                styles.tab,
                { backgroundColor },
                this._shouldUseHorizontalLabels()
                  ? styles.tabLandscape
                  : styles.tabPortrait,
                tabStyle
              ]}
            >
              {this._renderIcon(scene)}
              {this._renderLabel(scene)}
            </ButtonComponent>
          );
        })}
      </SafeAreaView>
    );
  }
}

TabBarBottom.propTypes = {
  navigation: PropTypes.any,
  activeTintColor: PropTypes.string,
  inactiveTintColor: PropTypes.string,
  showIcon: PropTypes.bool,
  showLabel: PropTypes.bool,
  style: PropTypes.any,
  labelStyle: PropTypes.any
};

TabBarBottom.defaultProps = {
  activeTintColor: COLORS.GREEN_PET_ICT,
  inactiveTintColor: COLORS.GRAYISH_BLUE,
  showIcon: true,
  showLabel: true,
  style: navStyle.tabStyle,
  labelStyle: navStyle.labelStyle
};

const DEFAULT_HEIGHT = 49;
const COMPACT_HEIGHT = 29;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#fff",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "rgba(0, 0, 0, .3)",
    flexDirection: "row"
  },
  tabBarCompact: {
    height: COMPACT_HEIGHT
  },
  tabBarRegular: {
    height: DEFAULT_HEIGHT
  },
  tab: {
    flex: 1,
    alignItems: isIos ? "center" : "stretch"
  },
  tabPortrait: {
    justifyContent: "flex-end",
    flexDirection: "column"
  },
  tabLandscape: {
    justifyContent: "center",
    flexDirection: "row"
  },
  iconWithoutLabel: {
    flex: 1
  },
  iconWithLabel: {
    flex: 1
  },
  iconWithExplicitHeight: {
    height: Platform.isPad ? DEFAULT_HEIGHT : COMPACT_HEIGHT
  },
  label: {
    textAlign: "center",
    backgroundColor: "transparent"
  },
  labelBeneath: {
    fontSize: sizeFont(3),
    marginBottom: 1.5
  },
  labelBeside: {
    fontSize: sizeFont(3.5),
    marginLeft: 15
  },
  iconStyle: navStyle.iconStyle
});

export default TabBarBottom;
