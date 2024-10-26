import React from "react";
import { StyleSheet, View } from "react-native";
import FormContact from "./FormContact";

const App = () => {
  const handleSubmit = () => {
    console.log("Form submitted");
  };

  return (
    <View style={styles.container}>
      <FormContact
        inputFieldLabel="Name"
        inputFieldLabel1="Email"
        inputFieldLabel2="Phone Number"
        inputFieldDescription="Your full name"
        inputFieldDescription1="Your email address"
        inputFieldDescription2="Your phone number"
        inputFieldAutoCapitalize="words"
        inputFieldKeyboardType="phone-pad"
        inputFieldError=""
        inputFieldError1=""
        inputFieldError2=""
        inputFieldHasDescription={true}
        inputFieldHasDescription1={true}
        inputFieldHasDescription2={true}
        inputFieldHasError={false}
        inputFieldHasError1={false}
        inputFieldHasError2={false}
        inputFieldHasLabel={true}
        inputFieldHasLabel1={true}
        inputFieldHasLabel2={true}
        label="Message"
        description="Your message here"
        error=""
        hasDescription={true}
        hasError={false}
        hasLabel={true}
        onSubmit={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FormContact;
