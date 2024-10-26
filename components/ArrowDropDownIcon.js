import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const ArrowDropDownIcon = () => {
  return (
    <Image
      style={styles.arrowDropDownIcon}
      contentFit="cover"
      source={require("../assets/arrow-drop-down.png")}
    />
  );
};

const styles = StyleSheet.create({
  arrowDropDownIcon: {
    position: "absolute",
    top: 877,
    left: 303,
    width: 24,
    height: 24,
  },
});

export default ArrowDropDownIcon;
