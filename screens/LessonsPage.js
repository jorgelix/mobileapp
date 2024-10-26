import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, TouchableWithoutFeedback } from "react-native";
import Frame7 from "../components/Frame7";
import Frame6 from "../components/Frame6";
import Frame8 from "../components/Frame8";
import {
  StyleVariable,
  FontFamily,
  Color,
  FontSize,
  Gap,
  Padding,
} from "../GlobalStyles";

import Menu from "../components/Menu";

const LessonsPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = {
    "First Aid": {
      fees: "R1500",
      purpose: "To provide first aid awareness and basic life support",
      content: [
        "Wounds and bleeding",
        "Burns and fractures",
        "Emergency scene management",
        "Cardio-Pulmonary Resuscitation (CPR)",
        "Respiratory distress e.g., Choking, blocked airway",
      ],
    },
    Sewing: {
      fees: "R1500",
      purpose: "To provide alterations and new garment tailoring services",
      content: [
        "Types of stitches",
        "Threading a sewing machine",
        "Sewing buttons, zips, hems and seams",
        "Alterations",
        "Designing and sewing new garments",
      ],
    },
    Landscaping: {
      fees: "R1500",
      purpose: "To provide landscaping services for new and established gardens",
      content: [
        "Indigenous and exotic plants and trees",
        "Fixed structures (fountains, statues, benches, tables, built-in braai)",
        "Balancing of plants and trees in a garden",
        "Aesthetics of plant shapes and colours",
        "Garden layout",
      ],
    },
    "Life Skills": {
      fees: "R1500",
      purpose: "To provide skills to navigate basic life necessities",
      content: [
        "Opening a bank account",
        "Basic labour law (know your rights)",
        "Basic reading and writing literacy",
        "Basic numeric literacy",
      ],
    },
  };

  const handlePress = (course) => {
    setSelectedCourse(selectedCourse === course ? null : course); // Toggle the course details
  };

  const handleOutsidePress = () => {
    setSelectedCourse(null); // Hide the course details
  };
  const handleBackToCourses = () => {
    navigation.navigate('CourseChosen'); 
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={styles.lessonsPage}>
        <Menu />
        <Frame7 />
        <View style={styles.frame}>
          <Pressable onPress={() => handlePress("First Aid")}>
            <Frame6 />
          </Pressable>
          <Pressable onPress={() => handlePress("Sewing")}>
            <Frame8 />
          </Pressable>
          {/* Add more Pressables for other courses as needed */}
        </View>

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
  frame: {
    width: 416,
    height: 647,
    justifyContent: "center",
    gap: 66,
    overflow: "hidden",
  },
  lessonsPage: {
    backgroundColor: Color.colorSteelblue,
    flex: 1,
    width: "100%",
    height: 932,
    paddingLeft: 14,
    paddingTop: Padding.p_smi,
    paddingBottom: Padding.p_smi,
    gap: Gap.gap_xl,
    overflow: "hidden",
  },
  courseDetails: {
    backgroundColor: Color.colorWhite,
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  courseHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  courseText: {
    fontSize: 16,
    marginBottom: 5,
  },
  backButton: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: 150, // Fixed width
    alignItems: 'center',
  },
  backButtonText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
  },
});

export default LessonsPage;
