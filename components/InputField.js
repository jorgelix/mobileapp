import * as React from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { FontFamily, FontSize, Color, StyleVariable } from "../GlobalStyles";

const InputField = ({
  label = "Email",
  description = "Description",
  inputAutoCapitalize,
  inputKeyboardType,
  error = "Error",
  hasDescription = false,
  hasError = false,
  hasLabel = true,
}) => {
  return (
    <View style={styles.inputField}>
      {hasLabel && <Text style={styles.label}>{label}</Text>}
      {hasDescription && (
        <Text style={[styles.description, styles.errorTypo]}>
          {description}
        </Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Value"
        keyboardType={inputKeyboardType}
        placeholderTextColor="#b3b3b3"
        autoCapitalize={inputAutoCapitalize}
      />
      {hasError && (
        <Text style={[styles.error, styles.errorTypo]}>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  errorTypo: {
    display: "none",
    textAlign: "left",
    fontFamily: FontFamily.singleLineBodyBase,
    lineHeight: 22,
    fontSize: FontSize.singleLineBodyBase_size,
  },
  label: {
    textAlign: "left",
    lineHeight: 22,
    color: Color.textDefaultDefault,
    fontFamily: FontFamily.singleLineBodyBase,
    fontSize: FontSize.singleLineBodyBase_size,
    alignSelf: "stretch",
  },
  description: {
    color: Color.textDefaultSecondary,
    alignSelf: "stretch",
  },
  input: {
    borderRadius: StyleVariable.radius200,
    backgroundColor: Color.backgroundDefaultDefault,
    borderStyle: "solid",
    borderColor: Color.borderDefaultDefault,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: StyleVariable.space400,
    paddingVertical: StyleVariable.space300,
    minWidth: 240,
    fontFamily: FontFamily.singleLineBodyBase,
    fontSize: FontSize.singleLineBodyBase_size,
    alignSelf: "stretch",
  },
  error: {
    color: Color.textDefaultDefault,
  },
  inputField: {
    gap: StyleVariable.space200,
    alignSelf: "stretch",
  },
});

export default InputField;
