import React from "react";
import { View, StyleSheet, Text } from "react-native";
//LOCAL
import config from "../../../../config";

export default class Orders extends React.Component {
    render() {
        const {
            containerStyle,
            titleTextStyle,
            subtitleTextStyle
        } = styles;

        return (
            <View style={ containerStyle }>
                <Text style={ titleTextStyle }>{ "Orders" }</Text>
                <Text style={ subtitleTextStyle }>{ "Catch all the orders from your customers here." }</Text>
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