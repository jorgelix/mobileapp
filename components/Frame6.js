import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import {
  FontSize,
  FontFamily,
  Color,
  Padding,
  StyleVariable,
  Gap,
} from "../GlobalStyles";

const Frame6 = () => {
  return (
    <View style={styles.frame}>
      <Text style={styles.categories}>
        <Text style={styles.categories1}>Categories</Text>
        <Text style={styles.text}>{` `}</Text>
      </Text>
      <View style={styles.frame1}>
        <Pressable style={styles.frame2}>
        <View style={styles.frame4}>
            <View style={styles.frameChild} />
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/rectangle-61.png")}
            />
          </View>
          <Text style={styles.firstAid}>Life Skills</Text>
        </Pressable>
        <Pressable style={styles.frame3}>
          <View style={styles.frame4}>
            <View style={styles.frameChild} />
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/rectangle-19.png")}
            />
          </View>
          <Text style={styles.firstAid}>FIRST AID</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categories1: {
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
  text: {
    fontSize: FontSize.size_5xl,
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
  },
  categories: {
    color: Color.colorGold_100,
    textAlign: "left",
    height: 33,
    marginLeft: 18,
  },
  lifeSkills: {
    position: "relative",
    fontSize: FontSize.size_8xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.backgroundDefaultDefault,
    textAlign: "left",
  },
  frame2: {
    width: 199,
    height: 201,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_62xl,
  },
  frameChild: {
    position: "relative",
    backgroundColor: Color.colorDimgray_100,
    width: 199,
    height: 201,
  },
  frameItem: {
    position: "relative",
    borderRadius: StyleVariable.cornerSmall,
    width: 188,
    height: 201,
    marginLeft: -199,
  },
  frame4: {
    width: 199,
    height: 204,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: Padding.p_10xs,
  },
  firstAid: {
    position: "relative",
    fontSize: FontSize.size_8xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.backgroundDefaultDefault,
    textAlign: "left",
    marginTop: -120,
  },
  frame3: {
    width: 188,
    height: 204,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frame1: {
    width: 414,
    height: 204,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: Gap.gap_3xs,
    marginLeft: 2,
  },
  frame: {
    width: 416,
    height: 253,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: Gap.gap_3xs,
  },
});

export default Frame6;
