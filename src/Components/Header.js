import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FiSun, FiMoon } from "react-icons/fi";
import { useScroll } from "../hooks/useScroll";

const Header = ({ darkMode, onThemeChangeClick }) => {
  const colorSchemeStyles = darkMode ? styles.darkBlur : styles.lightBlur;
  const position = useScroll();
  return (
    <View
      style={[
        colorSchemeStyles,
        styles.blur,
        styles.container,
        position > 25 ? styles.shadow : styles.noShadow,
      ]}
    >
      <View style={styles.control}>
        <View style={styles.leftNav}>
          <Text
            style={[darkMode && styles.lightText, styles.font]}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {"<Anthony />"}
          </Text>
        </View>
        <View style={[styles.rightNav, darkMode && styles.fillIcon]}>
          <View onClick={onThemeChangeClick} style={styles.transition}>
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </View>
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
    transition: "all .4s ease",
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
    alignItems: "flex-start",
    minWidth: "20px",
    paddingHorizontal: "12px",
    marginStart: "14px",
  },

  rightNav: {
    alignItems: "flex-end",
    marginEnd: "14px",
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

  fillIcon: {
    color: "white",
  },

  font: {
    fontFamily: "Work Sans, sans-serif",
    fontSize: "1em",
    cursor: "pointer",
  },

  transition: {
    cursor: "pointer",
  },

  shadow: {
    boxShadow:
      "0 1px 3px 0 rgb(89 88 88 / 10%), 0 1px 2px -1px rgb(89 88 88 / 10%)",
  },
  noShadow: {
    boxShadow: "0 0 #0000",
  },
});

export default Header;
