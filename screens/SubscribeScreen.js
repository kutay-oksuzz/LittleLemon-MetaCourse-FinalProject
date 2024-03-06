import * as React from "react";
import {
  View,
  Image,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
//import { ValidateEmail } from "../utils/index";

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState("");
  const [validate, setValidate] = React.useState(false);

  const validationHandler = (text) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmail(text);

    if (regex.test(text)) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  };

  const alertMessageHandler = () => {
    if (validate) {
      Alert.alert("Thanks for subscribing, stay tuned!");
      setEmail("");
    }
  };

  // Add subscribe screen code here
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/little-lemon-logo-grey.png")}
        resizeMode="contain"
      />
      <Text style={styles.mainText}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        placeholder={"Type your email"}
        style={styles.input}
        keyboardType={"email-address"}
        value={email}
        onChangeText={(text) => validationHandler(text)}
      />
      <Pressable
        style={[
          styles.button,
          validate === true
            ? { backgroundColor: "#0F2B2F" }
            : { backgroundColor: "#D4CDCD" },
        ]}
        onPress={() => alertMessageHandler()}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    marginLeft: 140,
    marginTop: 40,
    marginBottom: 50,
    height: 120,
    width: 120,
  },
  mainText: {
    textAlign: "center",
    fontSize: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 25,
  },
  button: {
    padding: 8,
    justifyContent: "center",
    backgroundColor: "#0F2B2F",
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
});

export default SubscribeScreen;
