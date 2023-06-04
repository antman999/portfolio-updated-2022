import React from "react";
import { StyleSheet, Text, View } from "react-native";
import anthonyResume from "../assets/Anthony-Mendoza-CV.pdf";

const Button = ({ darkMode }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(anthonyResume, "_blank");
  };

  const onKeyPress = (e) => {
    if (!e.defaultPrevented && e.key === "Enter") {
      handleClick(e);
      e.preventDefault();
    }
  };
  return (
    <View
      style={[
        styles.container,
        darkMode ? styles.darkButton : styles.lightButton,
      ]}
      accessibilityrole="button"
      focusable
      onClick={handleClick}
      onKeyDown={onKeyPress}
    >
      <Text
        style={darkMode && styles.darkTextColor}
        accessibilityvalue="Resume"
      >
        Resume
      </Text>
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
