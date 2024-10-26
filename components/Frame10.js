import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const Frame10 = () => {
  return (
    <View style={styles.frame}>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/rectangle-81.png")}
      />
      <Image
        style={styles.frameItem}
        contentFit="cover"
        source={require("../assets/vector-11.png")}
      />
      <Text style={[styles.text, styles.textTypo]} />
      
      
      <Text style={[styles.contactUs, styles.contactUsFlexBox]}>
        contact us
      </Text>
      <Text style={[styles.tel27Container, styles.contactUsFlexBox]}>
        <Text style={styles.tel}>TEL</Text>
        <Text style={styles.text1}>{`: +27 784885586
`}</Text>
        <Text style={styles.tel}>Email</Text>
        <Text style={styles.text1}>{`: weareone@empoweringtn.com

`}</Text>
        <Text style={styles.tel}>Address</Text>
        <Text style={styles.text1}>{`:
144 Peter Rd, 
Ruimsig, Roodepoort, 
1724
`}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  contactUsFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  frameChild: {
    top: 47,
    left: 141,
    borderRadius: Border.br_xs,
    width: 353,
    height: 157,
    position: "absolute",
  },
  frameItem: {
    top: 143,
    left: 799,
    width: 0,
    height: 91,
    position: "absolute",
  },
  text: {
    top: 118,
    left: 527,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    height: 18,
    color: Color.colorBlack,
    position: "absolute",
  },
  frameInner: {
    top: 79,
    left: 189,
    width: 190,
    height: 154,
    position: "absolute",
  },
  ellipseIcon: {
    top: 105,
    left: 0,
    width: 343,
    height: 114,
    position: "absolute",
  },
  contactUs: {
    top: 0,
    left: 195,
    fontSize: FontSize.size_17xl,
    color: Color.backgroundDefaultDefault,
    width: 218,
    height: 47,
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",

    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  tel: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
  text1: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
  },
  tel27Container: {
    top: 67,
    left: 187,
    fontSize: FontSize.singleLineBodyBase_size,
    width: 260,
    height: 120,
    color: Color.colorBlack,
  },
  frame: {
    width: 799,
    height: 233,
    overflow: "hidden",
  },
});

export default Frame10;
