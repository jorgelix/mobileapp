import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleVariable, Color, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import Menu from "../components/Menu";

const ExplorerPage = () => {
  const [frameDropdownOpen, setFrameDropdownOpen] = useState(false);
  const [frameDropdownValue, setFrameDropdownValue] = useState();
  const [frameDropdownItems, setFrameDropdownItems] = useState([
    { value: "Services", label: "Services" },
    { value: "About", label: "About" },
    { value: "Contact", label: "Contact" },
  ]);

  const navigation = useNavigation();

  return (
    <View style={styles.explorerPage}>
      <View style={styles.explorerPageChild} />
      <Image
        style={styles.explorerPageItem}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Menu />
      <Image
        style={styles.explorerPageInner}
        contentFit="cover"
        source={require("../assets/rectangle-41.png")}
      />
      <Text style={[styles.selectACourse, styles.helloAnneFlexBox]}>
        Select a course
      </Text>

      {/* Link the Six Weeks image to SixWeeksPage */}
      <Pressable onPress={() => navigation.navigate("SixWeeksPage")}>
        <Image
          style={[styles.rectangleIcon, styles.rectangleIconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-51.png")}
        />
        <Text style={[styles.sixWeeks, styles.sixTypo]}>{`six weeks `}</Text>
      </Pressable>

      {/* Link the Six Months image to LessonsPage */}
      <Pressable onPress={() => navigation.navigate("LessonsPage")}>
        <Image
          style={[styles.explorerPageChild1, styles.rectangleIconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-61.png")}
        />
        <Text style={[styles.sixMonths, styles.sixTypo]}>{`six months `}</Text>
      </Pressable>

      <Text style={[styles.ourServices, styles.helloAnneFlexBox]}>
        OUR SERVICES
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameDropdowndropDownContainer: {
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 3,
    borderBottomWidth: 3,
  },
  helloAnneFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  wrapperBorder: {
    borderBottomWidth: 3,
    borderTopWidth: 3,
    borderStyle: "solid",
  },
  rectangleIconLayout: {
    height: 175,
    top: 405,
    borderRadius: StyleVariable.cornerSmall,
    position: "absolute",
  },
  sixTypo: {
    top: 504,
    color: Color.backgroundDefaultDefault,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_8xl,
    position: "absolute",
  },
  explorerPageChild: {
    top: 327,
    left: 115,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 214,
    height: 47,
    borderRadius: StyleVariable.cornerSmall,
    position: "absolute",
  },
  explorerPageItem: {
    top: 15,
    left: 17,
    width: 65,
    height: 60,
    position: "absolute",
  },
  hello: {
    color: Color.backgroundDefaultDefault,
  },
  anne: {
    color: Color.colorGold_100,
  },
  helloAnne: {
    left: 103,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_8xl,
    textAlign: "left",
    top: 29,
  },
  dropdownpicker: {
    borderColor: Color.backgroundDefaultDefault,
  },
  wrapper: {
    left: 350,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 55,
    top: 29,
    position: "absolute",
  },
  explorerPageInner: {
    marginLeft: -177,
    top: 117,
    left: "50%",
    borderRadius: StyleVariable.cornerLarge,
    width: 355,
    height: 178,
    position: "absolute",
  },
  selectACourse: {
    top: 334,
    left: 123,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_8xl,
    textAlign: "left",
  },
  rectangleIcon: {
    left: 39,
    width: 177,
  },
  explorerPageChild1: {
    left: 240,
    width: 165,
  },
  ourServices: {
    top: 192,
    left: 126,
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.backgroundDefaultDefault,
  },
  sixWeeks: {
    left: 64,
    width: 134,
    height: 56,
  },
  sixMonths: {
    left: 251,
    width: 144,
  },
  explorerPage: {
    backgroundColor: Color.colorSteelblue,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default ExplorerPage;

