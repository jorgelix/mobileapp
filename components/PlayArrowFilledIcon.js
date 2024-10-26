import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const PlayArrowFilledIcon = () => {
  return (
    <Image
      style={styles.playArrowFilledIcon}
      contentFit="cover"
      source={require("../assets/play-arrow-filled.png")}
    />
  );
};

const styles = StyleSheet.create({
  playArrowFilledIcon: {
    position: "absolute",
    top: 682,
    left: 298,
    width: 17,
    height: 19,
  },
});

export default PlayArrowFilledIcon;
