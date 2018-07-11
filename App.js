import { StackNavigator } from "react-navigation";
//LOCAL
import Splash from "./src/scenes/Splash";
import SignIn from "./src/scenes/SignIn";
import SignUp from "./src/scenes/SignUp";

export default StackNavigator(
  {
    Splash: { screen: Splash },
    SignIn: { screen: SignIn },
    SignUp: { screen: SignUp }
  },
  {
    headerMode: "none"
  }
);