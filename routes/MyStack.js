import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import FirstLandingPage from "../Sources/Screens/Onboarding/FirstLandingPage";
import HomeScreen from "../Sources/Screens/WelcomeScreen/HomeScreen";
import FourthLandingPage from "../Sources/Screens/Onboarding/FourthLandingPage";
import SecondLandingPage from "../Sources/Screens/Onboarding/SecondLandingPage";
import ThirdLandingPage from "../Sources/Screens/Onboarding/ThirdLandingPage";
import SignUpScreen from "../Sources/Screens/SignUpLoginScreen/SignUpScreen";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="First" component={FirstLandingPage} />
      <Stack.Screen name="Second" component={SecondLandingPage} />
      <Stack.Screen name="Third" component={ThirdLandingPage} />
      <Stack.Screen name="Fourth" component={FourthLandingPage} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
};
export default MyStack;
