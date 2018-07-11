import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
//LOCAL
import config from "../../../config";

export default class History extends React.Component {
    render() {
        const {
            containerStyle,
            titleLayoutStyle,
            titleTextStyle,
            subtitleTextStyle
        } = styles;
        const { goBack } = this.props.navigation;

        return (
            <View style={ containerStyle }>
                <View style={ titleLayoutStyle }>
                    <Icon name="ios-close" size={ 48 } color={ config.colorTextDark } onPress={ () => goBack() } />
                    <Text style={ titleTextStyle }>{ "\t\tHistory" }</Text>
                </View>
                <Text style={ subtitleTextStyle }>{ "View your order history." }</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: config.colorBackgroundLight,
        paddingTop: 16,
        paddingLeft: 20,
        paddingRight: 20
    },
    titleLayoutStyle: {
        flexDirection: "row",
        alignItems: "center"
    },
    titleTextStyle: {
        color: config.colorTextDark,
        fontSize: 32,
        fontFamily: "Patua"
    },
    subtitleTextStyle: {
        fontSize: 20,
        color: config.colorTextLight,
        fontFamily: "Roboto"
    }
});