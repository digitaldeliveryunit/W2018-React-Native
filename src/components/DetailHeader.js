import React, { Component } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from "./Text.component";
import PropTypes from "prop-types";
import { sizeWidth, sizeHeight } from "../helpers/size.helper";
import NavigationService from "../helpers/navigation-service";
import { connect } from "react-redux";
import { SELECT_MENU } from "../actions/quick-access-menu.action";
import { fontMaker, fontSize } from "../helpers/font.helper";

const styles = StyleSheet.create({
  container: {
    marginTop: sizeHeight(3),
    width: sizeWidth(94),
    height: sizeHeight(10),
    justifyContent: "center",
    alignItems: "center"
  },
  backButton: {
    position: "absolute",
    left: 0
  },
  backIcon: {
    width: sizeWidth(5),
    height: sizeWidth(5)
  },
  title: {
    fontSize: fontSize.f20,
    ...fontMaker({ weight: "600" }),
    color: "#FFF"
  },
  rightComponent: {
    position: "absolute",
    right: 0
  }
});

class DetailHeader extends Component {
  render () {
    const {title, RightComponent} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={this.onBack.bind(this)}>
          <Image source={require("../../assets/images/left_white.png")} style={styles.backIcon} resizeMode="contain" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rightComponent}>
          {
            RightComponent && <RightComponent />
          }
        </View>
      </View>
    );
  }

  onBack () {
    const navigation = NavigationService.getNavigation();
    const { index, routes } = navigation.state.nav;
    const backRoute = routes[index - 1].routeName;
    this.props.selectMenu(backRoute);
    NavigationService.goBack();
  }
};

DetailHeader.propTypes = {
  title: PropTypes.string.isRequired,
  RightComponent: PropTypes.func
};

DetailHeader.defaultProps = {
  title: "[Title]"
};

const mapDispatchToProps = dispatch => {
  return {
    selectMenu: selectedMenuId => dispatch({ type: SELECT_MENU, selectedMenuId })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DetailHeader);