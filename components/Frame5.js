import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Frame5 = () => {
  return (
    <View style={[styles.frame, styles.framePosition1]}>
      <View style={[styles.frame1, styles.frameLayout]}>
        <Pressable style={[styles.frame2, styles.frameLayout]}>
          <Text style={[styles.pay, styles.payTypo]}>Pay</Text>
        </Pressable>
      </View>
      <View style={[styles.frame3, styles.framePosition1]}>
        <View style={[styles.frame4, styles.framePosition]}>
          <Text style={[styles.zip, styles.payTypo]}>ZIP</Text>
        </View>
        <Image
          style={[styles.frameIcon, styles.framePosition1]}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <View style={[styles.frame5, styles.framePosition1]}>
          <View style={[styles.frame6, styles.framePosition]}>
            <Text style={[styles.zip, styles.payTypo]}>South Africa</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition1: {
    overflow: "hidden",
    width: 367,
    position: "absolute",
    left: 0,
  },
  frameLayout: {
    height: 56,
    overflow: "hidden",
    position: "absolute",
  },
  payTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  framePosition: {
    height: 29,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  pay: {
    top: 8,
    left: 145,
    fontSize: FontSize.size_13xl,
    color: Color.backgroundDefaultDefault,
  },
  frame2: {
    left: 11,
    borderRadius: Border.br_981xl,
    backgroundColor: Color.colorFirebrick_100,
    width: 346,
    top: 0,
  },
  frame1: {
    top: 164,
    width: 357,
    left: 0,
    height: 56,
  },
  zip: {
    left: 21,
    fontSize: FontSize.size_5xl,
    color: Color.colorGray_100,
    top: 0,
  },
  frame4: {
    top: 71,
    width: 59,
  },
  frameIcon: {
    borderRadius: Border.br_xs,
    height: 57,
    top: 0,
  },
  frame6: {
    width: 166,
    top: 0,
  },
  frame5: {
    top: 14,
    height: 100,
  },
  frame3: {
    height: 114,
    top: 0,
  },
  frame: {
    top: 209,
    height: 220,
  },
});

export default Frame5;
