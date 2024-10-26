import React, { useState } from "react"; 
import { StyleSheet, View, Text, Pressable, TouchableWithoutFeedback } from "react-native";
import { Image } from "expo-image"; 
import { useNavigation } from '@react-navigation/native'; 
import {
  StyleVariable,
  FontFamily,
  Color,
  FontSize,
  Gap,
  Padding,
} from "../GlobalStyles";

const SixWeeksPage = () => {
  const navigation = useNavigation(); 
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = {
    "Child Minding": {
      fees: "R750",
      purpose: "To provide basic child and baby care",
      content: [
        "Birth to six-month old baby needs",
        "Seven-month to one-year-old needs",
        "Toddler needs",
        "Educational toys",
      ],
    },
    Cooking: {
      fees: "R750",
      purpose: "To prepare and cook nutritious family meals",
      content: [
        "Nutritional requirements for a healthy body",
        "Types of protein, carbohydrates, and vegetables",
        "Planning meals",
        "Preparation and cooking of meals",
      ],
    },
    "Garden Maintenance": {
      fees: "R750",
      purpose: "To provide basic knowledge of watering, pruning, and planting in a domestic garden",
      content: [
        "Water restrictions and the watering requirements of indigenous and exotic plants",
        "Pruning and propagation of plants",
        "Planting techniques for different plant types",
      ],
    },
  };

  const courseImages = {
    "Child Minding": require("../assets/rectangle-4.png"),
    Cooking: require("../assets/rectangle-5.png"),
    "Garden Maintenance": require("../assets/rectangle-6.png"),
  };

  const handlePress = (course) => {
    setSelectedCourse(selectedCourse === course ? null : course);
  };

  const handleOutsidePress = () => {
    setSelectedCourse(null);
  };

  const handleBackToCourses = () => {
    navigation.navigate('CourseChosen'); 
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={styles.sixWeeksPage}>
        {/* Course Images */}
        {Object.keys(courses).map((courseName) => (
          <Pressable key={courseName} onPress={() => handlePress(courseName)}>
            <Image
              style={[styles.sixWeeksPageInner, styles.sixLayout]}
              source={courseImages[courseName]}
            />
          </Pressable>
        ))}

        {/* Categories Text */}
        <Text style={[styles.categories, styles.gardenTypo1]}>six-week course</Text>

        {/* Decorative Lines */}
        <View style={[styles.lineGroup, styles.lineLayout]}>
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <View style={[styles.lineView, styles.lineViewLayout]} />
        </View>

        {/* Course Category Texts */}
        {Object.keys(courses).map((courseName) => (
          <Text key={courseName} style={[styles[courseName.toLowerCase().replace(' ', '')], styles.gardenTypo]}>
            {courseName.toUpperCase()}
          </Text>
        ))}

        {/* Display Selected Course Details */}
        {selectedCourse && (
          <View style={styles.courseDetails}>
            <Text style={styles.courseHeader}>{selectedCourse}</Text>
            <Text style={styles.courseText}>
              Fees: {courses[selectedCourse].fees}
            </Text>
            <Text style={styles.courseText}>
              Purpose: {courses[selectedCourse].purpose}
            </Text>
            <Text style={styles.courseText}>Content:</Text>
            {courses[selectedCourse].content.map((item, index) => (
              <Text key={index} style={styles.courseText}>
                • {item}
              </Text>
            ))}
          </View>
        )}

        {/* Back to CourseChosen Button */}
        <Pressable style={styles.backButton} onPress={handleBackToCourses}>
          <Text style={styles.backButtonText}>Next</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  sixWeeksPage: {
    flex: 1,
    backgroundColor: Color.colorSteelblue,
    padding: Padding.p_smi,
    alignItems: "center",
  },
  sixWeeksPageInner: {
    width: 200,
    height: 200,
    margin: 10,
  },
  courseDetails: {
    padding: 10,
    backgroundColor: Color.colorWhite,
    borderRadius: 5,
    marginTop: 10,
  },
  courseHeader: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBold,
  },
  courseText: {
    fontSize: FontSize.size_m,
    fontFamily: FontFamily.interRegular,
  },
  backButton: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  backButtonText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
  },
  // Define other styles like gardenTypo, lineGroup, lineView, etc.
});

export default SixWeeksPage;
