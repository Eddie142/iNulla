import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

function FourthLandingPage({ navigation }) {
  const gotoThirdLandingPage = () => {
    navigation.push("Signup");
  };
  return (
    <View style={styles.background}>
      <Image
        style={{
          width: 350,
          height: 415,
          left: 0,
          top: 40,
          position: "absolute",
        }}
        source={require("../../assets/ff.png")}
      />
      <Text
        style={{
          fontFamily: "Times New Roman",
          fontSize: 39,
          textAlign: "center",
          color: "#575656",
          top: 340,
        }}
      >
        {" "}
        Privacy and Security{" "}
      </Text>
      <Text
        style={{
          fontSize: 24,
          textAlign: "center",
          color: "#9E9999",
          top: 390,
          width: 290,
          left: 40,
          position: "absolute",
        }}
      >
        {" "}
        Privacy and Security of the app is to blah blah blah{" "}
      </Text>

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
export default FourthLandingPage;
