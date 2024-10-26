import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, ScrollView, TextInput } from "react-native";
import { CheckBox } from "@rneui/themed";
import { Color, FontFamily, FontSize, Gap } from "../GlobalStyles";
import Menu from "../components/Menu";

const CourseChosen = () => {
  const courseFees = {
    childminding: 750,
    cooking: 750,
    gardenMaintenance: 750,
    firstAid: 1500,
    sewing: 1500,
    landscaping: 1500,
    lifeSkills: 1500,
  };

  const [checkedCourses, setCheckedCourses] = useState({
    childminding: false,
    cooking: false,
    gardenMaintenance: false,
    firstAid: false,
    sewing: false,
    landscaping: false,
    lifeSkills: false,
  });

  const [contactDetails, setContactDetails] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const handleCheckboxChange = (course) => {
    setCheckedCourses((prevState) => ({
      ...prevState,
      [course]: !prevState[course],
    }));
  };

  const calculateTotal = () => {
    const selectedCourses = Object.keys(checkedCourses).filter(course => checkedCourses[course]);
    const totalFees = selectedCourses.reduce((total, course) => total + courseFees[course], 0);

    let discountPercentage = 0;  
    if (selectedCourses.length > 3) {
      discountPercentage = 0.15;
    } else if (selectedCourses.length === 3) {
      discountPercentage = 0.10;
    } else if (selectedCourses.length === 2) {
      discountPercentage = 0.05;
    }

    const discount = totalFees * discountPercentage;
    const discountedTotal = totalFees - discount;

    // Calculate VAT at 15%
    const vat = discountedTotal * 0.15;

    // Return the total with VAT included
    return discountedTotal + vat;
  };

  const handleSubmit = () => {
    alert(`Total Fees: R${calculateTotal()}\nName: ${contactDetails.name}\nPhone: ${contactDetails.phoneNumber}\nEmail: ${contactDetails.email}`);
  };

  return (
    <View style={[styles.courseChosen, styles.frame3FlexBox]}>
      <Menu />
      <View style={styles.frame}>
        <View style={[styles.frame1, styles.frameFlexBox]}>
          <View style={[styles.frame2, styles.frameFlexBox]}></View>
        </View>
      </View>
      <View style={[styles.frame3, styles.frame3FlexBox]}>
        <Text style={[styles.selectDesiredCoursesContainer, styles.anneClr]}>
          <Text style={styles.anneTypo}>Select Desired Course/s</Text>
        </Text>
      </View>

      <View style={styles.checkboxContainer}>
        <ScrollView>
          <Text style={styles.courseHeader}>Six Weeks</Text>
          {['childminding', 'cooking', 'gardenMaintenance'].map((course) => (
            <CheckBox
              key={course}
              title={`${course.charAt(0).toUpperCase() + course.slice(1).replace(/([A-Z])/g, ' $1')} - R${courseFees[course]}`}
              checked={checkedCourses[course]}
              onPress={() => handleCheckboxChange(course)}
              containerStyle={styles.list4DensityLayout}
              textStyle={styles.checkboxText}
            />
          ))}
          <Text style={styles.courseHeader}>Six Months</Text>
          {['landscaping', 'lifeSkills', 'firstAid', 'sewing'].map((course) => (
            <CheckBox
              key={course}
              title={`${course.charAt(0).toUpperCase() + course.slice(1).replace(/([A-Z])/g, ' $1')} - R${courseFees[course]}`}
              checked={checkedCourses[course]}
              onPress={() => handleCheckboxChange(course)}
              containerStyle={styles.list4DensityLayout}
              textStyle={styles.checkboxText}
            />
          ))}
        </ScrollView>
      </View>

      {/* Contact Details Form */}
      <View style={styles.contactContainer}>
        <Text style={styles.contactHeader}>Enter Your Contact Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={contactDetails.name}
          onChangeText={(text) => setContactDetails((prev) => ({ ...prev, name: text }))}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={contactDetails.phoneNumber}
          onChangeText={(text) => setContactDetails((prev) => ({ ...prev, phoneNumber: text }))}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={contactDetails.email}
          onChangeText={(text) => setContactDetails((prev) => ({ ...prev, email: text }))}
        />
      </View>

      <View style={styles.frame4} />
      <View style={[styles.frame5, styles.frameLayout]}>
        <View style={styles.frame6}>
          <Pressable style={[styles.frame7, styles.frameLayout]} onPress={handleSubmit}>
            <Text style={[styles.next, styles.anneTypo]}>Next</Text>
          </Pressable>
        </View>
      </View>

      {/* Displaying total fee */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Fees: R{calculateTotal()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list4DensityLayout: {
    backgroundColor: "white",
    padding: 10,
    borderWidth: 1,
    borderColor: Color.backgroundDefaultDefault,
    borderRadius: 5,
    marginVertical: 5,
    flex: 1,
  },
  checkboxText: {
    color: "black",
  },
  checkboxContainer: {
    width: "100%",
    backgroundColor: "#FFD700",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    elevation: 2,
  },
  courseHeader: {
    fontWeight: "bold",
    fontSize: FontSize.size_5xl,
    marginVertical: 10,
    textAlign: "left",
  },
  totalContainer: {
    padding: 10,
    backgroundColor: Color.colorSteelblue,
    borderRadius: 5,
    marginTop: 20,
  },
  totalText: {
    fontSize: FontSize.size_6xl,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  contactContainer: {
    padding: 10,
    backgroundColor: "#FFD700",
    borderRadius: 5,
    marginBottom: 20,
    elevation: 2,
  },
  contactHeader: {
    fontWeight: "bold",
    fontSize: FontSize.size_5xl,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    marginVertical: 5,
    backgroundColor: "white",
  },
  frame3FlexBox: {
    flex: 1,
    overflow: "hidden",
  },
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    overflow: "hidden",
  },
  anneClr: {
    color: Color.colorGold_100,
    textAlign: "left",
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
  frameLayout: {
    height: 57,
    overflow: "hidden",
  },
  anneTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_8xl,
  },
  frameChild: {
    width: 65,
    height: 60,
  },
  frame2: {
    width: 139,
    gap: Gap.gap_7xs,
    alignItems: "center",
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
  },
  frame1: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  frame: {
    marginBottom: 40,
  },
  courseChosen: {
    flex: 1,
    backgroundColor: Color.backgroundDefaultDefault,
    padding: 20,
  },
});

export default CourseChosen;
