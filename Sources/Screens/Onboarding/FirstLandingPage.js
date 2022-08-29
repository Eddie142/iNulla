import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

function FirstLandingPage({ navigation }) {
  const gotoSecondLandingPage = () => {
    navigation.push("Second");
  };
  return (
    <View style={styles.background}>
      <Image
        style={{
          width: 350,
          height: 350,
          left: 10,
          top: 40,
        }}
        source={require("../../assets/noz.png")}
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
        Purpose{" "}
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
        The purpose of the app is to blah blah blah{" "}
      </Text>
      <Image
        style={{
          width: 80,
          height: 89,
          left: 11,
          top: 530,
          position: "absolute",
        }}
        source={require("../../assets/i.png")}
      />
      <Image
        style={{
          width: 80,
          height: 89,
          left: -45,
          top: 180,
          position: "absolute",
        }}
        source={require("../../assets/i.png")}
      />
      <Image
        style={{
          width: 80,
          height: 89,
          left: 330,
          top: 430,
          position: "absolute",
        }}
        source={require("../../assets/i.png")}
      />
      <Image
        style={{
          width: 36,
          height: 40,
          left: 60,
          top: 430,
          position: "absolute",
        }}
        source={require("../../assets/oi.png")}
      />
      <Image
        style={{
          width: 36,
          height: 40,
          left: 190,
          top: 45,
          position: "absolute",
        }}
        source={require("../../assets/oi.png")}
      />
      <Image
        style={{
          width: 220,
          height: 95,
          justifyContent: "flex-end",
          position: "absolute",
          top: 570,
          left: 153,
        }}
        source={require("../../assets/y.png")}
      />
      <TouchableOpacity style={styles.button} onPress={gotoSecondLandingPage}>
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
    backgroundColor: "#66E263",
    position: "absolute",
    top: 510,
    borderRadius: 100,
    alignItems: "center",
    alignSelf: "center",
  },
});
export default FirstLandingPage;
