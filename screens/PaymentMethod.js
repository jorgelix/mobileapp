import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import Frame3 from "../components/Frame3";
import {
  FontSize,
  FontFamily,
  Color,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";
import Menu from "../components/Menu";

const PaymentMethod = ({ route }) => {
  // Destructure params with default values
  const { coursesCount = 0, discount = 0, total = 0 } = route.params || {};

  // Error handling for missing params
  if (!route.params) {
    return (
      <View style={styles.paymentMethod1}>
        <Menu />
        <Text style={styles.errorText}>No payment information available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.paymentMethod1}>
      <Menu />
      <Frame3 />
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <View style={styles.frame2}>
            <Text style={styles.courses}>{`Courses `}</Text>
            <Text style={styles.text}>{coursesCount}</Text>
          </View>
          <View style={styles.frame3}>
            <Text style={styles.courses}>{`Discount `}</Text>
            <Text style={styles.text}>{discount}%</Text>
          </View>
        </View>
        <View style={styles.frame4}>
          <View style={styles.frame5}>
            <Text style={styles.courses}>Total</Text>
            <Text style={styles.text}>{`R${total.toFixed(2)}`}</Text>
          </View>
          <Pressable style={styles.frame6}>
            <Text style={styles.payR750}>Pay R{total.toFixed(2)}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  courses: {
    fontSize: FontSize.size_17xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.backgroundDefaultDefault,
    textAlign: "left",
    width: 184,
    height: 47,
  },
  text: {
    fontSize: FontSize.size_17xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGold_100,
    textAlign: "left",
  },
  frame2: {
    width: 323,
    height: 47,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: 46,
  },
  frame3: {
    width: 351,
    height: 47,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: 18,
  },
  frame1: {
    width: 369,
    height: 115,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_xs,
  },
  frame5: {
    width: 369,
    height: 47,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  payR750: {
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.backgroundDefaultDefault,
    textAlign: "left",
  },
  frame6: {
    borderRadius: Border.br_981xl,
    backgroundColor: Color.colorFirebrick_100,
    width: 216,
    height: 57,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: Padding.p_27xl,
  },
  frame4: {
    width: 369,
    height: 521,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  frame: {
    width: 369,
    height: 657,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  paymentMethod1: {
    backgroundColor: Color.colorSteelblue,
    flex: 1,
    width: "100%",
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_smi,
    paddingRight: Padding.p_11xl,
    paddingBottom: Padding.p_35xl,
  },
  errorText: {
    fontSize: FontSize.size_17xl,
    color: Color.colorFirebrick_100,
    textAlign: "center",
    marginTop: 20,
  },
});

export default PaymentMethod;
