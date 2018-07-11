import React from "react";
import { StackNavigator } from "react-navigation";
//LOCAL
import Splash from "./src/scenes/Splash";
import SignIn from "./src/scenes/SignIn";
import SignUp from "./src/scenes/SignUp";
import Home from "./src/scenes/Home";
import History from "./src/scenes/History";

export default StackNavigator(
  {
    Splash: { screen: Splash },
    SignIn: { screen: SignIn },
    SignUp: { screen: SignUp },
    Home: { screen: Home },
    History: { screen: History }
  },
  {
    headerMode: "none"
  }
);