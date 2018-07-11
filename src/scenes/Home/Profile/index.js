import React from "react";
import { View, StyleSheet, Text, Image, ScrollView, TouchableWithoutFeedback, TextInput } from "react-native";
import firebase from "firebase";
//LOCAL
import config from "../../../../config";
import Button from "../../../components/Button";
import OutlineButton from "../../../components/OutlineButton";

export default class Profile extends React.Component {
    state = {
        profileImage: null,
        name: "",
        phone: "",
        progress: ""
    };

    render() {
        const {
            containerStyle,
            contentStyle,
            titleTextStyle,
            subtitleTextStyle,
            profileImageStyle,
            textInputStyle,
            viewOrderHistoryTextStyle
        } = styles;
        const { navigate } = this.props.navigation;

        return (
            <ScrollView style={ containerStyle }>
                <View style={ contentStyle }>
                    <Text style={ titleTextStyle }>{ "Settings" }</Text>
                    <Text style={ subtitleTextStyle }>{ "Manage your preferences." }</Text>

                    <TouchableWithoutFeedback>
                        <Image alignSelf="center" source={ this.state.profileImage? { uri: this.state.profileImage } : require("../../../../assets/images/profile_icon.png") } style={ profileImageStyle } />
                    </TouchableWithoutFeedback>

                    <TextInput
                        placeholder="ORGANIZATION NAME"
                        returnKeyType="next"
                        selectionColor={ config.colorAccent }
                        underlineColorAndroid={ config.colorTextDark }
                        defaultValue={ this.state.name }
                        onChangeText={ text => this.setState({ name: text }) }
                        style={ textInputStyle }
                    />

                    <TextInput
                        placeholder="CONTACT NUMBER"
                        returnKeyType="next"
                        keyboardType="phone-pad"
                        selectionColor={ config.colorAccent }
                        underlineColorAndroid={ config.colorTextDark }
                        defaultValue={ this.state.name }
                        onChangeText={ text => this.setState({ phone: text }) }
                        style={ [textInputStyle, { marginTop: 16 }] }
                    />

                    <Button text="Update Details" style={ {marginTop: 24} } onPress={ this.onUpdateButtonPressed.bind(this) } />

                    <OutlineButton text="Logout" style={ {marginTop: 16} } onPress={ this.onLogoutButtonPressed.bind(this) } />

                    <Text style={ viewOrderHistoryTextStyle } onPress={ () => navigate("History") }>{ "View order history" }</Text>
                </View>
            </ScrollView>
        );
    }

    onLogoutButtonPressed() {

    }

    onUpdateButtonPressed() {

    }

    componentDidMount() {
        this.setState({ profileImage: firebase.auth().currentUser.photoURL });
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: config.colorBackgroundLight
    },
    contentStyle: {
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
    },
    profileImageStyle: {
        height: 128,
        width: 128,
        borderRadius: 64,
        borderColor: config.colorAccent,
        borderWidth: 1,
        marginTop: 32
    },
    textInputStyle: {
        color: "black",
        fontSize: 16,
        fontFamily: "Roboto",
        marginTop: 32
    },
    viewOrderHistoryTextStyle: {
        fontSize: 20,
        fontFamily: "Patua",
        color: config.colorTextDark,
        marginTop: 20
    }
});