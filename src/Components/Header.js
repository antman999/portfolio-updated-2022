import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FiSun, FiMoon } from "react-icons/fi";
import { useScroll } from "../hooks/useScroll";
import Button from "./Button";

const Header = ({ darkMode, onThemeChangeClick, onKeyDown }) => {
  const colorSchemeStyles = darkMode ? styles.darkBlur : styles.lightBlur;
  const position = useScroll();

  const handleClick = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        colorSchemeStyles,
        styles.blur,
        styles.container,
        position > 5 ? styles.shadow : styles.noShadow,
      ]}
      accessibilityrole="navigation"
    >
      <View style={styles.control}>
        <View style={styles.leftNav}>
          <Text
            style={[darkMode && styles.lightText, styles.font]}
            focusable
            onClick={handleClick}
            onKeyDown={onKeyPress}
            accessibilityvalue="Anthony title button"
          >
            {"<Anthony />"}
          </Text>
        </View>
        <View style={[styles.rightNav, darkMode && styles.fillIcon]}>
          <View
            focusable
            onClick={onThemeChangeClick}
            onKeyDown={onKeyDown}
            style={styles.icon}
          >
            {darkMode ? (
              <FiSun
                size={20}
                accessibilityrole="button"
                accessibilityvalue="Sun Icon"
              />
            ) : (
              <FiMoon
                size={20}
                accessibilityrole="button"
                accessibilityvalue="Moon Icon"
              />
            )}
          </View>
          <Button darkMode={darkMode} />
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
    backdropFilter: "blur(7px)",
  },

  darkBlur: {
    backgroundColor: "rgba(21,32,43,0.9)",
  },

  lightBlur: {
    backgroundColor: "hsla(0,0%,100%,0.9)",
  },

  leftNav: {
    alignItems: "flex-start",
    minWidth: "20px",
    paddingHorizontal: "12px",
    marginStart: "12px",
  },

  rightNav: {
    alignItems: "center",
    marginEnd: "12px",
    paddingHorizontal: "12px",
    minWidth: "20px",
    flexDirection: "row",
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
    fontFamily: "Work Sans",
    fontSize: "1em",
    fontWeight: "1em",
    cursor: "pointer",
  },

  icon: {
    cursor: "pointer",
    marginHorizontal: "12px",
  },

  shadow: {
    boxShadow:
      "0 3px 3px 0 rgb(89 88 88 / 10%), 0 1px 2px -1px rgb(89 88 88 / 10%)",
  },
  noShadow: {
    boxShadow: "0 0 #0000",
  },
});

export default Header;
