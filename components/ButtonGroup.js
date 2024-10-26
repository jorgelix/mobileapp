import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import Button1 from "./Button1";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

const ButtonGroup = ({
  buttonEnd = true,
  buttonStart = false,
  label,
  hasIconEnd,
  hasIconStart,
}) => {
  return (
    <Pressable style={[styles.buttonGroup, styles.buttonFlexBox]}>
      {buttonStart && (
        <View style={[styles.button, styles.buttonCommon]}>
          <Image
            style={[styles.starIcon, styles.buttonCommon]}
            contentFit="cover"
            source={require("../assets/star1.png")}
          />
          <Text style={styles.button1}>Button</Text>
          <Image
            style={[styles.starIcon, styles.buttonCommon]}
            contentFit="cover"
            source={require("../assets/x1.png")}
          />
        </View>
      )}
      {buttonEnd && (
        <Button1
          label={label}
          hasIconEnd={hasIconEnd}
          hasIconStart={hasIconStart}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  buttonCommon: {
    display: "none",
    overflow: "hidden",
  },
  starIcon: {
    width: 16,
    height: 16,
  },
  button1: {
    fontSize: FontSize.singleLineBodyBase_size,
    lineHeight: 16,
    fontFamily: FontFamily.singleLineBodyBase,
    color: Color.textNeutralDefault,
    textAlign: "left",
  },
  button: {
    flex: 1,
    borderRadius: StyleVariable.radius200,
    justifyContent: "center",
    padding: StyleVariable.space300,
    gap: StyleVariable.space200,
    alignItems: "center",
    flexDirection: "row",
  },
  buttonGroup: {
    alignSelf: "stretch",
    gap: StyleVariable.space400,
  },
});

export default ButtonGroup;
