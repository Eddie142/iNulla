import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

function ThirdLandingPage({ navigation }) {
  const gotoFourthLandingPage = () => {
    navigation.push("Fourth");
  };
  return (
    <View style={styles.background}>
      <Image
        style={{
          width: 300,
          height: 260,
          left: 105,
          top: 1,
        }}
        source={require("../../assets/sj.png")}
      />
      <Image
        style={{
          width: 50,
          height: 50,
          left: 325,
          top: 100,
        }}
        source={require("../../assets/sm.png")}
      />
      <Image
        style={{
          width: 270,
          height: 310,
          left: 10,
          top: 70,
          position: "absolute",
        }}
        source={require("../../assets/qw.png")}
      />

      <Text
        style={{
          fontFamily: "Times New Roman",
          fontSize: 39,
          textAlign: "center",
          color: "#575656",
          top: 75,
        }}
      >
        {" "}
        Messaging{" "}
      </Text>
      <Text
        style={{
          fontSize: 24,
          textAlign: "center",
          color: "#9E9999",
          top: 430,
          width: 300,
          left: 32,
          position: "absolute",
        }}
      >
        {" "}
        Messaging of the app is to blah blah blah{" "}
      </Text>
      <Image
        style={{
          width: 90,
          height: 87,
          justifyContent: "flex-end",
          position: "absolute",
          top: 580,
          left: 280,
        }}
        source={require("../../assets/wq.png")}
      />
      <Image
        style={{
          width: 90,
          height: 90,
          justifyContent: "flex-end",
          position: "absolute",
          top: 550,
          left: 10,
        }}
        source={require("../../assets/sw.png")}
      />

      <TouchableOpacity style={styles.button} onPress={gotoFourthLandingPage}>
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

export default ThirdLandingPage;
