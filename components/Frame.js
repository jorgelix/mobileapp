import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, FontSize, FontFamily, Gap } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame = ({
  ellipseIconMarginLeft,
  anneWidth,
  ellipse1,
  lineViewBorderColor,
  propBorderColor,
}) => {
  const frameStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", ellipseIconMarginLeft),
    };
  }, [ellipseIconMarginLeft]);

  const frame1Style = useMemo(() => {
    return {
      ...getStyleValue("width", anneWidth),
    };
  }, [anneWidth]);

  const lineViewStyle = useMemo(() => {
    return {
      ...getStyleValue("borderColor", lineViewBorderColor),
    };
  }, [lineViewBorderColor]);

  const lineView1Style = useMemo(() => {
    return {
      ...getStyleValue("borderColor", propBorderColor),
    };
  }, [propBorderColor]);

  return (
    <View style={[styles.frame, styles.frameFlexBox, frameStyle]}>
      <View style={[styles.frame1, styles.frameFlexBox, frame1Style]}>
        <Image style={styles.frameChild} contentFit="cover" source={ellipse1} />
        <Text style={styles.anne}>{`anne `}</Text>
      </View>
      {/* <View style={[styles.lineParent, styles.lineParentShadowBox]}>
        <View style={[styles.frameItem, styles.frameBorder, lineViewStyle]} />
        <View style={[styles.frameInner, styles.frameBorder]} />
        <View style={[styles.frameItem, styles.frameBorder, lineView1Style]} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    height: 60,
  },
  lineParentShadowBox: {
    borderTopWidth: 3,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  frameBorder: {
    alignSelf: "stretch",
    borderColor: Color.backgroundDefaultDefault,
    borderStyle: "solid",
  },
  frameChild: {
    width: 65,
    height: 60,
  },
  anne: {
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGold_100,
    textAlign: "left",
  },
  frame1: {
    width: 139,
    gap: Gap.gap_7xs,
  },
  frameItem: {
    borderTopWidth: 1,
    height: 1,
  },
  frameInner: {
    height: 3,
    borderTopWidth: 3,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignSelf: "stretch",
  },
  lineParent: {
    borderBottomWidth: 3,
    width: 55,
    gap: Gap.gap_2xs,
    borderColor: Color.backgroundDefaultDefault,
    borderStyle: "solid",
    borderTopWidth: 3,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  frame: {
    width: 384,
    gap: Gap.gap_6xl,
  },
});

export default Frame;
