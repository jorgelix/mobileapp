import * as React from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { FontFamily, FontSize, Color, StyleVariable } from "../GlobalStyles";

const TextareaField = ({
  label = "Message",
  description = "Description",
  error = "Hint",
  hasDescription = false,
  hasError = false,
  hasLabel = true,
}) => {
  return (
    <View style={styles.textareaField}>
      {hasLabel && (
        <Text style={[styles.label, styles.labelTypo]}>{label}</Text>
      )}
      {hasDescription && (
        <Text style={[styles.description, styles.labelTypo]}>
          {description}
        </Text>
      )}
      <TextInput
        style={styles.textarea}
        placeholder="Value"
        placeholderTextColor="#b3b3b3"
      />
      {hasError && (
        <Text style={[styles.description, styles.labelTypo]}>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  labelTypo: {
    textAlign: "left",
    lineHeight: 22,
    fontFamily: FontFamily.singleLineBodyBase,
    fontSize: FontSize.singleLineBodyBase_size,
    alignSelf: "stretch",
  },
  label: {
    color: Color.textDefaultDefault,
  },
  description: {
    color: Color.textDefaultSecondary,
  },
  textarea: {
    borderRadius: StyleVariable.radius200,
    backgroundColor: Color.backgroundDefaultDefault,
    borderStyle: "solid",
    borderColor: Color.borderDefaultDefault,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: StyleVariable.space400,
    paddingVertical: StyleVariable.space300,
    minWidth: 240,
    minHeight: 80,
    fontFamily: FontFamily.singleLineBodyBase,
    fontSize: FontSize.singleLineBodyBase_size,
    alignSelf: "stretch",
  },
  textareaField: {
    gap: StyleVariable.space200,
    alignSelf: "stretch",
  },
});

export default TextareaField;
