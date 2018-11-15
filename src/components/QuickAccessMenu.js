import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {COLORS} from "../helpers/common-styles";
import { sizeWidth, sizeHeight } from "../helpers/size.helper";

const styles = StyleSheet.create({
    menu: {
        position: "absolute",
        bottom : 15,
        right: 25
    },
    container: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    whiteCurtain: {
        opacity: 0.9,
        backgroundColor: "#FFF"
    },
    quickLists: {
        position: "absolute",
        bottom: 15,
        right: 25
    },
    quickItem: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        justifyContent: "flex-end"
    },
    quickText: {
        color: COLORS.GRAYISH_BLUE,
        fontSize: 14,
        marginRight: 20
    },
    item: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 0
        }
    },
    activedItem: {
        backgroundColor: "rgb(55, 163, 184)"
    },
    inactivedItem: {
        backgroundColor: "#FFF"
    },
    quickIcon: {
        width: 30,
        height: 30
    }
});

const menus = [
    {
        id: "Gallery",
        actived: false,
        icon: require("../../assets/images/gallery.png"),
        activedIcon: require("../../assets/images/gallery_white.png")
    },
    {
        id: "Spotlight",
        actived: false,
        icon: require("../../assets/images/spotlight.png"),
        activedIcon: require("../../assets/images/spotlight_white.png")
    },
    {
        id: "Feedback",
        actived: false,
        icon: require("../../assets/images/feedback.png"),
        activedIcon: require("../../assets/images/feedback_white.png")
    },
    {
        id: "Agenda",
        actived: false,
        icon: require("../../assets/images/agenda.png"),
        activedIcon: require("../../assets/images/agenda_white.png")
    },
    {
        id: "About",
        actived: true,
        screen: "EventDetail",
        icon: require("../../assets/images/about.png"),
        activedIcon: require("../../assets/images/about_white.png")
    }
];

export default class QuickAccessMenu extends Component {
    constructor () {
        super();
        this.state = {
            showDetail: false,
            menus: menus
        };
    }
    render() {
        if (this.state.showDetail) {
            return this._renderDetailMenu();
        }
        return this._renderQuickAccess();
    }

    _renderQuickAccess = () => (
        <TouchableOpacity onPress={() => this.setState({ showDetail: true })}>
            <View style={[styles.menu, styles.item, styles.activedItem]}>
                <Image 
                    source={require("../../assets/images/menu.png")} 
                    resizeMode={"contain"}
                    style={{
                        width: 25, 
                        height: 25
                    }} />
            </View>
        </TouchableOpacity>
    );

    _renderDetailMenu = () => (
        <View style={styles.container}>
            <View style={[styles.container, styles.whiteCurtain]} />
            <View style={styles.quickLists}>
                {
                    this.state.menus.map((item, index) => this._renderMenuItem(item, index))
                }
            </View>
        </View>
    );

    _renderMenuItem = (item, index) => (
        <View style={styles.quickItem} key={index}>
            <Text style={styles.quickText}>{item.id}</Text>
            <TouchableOpacity onPress={() => this.onSelect(item)}>
                <View style={[styles.item, item.actived ? styles.activedItem : styles.inactivedItem]}>
                    {
                        item.actived ? (
                            <Image source={item.activedIcon} 
                                resizeMode={"contain"}
                                style={styles.quickIcon} />
                        ) : (
                            <Image source={item.icon} 
                                resizeMode={"contain"}
                                style={styles.quickIcon} />
                        )
                    }
                </View>
            </TouchableOpacity>
        </View>
    );

    onSelect (menu) {
        this.setState({
            showDetail: false,
            menus: this.state.menus.map(item => {
                item.actived = menu.id === item.id;
                return item;
            })
        });
    }
}
