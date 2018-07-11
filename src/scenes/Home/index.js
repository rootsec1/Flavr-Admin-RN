import React from "react";
import { YellowBox } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "react-navigation";
//LOCAL
import config from "../../../config";
import Orders from "./Orders";
import Menu from "./Menu";
import Analytics from "./Analytics";
import Profile from "./Profile";
 
export default createBottomTabNavigator(
    {
        Orders: Orders,
        Menu: Menu,
        Analytics: Analytics,
        Profile: Profile
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
                if(routeName==="Orders") iconName = `ios-cloud${focused ? '' : '-outline'}`;
                else if(routeName==="Menu") iconName = `ios-pizza${focused ? '' : '-outline'}`;
                else if(routeName==="Analytics") iconName = `ios-analytics${focused ? '' : '-outline'}`;
                else iconName = `ios-person${focused ? '' : '-outline'}`;
                return <Icon name={iconName} size={32} color={tintColor} />;
            }
        }),
        tabBarOptions: {
            activeTintColor: config.colorTextDark,
            inactiveTintColor: config.colorTextDark,
            showLabel: false,
            pressColor: config.colorAccent,
            iconStyle: {
                padding: 8
            },
            style: { backgroundColor: config.colorBackgroundDark, elevation: 16, height: 60 }
        }
    }
);