import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({ darkMode = true }) => {
  const colorSchemeStyles = darkMode ? styles.darkBlur : styles.lightBlur;
  console.log(colorSchemeStyles);
  return (
    <View style={[colorSchemeStyles, styles.blur, styles.container]}>
      <View style={styles.control}>
        <View style={styles.leftNav}>
          <Text style={[darkMode && styles.lightText, styles]}>
            leftControl
          </Text>
        </View>
        <View style={styles.rightNav}>
          <Text style={darkMode && styles.lightText}>right Control</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    height: "7vh",
    top: 0,
    start: 0,
    position: "fixed",
    width: "100%",
  },

  blur: {
    backdropFilter: "blur(10px)",
  },

  darkBlur: {
    backgroundColor: "rgba(14,30,42,0.9)",
  },

  lightBlur: {
    backgroundColor: "hsla(0,0%,100%,0.9)",
  },

  leftNav: {
    alignItems: "start",
    minWidth: "20px",
    paddingHorizontal: "12px",
    marginHorizontal: "12px",
  },

  rightNav: {
    alignItems: "flex-end",
    marginHorizontal: "12px",
    paddingHorizontal: "12px",
    minWidth: "20px",
  },
  control: {
    alignItems: "center",
    flexDirection: "row",
    height: "7vh",
    justifyContent: "space-between",
    width: "100%",
  },

  lightText: {
    color: "white",
  },
});

export default Header;
