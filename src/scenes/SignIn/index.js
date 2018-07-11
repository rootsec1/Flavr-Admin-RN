import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import * as Animatable from "react-native-animatable";
import firebase from "firebase";
//LOCAL
import config from "../../../config";
import Logo from "../../components/Logo";
import Button from "../../components/Button";

export default class SignIn extends React.Component {
    state = {
        email: "",
        password: "",
        progress: false
    };

    render() {
        const {
            containerStyle,
            titleTextStyle,
            textInputTitleStyle,
            textInputStyle,
            createAccountTextStyle
        } = styles;
        const { navigate } = this.props.navigation;

        return (
            <View style={ containerStyle }>
                <Animatable.View animation="bounceInDown">
                    <Logo />
                    <Text style={ titleTextStyle }>{ "Sign in to continue" }</Text>
                </Animatable.View>

                <Text style={ [textInputTitleStyle, { marginTop: 50 }] }>{ "EMAIL ADDRESS" }</Text>
                <TextInput
                    underlineColorAndroid={ config.colorTextDark }
                    keyboardType="email-address"
                    returnKeyType="next"
                    placeholder="EMAIL ADDRESS"
                    selectionColor={ config.colorAccent }
                    style={ textInputStyle }
                    defaultValue={ this.state.email }
                    onChangeText={ text => this.setState({ email: text }) }
                />

                <Text style={ [textInputTitleStyle, { marginTop: 24 }] }>{ "PASSWORD" }</Text>
                <TextInput
                    secureTextEntry
                    placeholder="PASSWORD"
                    underlineColorAndroid={ config.colorTextDark }
                    selectionColor={ config.colorAccent }
                    style={ textInputStyle }
                    defaultValue={ this.state.password }
                    onChangeText={ text => this.setState({ password: text }) }
                />

                <Animatable.View animation="bounceInUp" delay={ 800 }>
                    <Button text={ this.state.progress? "Signing In..." : "Login" } style={ {marginTop: 32} } onPress={ this.signIn.bind(this) } />
                    
                    <TouchableOpacity activeOpacity={ 0.75 } onPress={ () => navigate("SignUp") }>
                        <Text style={ createAccountTextStyle }>{ "Create a new account." }</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        );
    }

    componentWillMount() {
        if(firebase.apps.length===0) {
            firebase.initializeApp({
                apiKey: "AIzaSyDyReWW4fhPXABzYDhm-4YF3NAbpvi-RA0",
                authDomain: "flavr-console.firebaseapp.com",
                databaseURL: "https://flavr-console.firebaseio.com",
                projectId: "flavr-console",
                storageBucket: "flavr-console.appspot.com",
                messagingSenderId: "828880926318"
            });
        }
    }

    signIn() {
        this.setState({ progress: true });
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(()=>{
            this.setState({ progress: false });
            this.props.navigation.navigate("Home");
        }).catch(err=>{
            this.setState({ progress: false });
            Alert.alert(config.appName, err.toString(), [ { text: "RETRY", onPress: this.signIn.bind(this) }, { text: "CANCEL" } ]);
        });
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: config.colorBackgroundLight,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 32,
        flex: 1
    },
    titleTextStyle: {
        color: config.colorTextLight,
        fontSize: 20,
        fontFamily: "Roboto"
    },
    textInputTitleStyle: {
        color: config.colorTextDark,
        fontSize: 17,
        marginLeft: 4,
        fontWeight: "bold"
    },
    textInputStyle: {
        color: "black",
        fontSize: 16,
        fontFamily: "Roboto"
    },
    createAccountTextStyle: {
        color: config.colorTextDark,
        fontSize: 16,
        fontFamily: "Patua",
        textAlign: "center",
        marginTop: 16
    }
});