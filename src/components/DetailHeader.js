import React, { Component } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from "./Text.component";
import PropTypes from "prop-types";
import { sizeWidth } from "../helpers/size.helper";
import NavigationService from "../helpers/navigation-service";
import { connect } from "react-redux";
import { SELECT_MENU } from "../actions/quick-access-menu.action";
import { fontMaker } from "../helpers/font.helper";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: sizeWidth(90),
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  backButton: {
    position: "absolute",
    left: 0
  },
  backIcon: {
    width: 20,
    height: 20
  },
  title: {
    fontSize: 17,
    color: "#FFF",
    ...fontMaker({ weight: "500" })
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