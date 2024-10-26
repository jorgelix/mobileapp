// components/Menu.js

import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Menu = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false); // State to manage visibility
  const [fadeAnim] = useState(new Animated.Value(0)); // For fade-in effect

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    Animated.timing(fadeAnim, {
      toValue: menuVisible ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
    setMenuVisible(false); // Close the menu after navigation
  };

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.hamburgerIcon} onPress={toggleMenu}>
        <Icon name="menu-outline" size={30} color="#000" />
      </TouchableOpacity>
      {menuVisible && (
        <Animated.View style={{ ...styles.dropdownMenu, opacity: fadeAnim }}>
          
          
      
          <TouchableOpacity onPress={() => handleNavigation('SixWeeksPage')} style={styles.menuItem}>
            <Text style={styles.menuText}>Six-Weeks courses</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation('LessonsPage')} style={styles.menuItem}>
            <Text style={styles.menuText}>Six-Month courses</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation('ExplorerPage')} style={styles.menuItem}>
            <Text style={styles.menuText}>Explorer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation('Contact')} style={styles.menuItem}>
            <Text style={styles.menuText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation('About')} style={styles.menuItem}>
            <Text style={styles.menuText}>Contact</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    top: 20, // Adjust as needed
    right: 20, // Adjust as needed
    zIndex: 1000, // Make sure the menu is on top
  },
  hamburgerIcon: {
    padding: 10,
  },
  dropdownMenu: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Optional: Semi-transparent background
    borderRadius: 10,
    elevation: 5, // Optional: Add shadow for elevation
    position: 'absolute',
    top: 40, // Position below the hamburger icon
    right: 0,
    width: 150, // Set a width for the dropdown
  },
  menuItem: {
    padding: 10,
  },
  menuText: {
    fontSize: 16,
    color: '#000',
  },
});

export default Menu;
