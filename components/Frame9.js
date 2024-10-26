import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import FormContact from "./FormContact";

const Frame9 = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <FormContact
          inputFieldLabel="Name"
          inputFieldLabel1="Surname"
          inputFieldLabel2="Email"
          inputFieldDescription="Description"
          inputFieldDescription1="Description"
          inputFieldDescription2="Description"
          inputFieldAutoCapitalize="words"
          inputFieldAutoCapitalize1="words"
          inputFieldKeyboardType="email-address"
          inputFieldError="Error"
          inputFieldError1="Error"
          inputFieldError2="Error"
          inputFieldHasDescription={false}
          inputFieldHasDescription1={false}
          inputFieldHasDescription2
          inputFieldHasError={false}
          inputFieldHasError1={false}
          inputFieldHasError2
          inputFieldHasLabel
          inputFieldHasLabel1
          inputFieldHasLabel2
          label="Message"
          description="Description"
          error="Hint"
          hasDescription
          hasError
          hasLabel
        />
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame2.png")}
        />
      </View>
      <Image
        style={styles.frameIcon1}
        contentFit="cover"
        source={require("../assets/frame3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameIcon: {
    position: "relative",
    width: 272,
    height: 5,
    overflow: "hidden",
    marginTop: -149,
  },
  frame1: {
    width: 356,
    height: 500,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  frameIcon1: {
    position: "relative",
    width: 268,
    height: 0,
    overflow: "hidden",
    marginTop: -148,
  },
  frame: {
    width: 356,
    height: 500,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginLeft: 143,
  },
});

export default Frame9;
