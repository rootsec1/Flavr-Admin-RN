import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import config from "../../../config";

export default class Button extends React.PureComponent {
    render() {
        const {
            containerStyle,
            textStyle
        } = styles;

        return (
            <TouchableOpacity activeOpacity={ 0.75 } onPress={ this.props.onPress }>
                <View style={ [containerStyle, this.props.style] }>
                    <Text style={ textStyle }>{ this.props.text }</Text>
                </View>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: "row",
        flex: 1,
        height: 24,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        borderRadius: 4,
        backgroundColor: config.colorTextDark
    },
    textStyle: {
        color: "white",
        fontSize: 20,
        fontFamily: "Patua"
    }
});