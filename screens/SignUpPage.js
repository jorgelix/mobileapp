import React, { useState } from "react";
import { Image } from "expo-image";
import { Text, StyleSheet, TextInput, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import {
  FontFamily,
  Padding,
  FontSize,
  Color,
} from "../GlobalStyles";
import Frame2 from "../components/Frame2"; 

const SignUpPage = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignUp = () => {
    let isValid = true;
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      navigation.navigate("ExplorerPage");
    }
  };

  return (
    <View style={styles.signUpPage}>
      <Image
        style={styles.signUpPageChild}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />

      <Text style={styles.heading}>Sign Up</Text>

      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#b2a9a9"
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#b2a9a9"
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

        <Pressable style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.createAccount}>Create Account</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpPageChild: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 120, 
    height: 80,
    marging: 20,
  },
  signUpPage: {
    backgroundColor: Color.colorSteelblue,
    flex: 1,
    maxWidth: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: Color.colorBlack,
  },
  inputBox: {
    width: "100%",
    padding: 20,
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    alignItems: "center",
  },
  input: {
    fontSize: 16,
    fontFamily: FontFamily.singleLineBodyBase,
    padding: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    width: "100%",
    marginBottom: 10,
    height: "50%"
  },
  createAccount: {
    color: Color.colorBlack,
    fontSize: 18,
    textAlign: "center",
  },
  signUpButton: {
    backgroundColor: "#f0f0f0", // Match the input field background
    height: 50,
    width: "100%", // Full width inside inputBox
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 10,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 5,
  },
});

export default SignUpPage;
