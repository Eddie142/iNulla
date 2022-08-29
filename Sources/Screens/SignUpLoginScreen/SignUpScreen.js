import React from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from "react-native";

function SignUpScreen() {
  return (
    <ScrollView>
      <View style={styles.background}>
        <Image
          style={{
            width: 280,
            height: 310,
            position: "absolute",
            top: 20,
            left: 80,
          }}
          source={require("../../assets/ui.png")}
        />
        <Image
          style={{
            width: 150,
            height: 145,
            position: "absolute",
            justifyContent: "flex-start",
          }}
          source={require("../../assets/ra.png")}
        />
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Times New Roman",
            fontSize: 40,
            top: 340,
            color: "#575656",
          }}
        >
          {" "}
          Activate
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "200",
            fontSize: 14,
            top: 340,
            color: "#575656",
          }}
        >
          {" "}
          Access your account
        </Text>
        <View style={styles.styleview}></View>
        <View
          style={{
            borderBottomColor: "#959599",
            borderTopColor: "#959599",
            opacity: 0.3,
            width: 250,
            height: 50,
            top: 255,
            borderBottomWidth: 0.3,
            borderTopWidth: 0.3,
          }}
        ></View>
        <Image
          style={{
            width: 22,
            height: 17,
            position: "absolute",
            justifyContent: "flex-start",
            top: 425,
            left: 20,
          }}
          source={require("../../assets/kl.png")}
        />

        <Image
          style={{
            width: 17,
            height: 20,
            position: "absolute",
            justifyContent: "flex-start",
            top: 470,
            left: 20,
          }}
          source={require("../../assets/jh.png")}
        />

        <TextInput
          placeholder="Matric No."
          onChangeText={(text) => console.log("Text Entered:", text)}
          style={{
            fontWeight: "500",
            fontSize: 16,
            top: 175,
            left: 60,
            color: "#575656",
          }}
        />
        <Text
          style={{
            fontSize: 54,
            fontWeight: "bold",
            color: "#000",
            top: 175,
            left: 52,
          }}
        >
          {" "}
          . . . . . .
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "100",
            color: "#575656",
            top: 195,
            left: 55,
          }}
        >
          {" "}
          12345678903
        </Text>
        <Image
          source={require("../../assets/ps.png")}
          style={{
            justifyContent: "flex-start",
            position: "absolute",
            width: 150,
            height: 150,
            top: 517,
            left: 223,
          }}
        />
        <TouchableOpacity style={styles.log} onPress={console.log("login")}>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Times New Roman",
              fontSize: 20,
              top: 4,
            }}
          >
            {" "}
            Login{" "}
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "200",
            fontSize: 16,
            top: 220,
            color: "#575656",
          }}
        >
          {" "}
          Already have an account?
        </Text>
        <Image
          style={{
            position: "absolute",
            top: 470,
            left: 190,
            width: 20,
            height: 20,
          }}
          source={require("../../assets/eyee.png")}
        />
        <Image
          style={{
            position: "absolute",
            top: 515,
            left: 190,
            width: 20,
            height: 20,
          }}
          source={require("../../assets/eey.png")}
        />
        <TouchableOpacity onPress={console.log("Signup")}>
          <Image
            style={{
              position: "absolute",
              width: 70,
              height: 70,
              top: 85,
              left: 225,
            }}
            source={require("../../assets/correct.png")}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
  },
  styleview: {
    width: 250,
    height: 150,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowColor: "#000",
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    backgroundColor: "#fff",
    top: 355,
  },
  log: {
    width: 100,
    height: 30,
    backgroundColor: "#66E263",
    position: "absolute",
    top: 595,
    borderRadius: 100,
    alignItems: "center",
    alignSelf: "center",
  },
});
export default SignUpScreen;
