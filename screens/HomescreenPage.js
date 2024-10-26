import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import {
  FontFamily,
  Color,
  FontSize,
  StyleVariable,
  Padding,
  Gap,
} from "../GlobalStyles";

const HomescreenPage = () => {
  return (
    <ImageBackground
      style={styles.homescreenPage}
      resizeMode="cover"
      source={require("../assets/homescreenpage.png")}
    >
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/ellipse-12.png")}
          />
          <Text style={styles.welcome}>WELCOME</Text>
        </View>
        <View style={styles.frame2}>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/rectangle-11.png")}
          />
        </View>
      </View>
      <View style={styles.frame3}>
        <View style={styles.frame4}>
          <View style={styles.frame2}>
            <View style={styles.frame6}>
              <View style={styles.frame7}>
                {/* <Image
                  style={styles.frameInner}
                  contentFit="cover"
                  source={require("../assets/ellipse-13.png")}
                /> */}
                <Pressable style={styles.getStartedWrapper}>
                  <Text style={styles.getStarted}>Get started</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frame8}>
          <View style={styles.frame9}>
            <Text style={styles.empoweringCommunities}>
              EMPOWERING COMMUNITIES
            </Text>
          </View>
          <View style={styles.frame10}>
            <Text style={styles.oneSkillAt}>one skill at a time</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 392,
    height: 374,
  },
  welcome: {
    position: "absolute",
    top: 245,
    left: 302,
    fontSize: 40,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorGold_200,
    textAlign: "left",
    width: 213,
    height: 65,
  },
  frame1: {
    alignSelf: "stretch",
    position: "relative",
    height: 374,
    overflow: "hidden",
  },
  frameItem: {
    position: "relative",
    width: 350,
    height: 238,
  },
  frame2: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frame: {
    position: "absolute",
    top: -187,
    left: -196,
    width: 586,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 78,
  },
  frameInner: {
    position: "absolute",
    top: 0,
    left: 66,
    width: 404,
    height: 396,
  },
  getStarted: {
    position: "relative",
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
  getStartedWrapper: {
    position: "absolute",
    top: 13,
    left: 0,
    borderRadius: StyleVariable.cornerSmall,
    backgroundColor: Color.borderDefaultDefault,
    width: 216,
    height: 57,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingVertical: Padding.p_xs,
  },
  frame7: {
    position: "relative",
    width: 470,
    height: 396,
    overflow: "hidden",
  },
  frame6: {
    width: 470,
    height: 396,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  frame4: {
    position: "absolute",
    top: 136,
    left: -13,
    width: 783,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  empoweringCommunities: {
    position: "relative",
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorGold_200,
    textAlign: "left",
    width: 396,
  },
  frame9: {
    width: 635,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    height: 29,
    marginLeft: 13,
  },
  oneSkillAt: {
    position: "relative",
    fontSize: FontSize.size_5xl,
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.backgroundDefaultDefault,
    textAlign: "left",
  },
  frame10: {
    width: 562,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 45,
    paddingVertical: 0,
  },
  frame8: {
    position: "absolute",
    top: 0,
    left: -13,
    width: 648,
    height: 75,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: Gap.gap_2xs,
  },
  frame3: {
    position: "absolute",
    top: 534,
    left: -170,
    width: 635,
    height: 437,
    overflow: "hidden",
  },
  homescreenPage: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default HomescreenPage;
