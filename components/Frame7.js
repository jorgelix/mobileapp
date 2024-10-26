import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Frame from "./Frame";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const Frame7 = () => {
  return (
    <View style={styles.frame}>
      <Frame
        ellipseIconMarginLeft={2}
        anneWidth={153}
        ellipse1={require("../assets/ellipse-11.png")}
        lineViewBorderColor="#000"
        propBorderColor="#000"
      />
      <Text style={styles.findTheCourse}>
        Find the course you want to learn
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  findTheCourse: {
    fontSize: FontSize.size_5xl,
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
    color: Color.backgroundDefaultDefault,
    textAlign: "left",
    width: 213,
    height: 58,
    marginLeft: 18,
  },
  frame: {
    width: 386,
    height: 168,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: Gap.gap_xl,
  },
});

export default Frame7;
