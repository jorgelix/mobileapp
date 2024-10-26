import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import Frame10 from "../components/Frame10";
import Frame9 from "../components/Frame9";
import { Color } from "../GlobalStyles";
import Menu from "../components/Menu";
const IPhone1415ProMax = () => {
  return (
    <View style={styles.iphone1415ProMax5}>
      <Menu />
      <Image
        style={[styles.frameIcon, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/frame1.png")}
      />
      <View style={[styles.frame, styles.framePosition]}>
        <Frame10 />
        <Frame9 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    left: -97,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon: {
    top: 877,
    width: 424,
    height: 24,
  },
  frame: {
    top: 89,
    width: 799,
    height: 740,
    gap: 7,
  },
  iphone1415ProMax5: {
    backgroundColor: Color.colorSteelblue_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default IPhone1415ProMax;
