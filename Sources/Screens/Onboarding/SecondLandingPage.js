import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

function SecondLandingPage({ navigation }) {
  const gotoThirdLandingPage = () => {
    navigation.push("Third");
  };
  return (
    <View style={styles.background}>
      <Image
        style={{
          width: 350,
          height: 350,
          left: 10,
          top: 20,
        }}
        source={require("../../assets/mw.png")}
      />

      <Text
        style={{
          fontFamily: "Times New Roman",
          fontSize: 39,
          textAlign: "center",
          color: "#575656",
        }}
      >
        {" "}
        Terms and Condition{" "}
      </Text>
      <Text
        style={{
          fontSize: 24,
          textAlign: "center",
          color: "#9E9999",
          top: 10,
          width: 300,
          left: 28,
        }}
      >
        {" "}
        The Terms and Condition of the app is to blah blah blah{" "}
      </Text>
      <Image
        style={{
          width: 160,
          height: 120,
          justifyContent: "flex-end",
          position: "absolute",
          top: 545,
          left: 220,
        }}
        source={require("../../assets/rl.png")}
      />

      <TouchableOpacity style={styles.button} onPress={gotoThirdLandingPage}>
        <Text
          style={{
            color: "#fff",
            fontFamily: "Times New Roman",
            fontSize: 26,
            top: 12,
          }}
        >
          {" "}
          Next{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    position: "relative",
  },
  button: {
    width: 180,
    height: 50,
    backgroundColor: "#0DD18E",
    position: "absolute",
    top: 510,
    borderRadius: 100,
    alignItems: "center",
    alignSelf: "center",
  },
});

export default SecondLandingPage;
