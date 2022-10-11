import React from "react";
import { StyleSheet, Text, View } from "react-native";
import anthonyResume from "../assets/antResume.pdf";

const Button = ({ darkMode }) => {
  return (
    <View
      style={[
        styles.container,
        darkMode ? styles.darkButton : styles.lightButton,
      ]}
      accessibilityRole="button"
      focusable
      onClick={() => window.open(anthonyResume, "_blank")}
    >
      <Text style={darkMode && styles.darkTextColor}>Resume</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: "4px",
    paddingHorizontal: "8px",
    paddingVertical: "3px",
    cursor: "pointer",
    border: "2px solid",
  },

  darkTextColor: {
    color: "white",
  },

  lightButton: {
    borderColor: "black",
  },
  darkButton: {
    borderColor: "white",
  },
});

export default Button;
