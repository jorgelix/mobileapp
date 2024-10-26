import React, { useMemo } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ButtonDanger = ({
  label = "Courses we offer    ",
  hasIconEnd = false,
  hasIconStart = false,
  propTop,
}) => {
  const buttonDangerStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <Pressable style={[styles.buttonDanger, buttonDangerStyle]}>
      {hasIconStart && (
        <Image
          style={styles.starIcon}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
      )}
      <Text style={styles.button}>{label}</Text>
      {hasIconEnd && (
        <Image
          style={styles.starIcon}
          contentFit="cover"
          source={require("../assets/x.png")}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  starIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  button: {
    fontSize: FontSize.singleLineBodyBase_size,
    lineHeight: 16,
    fontFamily: FontFamily.singleLineBodyBase,
    color: Color.textDangerOnDanger,
    textAlign: "left",
  },
  buttonDanger: {
    position: "absolute",
    top: 670,
    left: 160,
    borderRadius: StyleVariable.radius200,
    backgroundColor: Color.backgroundDangerDefault,
    borderStyle: "solid",
    borderColor: Color.borderDangerSecondary,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: StyleVariable.space300,
    gap: StyleVariable.space200,
    overflow: "hidden",
  },
});

export default ButtonDanger;
