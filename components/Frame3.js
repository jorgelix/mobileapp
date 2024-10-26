import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Frame from "./Frame";
import { FontFamily, FontSize, Color, Gap } from "../GlobalStyles";

const Frame3 = () => {
  return (
    <View style={styles.frame}>
      <Frame ellipse1={require("../assets/ellipse-1.png")} />
      <View style={styles.frame1}>
        <Text style={[styles.amount, styles.r750Typo]}>{`Amount `}</Text>
        <Text style={[styles.r750, styles.r750Typo]}>R750</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  r750Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_17xl,
  },
  amount: {
    color: Color.backgroundDefaultDefault,
    width: 184,
    height: 47,
  },
  r750: {
    color: Color.colorGold_100,
  },
  frame1: {
    width: 369,
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_4xl,
    height: 47,
    overflow: "hidden",
  },
  frame: {
    width: 384,
    height: 197,
    alignItems: "flex-end",
    gap: Gap.gap_3xl,
    overflow: "hidden",
  },
});

export default Frame3;
