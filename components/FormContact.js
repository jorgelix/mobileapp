import * as React from "react";
import { StyleSheet, View } from "react-native";
import InputField from "./InputField";
import TextareaField from "./TextareaField";
import ButtonGroup from "./ButtonGroup";
import { StyleVariable, Color } from "../GlobalStyles";

const FormContact = ({
  inputFieldLabel,
  inputFieldLabel1,
  inputFieldLabel2,
  inputFieldDescription,
  inputFieldDescription1,
  inputFieldDescription2,
  inputFieldAutoCapitalize,
  inputFieldAutoCapitalize1,
  inputFieldKeyboardType,
  inputFieldError,
  inputFieldError1,
  inputFieldError2,
  inputFieldHasDescription,
  inputFieldHasDescription1,
  inputFieldHasDescription2,
  inputFieldHasError,
  inputFieldHasError1,
  inputFieldHasError2,
  inputFieldHasLabel,
  inputFieldHasLabel1,
  inputFieldHasLabel2,
  label,
  description,
  error,
  hasDescription,
  hasError,
  hasLabel,
}) => {
  return (
    <View style={styles.formContact}>
      <InputField
        label={inputFieldLabel}
        description={inputFieldDescription}
        inputAutoCapitalize={inputFieldAutoCapitalize}
        error={inputFieldError}
        hasDescription={inputFieldHasDescription}
        hasError={inputFieldHasError}
        hasLabel={inputFieldHasLabel}
      />
      <InputField
        label={inputFieldLabel1}
        description={inputFieldDescription1}
        inputAutoCapitalize={inputFieldAutoCapitalize1}
        error={inputFieldError1}
        hasDescription={inputFieldHasDescription1}
        hasError={inputFieldHasError1}
        hasLabel={inputFieldHasLabel1}
      />
      <InputField
        label={inputFieldLabel2}
        description={inputFieldDescription2}
        inputKeyboardType={inputFieldKeyboardType}
        error={inputFieldError2}
        hasDescription={inputFieldHasDescription2}
        hasError={inputFieldHasError2}
        hasLabel={inputFieldHasLabel2}
      />
      <TextareaField
        label={label}
        description={description}
        error={error}
        hasDescription={hasDescription}
        hasError={hasError}
        hasLabel={hasLabel}
      />
      <ButtonGroup
        buttonEnd
        buttonStart
        label="Submit"
        hasIconEnd
        hasIconStart
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContact: {
    borderRadius: StyleVariable.radius200,
    backgroundColor: Color.colorGold_300,
    borderStyle: "solid",
    borderColor: Color.borderDefaultDefault,
    borderWidth: 1,
    width: 356,
    height: 500,
    padding: StyleVariable.space600,
    gap: StyleVariable.space600,
    minWidth: 320,
  },
});

export default FormContact;
