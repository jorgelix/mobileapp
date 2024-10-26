import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, ImageBackground, View } from "react-native";
import ArrowDropDownIcon from "../components/ArrowDropDownIcon";
import ButtonDanger from "../components/ButtonDanger";
import PlayArrowFilledIcon from "../components/PlayArrowFilledIcon";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";
import Menu from "../components/Menu";
const IPhone1415ProMax1 = () => {
  return (
    <View style={styles.iphone1415ProMax6}>
      <Menu />
      <Image
        style={[styles.iphone1415ProMax6Child, styles.iphone1415Position]}
        contentFit="cover"
        source={require("../assets/rectangle-8.png")}
      />
      <Image
        style={styles.iphone1415ProMax6Item}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Text style={[styles.text, styles.textTypo]} />
      <Image
        style={[styles.iphone1415ProMax6Inner, styles.iphone1415Position]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.aboutUs, styles.textTypo]}>About us</Text>
      <ArrowDropDownIcon />
      <Text
        style={[styles.welcomeToEmpowering, styles.welcomeToEmpoweringPosition]}
      >{`Welcome to Empowering the Nation, where we are dedicated to enhancing the skills and opportunities for domestic workers and gardeners. Founded in 2018, our mission is inspired by a deep-rooted desire to provide the same opportunities for growth and education that were not available to our founder's family and community.

`}</Text>
      <ButtonDanger
        label="Learn more"
        hasIconEnd={false}
        hasIconStart={false}
        propTop={426}
      />
      <ButtonDanger
        label="Courses we offer    "
        hasIconEnd={false}
        hasIconStart={false}
      />
      <ImageBackground
        style={[styles.tempimagekbm7kaIcon, styles.welcomeToEmpoweringPosition]}
        resizeMode="cover"
        source={require("../assets/tempimagekbm7ka.png")}
      />
      <PlayArrowFilledIcon />
      <View style={styles.tempimageldbqev} />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1415Position: {
    top: 168,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  welcomeToEmpoweringPosition: {
    left: 80,
    position: "absolute",
  },
  iphone1415ProMax6Child: {
    left: 49,
    borderRadius: Border.br_xs,
    width: 353,
    height: 655,
  },
  iphone1415ProMax6Item: {
    top: 232,
    left: 702,
    width: 0,
    height: 91,
    position: "absolute",
  },
  text: {
    top: 207,
    left: 430,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    height: 18,
    color: Color.colorBlack,
  },
  iphone1415ProMax6Inner: {
    left: 92,
    width: 190,
    height: 154,
  },
  ellipseIcon: {
    top: 194,
    left: -97,
    width: 343,
    height: 114,
    position: "absolute",
  },
  aboutUs: {
    top: 89,
    left: 98,
    fontSize: FontSize.size_17xl,
    color: Color.backgroundDefaultDefault,
    width: 218,
    height: 47,
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",

    textAlign: "center",
  },
  welcomeToEmpowering: {
    top: 217,
    fontSize: FontSize.singleLineBodyBase_size,
    fontFamily: FontFamily.singleLineBodyBase,
    width: 297,
    height: 377,
    textAlign: "center",
    color: Color.colorBlack,
  },
  tempimagekbm7kaIcon: {
    top: 500,
    width: 288,
    height: 112,
  },
  tempimageldbqev: {
    top: 112,
    left: 7,
    width: 92,
    height: 89,
    position: "absolute",
  },
  iphone1415ProMax6: {
    backgroundColor: Color.colorSteelblue_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default IPhone1415ProMax1;
