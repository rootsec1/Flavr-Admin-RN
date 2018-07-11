import React from "react";
import { View, StyleSheet, TextInput, Text, Alert, TouchableOpacity, ScrollView } from "react-native";
//LOCAL
import config from "../../../config";
import Logo from "../../components/Logo";
import Button from "../../components/Button";

export default class SignUp extends React.Component {
    state = {
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        progress: false
    };

    render() {
        const {
            containerStyle,
            contentStyle,
            backArrowStyle,
            backLayoutStyle,
            backTextStyle,
            titleTextStyle,
            textInputStyle
        } = styles;
        const { goBack } = this.props.navigation;

        return (
            <ScrollView style={ containerStyle }>
                <View style={ contentStyle }>
                    <TouchableOpacity activeOpacity={ 0.75 } onPress={ () => goBack() }>
                        <View style={ backLayoutStyle }>
                            <Text style={ backArrowStyle }>{ "<-" }</Text>
                            <Text style={ backTextStyle }>{ "\tBACK" }</Text>
                        </View>
                    </TouchableOpacity>

                    <Logo style={ {marginTop: 8} } />
                    <Text style={ titleTextStyle }>{ "Sign Up. Join the community!" }</Text>

                    <TextInput
                        placeholder="NAME"
                        returnKeyType="next"
                        underlineColorAndroid={ config.colorTextDark }
                        style={ [textInputStyle, { marginTop: 16 }] }
                        selectionColor={ config.colorAccent }
                        onChangeText={ text => this.setState({ name: text }) }
                    />

                    <TextInput
                        placeholder="CONTACT NUMBER"
                        returnKeyType="next"
                        keyboardType="phone-pad"
                        underlineColorAndroid={ config.colorTextDark }
                        style={ [textInputStyle, { marginTop: 16 }] }
                        selectionColor={ config.colorAccent }
                        onChangeText={ text => this.setState({ phone: text }) }
                    />

                    <TextInput
                        placeholder="EMAIL ADDRESS"
                        returnKeyType="next"
                        keyboardType="email-address"
                        underlineColorAndroid={ config.colorTextDark }
                        style={ [textInputStyle, { marginTop: 16 }] }
                        selectionColor={ config.colorAccent }
                        onChangeText={ text => this.setState({ email: text }) }
                    />

                    <TextInput
                        placeholder="PASSWORD"
                        returnKeyType="next"
                        underlineColorAndroid={ config.colorTextDark }
                        style={ [textInputStyle, { marginTop: 16 }] }
                        selectionColor={ config.colorAccent }
                        secureTextEntry
                        onChangeText={ text => this.setState({ password: text }) }
                    />

                    <TextInput
                        placeholder="CONFIRM PASSWORD"
                        returnKeyType="next"
                        underlineColorAndroid={ config.colorTextDark }
                        style={ [textInputStyle, { marginTop: 16 }] }
                        selectionColor={ config.colorAccent }
                        secureTextEntry
                        onChangeText={ text => this.setState({ confirmPassword: text }) }
                    />

                    <Button text={ this.state.progress? "Creating account...":"Create Account" } onPress={ this.onCreateAccountButtonPress.bind(this) } style={ {marginTop: 24} } />
                </View>
            </ScrollView>
        );
    }

    onCreateAccountButtonPress() {

    }
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: config.colorBackgroundLight,
        flex: 1
    },
    contentStyle: {
        paddingTop: 16,
        paddingLeft: 20,
        paddingRight: 20
    },
    backArrowStyle: {
        color: config.colorTextDark,
        fontSize: 24,
        fontWeight: "bold"
    },
    backLayoutStyle: {
        flexDirection: "row",
        alignItems: "center"
    },
    backTextStyle: {
        color: config.colorTextDark,
        fontSize: 20,
        fontFamily: "Patua"
    },
    titleTextStyle: {
        color: config.colorTextLight,
        fontSize: 20,
        fontFamily: "Roboto"
    },
    textInputStyle: {
        color: "black",
        fontSize: 16,
        fontFamily: "Roboto"
    }
});