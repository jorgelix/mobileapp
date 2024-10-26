import * as React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const { width, height } = Dimensions.get('window'); // Get the screen dimensions

const Frame1 = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          {/* You can add any content here */}
        </View>
      </View>
      <Text style={styles.cooking}>
        <Text style={styles.cooking1}>ChildMinding</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    position: "relative",
    width: '15%', // Responsive width
    height: 60,
  },
  anne: {
    position: "relative",
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGold_100,
    textAlign: "left",
  },
  frame2: {
    width: '40%', // Responsive width
    height: 60,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_4xs,
  },
  frame1: {
    width: '100%', // Full width for responsiveness
    height: 60,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Centered content
    gap: Gap.gap_7xl,
  },
  cooking1: {
    fontSize: width < 400 ? FontSize.size_6xl : FontSize.size_29xl, // Adjust font size based on width
  },
  text: {
    fontSize: FontSize.size_8xl,
    color: "white",
  },
  cooking: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "center", // Center text
    height: 87,
    marginHorizontal: '10%', // Margin adjusted for responsiveness
  },
  frame: {
    width: '90%', // Responsive width
    height: height * 0.2, // Responsive height
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center", // Center align items
    justifyContent: "flex-start",
    gap: Gap.gap_sm,
    marginVertical: 20, // Add vertical margin for spacing
  },
});

export default Frame1;
