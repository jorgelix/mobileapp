import * as React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Frame4 = () => {
  return (
    <View style={[styles.frame, styles.framePosition]}>
      <View style={[styles.frame1, styles.framePosition]}>
        <Text style={[styles.countryOrRegion, styles.frame2Typo]}>
          Country or region
        </Text>
      </View>
      <TextInput
        style={[styles.frame2, styles.frame2Typo]}
        placeholder="Number"
        keyboardType="numeric"
        placeholderTextColor="#969090"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    overflow: "hidden",
    left: 0,
  },
  frame2Typo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    top: 0,
    position: "absolute",
  },
  countryOrRegion: {
    left: 1,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
  },
  frame1: {
    top: 164,
    width: 206,
    height: 29,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  frame2: {
    height: 114,
    overflow: "hidden",
    left: 0,
    width: 368,
  },
  frame: {
    height: 193,
    width: 368,
    overflow: "hidden",
    left: 0,
    top: 0,
    position: "absolute",
  },
});

export default Frame4;
