import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import Frame1 from "../components/Frame1";  // Ensure this file exists and is correctly exported
import Menu from "../components/Menu";  // Ensure this file exists and is correctly exported
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";  // Check that these values are defined in GlobalStyles

const ChildMinding = () => {
  return (
    <View style={styles.childMinding}>
      <Menu />
      <Frame1 />
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <Text style={styles.r750monthly}>R750/monthly</Text>

          {/* Child Minding Purpose Section */}
          <View style={styles.frame2}>
            <Text style={styles.sectionTitle}>Purpose</Text>
            <Text style={styles.sectionContent}>
              To provide basic child and baby care
            </Text>
          </View>
        </View>

        <View style={styles.frame3}>
          {/* Content Section */}
          <View style={styles.frame4}>
            <Text style={styles.sectionTitle}>Content</Text>
            <Text style={styles.sectionContent}>
              • birth to six-month-old baby needs{"\n"}
              • seven-month to one-year-old needs{"\n"}
              • Toddler needs{"\n"}
              • Educational toys
            </Text>
          </View>

          <Pressable style={styles.frame5}>
            <Text style={styles.getStarted}>Get started</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  r750monthly: {
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.backgroundDefaultDefault,
    textAlign: "left",
    height: 29,
    marginLeft: 16,
  },
  sectionTitle: {
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
  sectionContent: {
    fontSize: FontSize.size_4xl,
    fontWeight: "400",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
    marginTop: 10,
  },
  frame2: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGold_100,
    width: 338,
    height: 140,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 19,
    paddingVertical: 17,
    marginLeft: 30,
  },
  frame1: {
    width: 368,
    height: 207,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 38,
  },
  frame4: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGold_100,
    width: 335,
    height: 238,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    marginLeft: 33,
  },
  getStarted: {
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.backgroundDefaultDefault,
    textAlign: "left",
  },
  frame5: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorFirebrick_100,
    width: 197,
    height: 57,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 96,
  },
  frame3: {
    width: 368,
    height: 412,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 117,
  },
  frame: {
    width: 368,
    height: 661,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 42,
  },
  childMinding: {
    backgroundColor: Color.colorSteelblue,
    flex: 1,
    width: "100%",
    height: 932,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_smi,
    gap: 34,
  },
});

export default ChildMinding;
