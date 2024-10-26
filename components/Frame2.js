import * as React from "react";
import { Text, StyleSheet, TextInput, Pressable, View } from "react-native";
import {
  FontFamily,
  Padding,
  FontSize,
  Color,
  StyleVariable,
  Gap,
} from "../GlobalStyles";

const Frame2 = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.signUpParent}>
        <Text style={[styles.signUp, styles.signUpTypo]}>Sign up</Text>
        <TextInput
          style={styles.frameChild}
          placeholder="email address"
          keyboardType="email-address"
          placeholderTextColor="#b2a9a9"
        />
        <TextInput
          style={[styles.frameItem, styles.frameWrapperSpaceBlock]}
          keyboardType="default"
        />
        <Pressable style={[styles.frameWrapper, styles.frameWrapperSpaceBlock]}>
          <View style={[styles.createAccountWrapper, styles.accountFlexBox]}>
            <Text style={[styles.createAccount, styles.signUpTypo]}>
              create account
            </Text>
          </View>
        </Pressable>
        <View
          style={[styles.alreadyHaveAnAccountParent, styles.accountFlexBox]}
        >
          <Text style={[styles.alreadyHaveAn, styles.signInTypo]}>
            Already have an account?
          </Text>
          <Text style={[styles.signIn, styles.signInTypo]}>sign in</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frameWrapperSpaceBlock: {
    padding: Padding.p_3xs,
    alignSelf: "stretch",
  },
  accountFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  signInTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.singleLineBodyBase,
    textAlign: "left",
  },
  signUp: {
    fontSize: FontSize.size_29xl,
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  frameChild: {
    fontSize: FontSize.size_8xl,
    fontFamily: FontFamily.singleLineBodyBase,
    padding: Padding.p_3xs,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: StyleVariable.radiusFull,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  frameItem: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: StyleVariable.radiusFull,
    padding: Padding.p_3xs,
    justifyContent: "center",
  },
  createAccount: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_8xl,
  },
  createAccountWrapper: {
    padding: Padding.p_3xs,
    alignSelf: "stretch",
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  frameWrapper: {
    height: 60,
    alignItems: "center",
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: StyleVariable.radiusFull,
    padding: Padding.p_3xs,
    justifyContent: "center",
  },
  alreadyHaveAn: {
    color: Color.colorDarkslategray_200,
  },
  signIn: {
    color: Color.colorFirebrick_200,
  },
  alreadyHaveAnAccountParent: {
    alignItems: "center",
  },
  signUpParent: {
    borderRadius: StyleVariable.cornerLarge,
    backgroundColor: Color.colorSilver,
    height: 476,
    gap: Gap.gap_lg,
    alignSelf: "stretch",
  },
  frame: {
    position: "absolute",
    top: 296,
    left: 0,
    width: 436,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

export default Frame2;
