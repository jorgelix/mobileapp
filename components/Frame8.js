import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  FontFamily,
  FontSize,
  StyleVariable,
  Padding,
  Gap,
} from "../GlobalStyles";

const Frame8 = () => {
  return (
    <View style={styles.frame}>
      <View style={[styles.frame1, styles.frameFlexBox1]}>
        <Pressable style={[styles.frame2, styles.frameFlexBox]}>
        <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/rectangle-51.png")}
          />
          <Text style={styles.sewingTypo}>LANDSCAPING</Text>
        </Pressable>
        <Pressable style={[styles.frame3, styles.frameLayout]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/rectangle-18.png")}
          />
          <Text style={[styles.sewing, styles.sewingTypo]}>SEWING</Text>
        </Pressable>
      </View>
      <View style={[styles.frame4, styles.frameFlexBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox1: {
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
    overflow: "hidden",
  },
  frameLayout: {
    width: 199,
    height: 201,
  },
  sewingTypo: {
    textAlign: "left",
    color: Color.backgroundDefaultDefault,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_8xl,
  },
  frame2: {
    height: 201,
    width: 199,
  },
  frameChild: {
    borderRadius: StyleVariable.cornerSmall,
    width: 188,
    height: 201,
  },
  sewing: {
    marginLeft: -144,
  },
  frame3: {
    backgroundColor: Color.colorDimgray_100,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_11xs,
    height: 201,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  frame1: {
    height: 203,
    gap: Gap.gap_6xs,
    width: 408,
    alignItems: "center",
    flexDirection: "row",
  },
  frame4: {
    width: 309,
    height: 57,
  },
  frame: {
    height: 328,
    gap: Gap.gap_2xl,
    overflow: "hidden",
    width: 408,
  },
});

export default Frame8;
