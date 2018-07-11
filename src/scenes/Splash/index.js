import React from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import * as Animatable from "react-native-animatable";
import firebase from "firebase";
//LOCAL
import config from "../../../config";
import Logo from "../../components/Logo";

export default class Splash extends React.PureComponent {
    render() {
        const { navigate } = this.props.navigation;
        const { containerStyle } = styles;

        return (
            <View style={ containerStyle }>
                <StatusBar backgroundColor={ config.colorBackgroundDark } barStyle="dark-content" />
                <Animatable.View animation="bounceIn" onAnimationEnd={ () => navigate("SignIn") }>
                    <Logo />
                </Animatable.View>
            </View>
        );
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDyReWW4fhPXABzYDhm-4YF3NAbpvi-RA0",
            authDomain: "flavr-console.firebaseapp.com",
            databaseURL: "https://flavr-console.firebaseio.com",
            projectId: "flavr-console",
            storageBucket: "flavr-console.appspot.com",
            messagingSenderId: "828880926318"
        });
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: config.colorBackgroundLight,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});