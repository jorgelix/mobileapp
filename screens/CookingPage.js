import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import Frame1 from "../components/Frame1";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import Menu from "../components/Menu";
const CookingPage = () => {
  return (
    <View style={styles.cookingPage}>
      <Menu />
      <Frame1 />
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <Text style={styles.r750monthly}>R750/monthly</Text>

          {/* Updated section from qualifications to purpose */}
          <View style={styles.frame2}>
            <Text style={styles.sectionTitle}>Purpose</Text>
            <Text style={styles.sectionContent}>
              To prepare and cook nutritious family meals
            </Text>
          </View>
        </View>

        <View style={styles.frame3}>
          {/* Updated section from job description to content */}
          <View style={styles.frame4}>
            <Text style={styles.sectionTitle}>Content</Text>
            <Text style={styles.sectionContent}>
              • Nutritional requirements for a healthy body{"\n"}
              • Types of protein, carbohydrates, and vegetables{"\n"}
              • Planning meals{"\n"}
              • Preparation and cooking of meals
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
    width: '90%', // Responsive width
    height: 140,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_smi,
    alignSelf: "center",
  },
  frame1: {
    width: '90%', // Responsive width
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 38,
  },
  frame4: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGold_100,
    width: '90%', // Responsive width
    height: 238,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    alignSelf: "center",
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
    width: '70%', // Responsive width
    height: 57,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    alignSelf: "center",
  },
  frame3: {
    width: '90%', // Responsive width
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 117,
  },
  frame: {
    width: '90%', // Responsive width
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 42,
  },
  cookingPage: {
    position: "relative",
    backgroundColor: Color.colorSteelblue,
    flex: 1,
    width: "100%",
    height: "100%", // Use 100% for height
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_smi,
    gap: 34,
  },
});

export default CookingPage;

