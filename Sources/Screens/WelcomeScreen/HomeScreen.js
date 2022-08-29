import React from "react";
import { ImageBackground, Dimensions, TouchableOpacity } from "react-native";

const entire_device_height = Dimensions.get("window").height;
const entire_device_width = Dimensions.get("window").width;
function HomeScreen({ navigation }) {
  const gotoFirstLandingPage = () => {
    navigation.push("First");
  };
  return (
    <TouchableOpacity onPress={gotoFirstLandingPage}>
      <ImageBackground
        style={{
          height: entire_device_height,
          width: entire_device_width,
        }}
        source={require("../../assets/logvi.gif")}
      ></ImageBackground>
    </TouchableOpacity>
  );
}

export default HomeScreen;
