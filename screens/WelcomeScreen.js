import * as React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../assets/little-lemon-logo.png")}
          style={styles.image}
          resizeMode="center"
        />
        <Text style={styles.mainText}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "90%",
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 60,
  },
  mainText: {
    fontSize: 20,
    textAlign: "center",
    color: "#000101",
    marginHorizontal: 28,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
  button: {
    padding: 8,
    justifyContent: "center",
    backgroundColor: "#0F2B2F",
    borderRadius: 5,
    marginHorizontal: 10,
  },
});

export default WelcomeScreen;
