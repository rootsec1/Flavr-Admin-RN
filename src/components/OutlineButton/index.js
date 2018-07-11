import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import config from "../../../config";

export default class OutlineButton extends React.PureComponent {
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
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        borderWidth: 2,
        borderColor: config.colorTextDark,
        borderRadius: 4,
        backgroundColor: config.colorBackgroundLight
    },
    textStyle: {
        color: config.colorTextDark,
        fontSize: 20,
        fontFamily: "Patua"
    }
});