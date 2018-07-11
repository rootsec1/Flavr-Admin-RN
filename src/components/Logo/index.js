import React from "react";
import { Text, StyleSheet } from "react-native";
import config from "../../../config";

export default class Logo extends React.PureComponent {
    render() {
        return (
            <Text style={ [ styles.textStyle, this.props.style ] }>{ config.appName+"." }</Text>
        );
    }
};

const styles = StyleSheet.create({
    textStyle: {
        color: config.colorTextDark,
        fontSize: 64,
        fontFamily: "Patua"
    }
});