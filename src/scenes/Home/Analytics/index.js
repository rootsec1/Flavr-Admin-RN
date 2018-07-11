import React from "react";
import { View, StyleSheet, Text } from "react-native";
//LOCAL
import config from "../../../../config";

export default class Analytics extends React.Component {
    render() {
        const {
            containerStyle,
            titleTextStyle,
            subtitleTextStyle
        } = styles;

        return (
            <View style={ containerStyle }>
                <Text style={ titleTextStyle }>{ "Analytics" }</Text>
                <Text style={ subtitleTextStyle }>{ "Grow your business. Know your customers better." }</Text>
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
    titleTextStyle: {
        color: config.colorTextDark,
        fontFamily: "Patua",
        fontSize: 32
    },
    subtitleTextStyle: {
        color: config.colorTextLight,
        fontFamily: "Roboto",
        fontSize: 16,
        marginLeft: 2
    }
});