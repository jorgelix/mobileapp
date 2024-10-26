import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

const Button1 = ({
  label = "Submit",
  hasIconEnd = false,
  hasIconStart = false,
}) => {
  return (
    <View style={styles.button}>
      {hasIconStart && (
        <Image
          style={styles.starIcon}
          contentFit="cover"
          source={require("../assets/star2.png")}
        />
      )}
      <Text style={styles.button1}>{label}</Text>
      {hasIconEnd && (
        <Image
          style={styles.starIcon}
          contentFit="cover"
          source={require("../assets/x2.png")}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  starIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  button1: {
    fontSize: FontSize.singleLineBodyBase_size,
    lineHeight: 16,
    fontFamily: FontFamily.singleLineBodyBase,
    color: Color.colorWhitesmoke,
    textAlign: "left",
  },
  button: {
    flex: 1,
    borderRadius: StyleVariable.radius200,
    backgroundColor: Color.colorBlack,
    borderStyle: "solid",
    borderColor: Color.borderBrandDefault,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: StyleVariable.space300,
    gap: StyleVariable.space200,
    overflow: "hidden",
  },
});

export default Button1;
