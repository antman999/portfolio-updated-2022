import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Header from "./Components/Header";
import codingAnt from "./img/codingMe.png";

const App = () => {
  const [darkMode, setDarkMode] = React.useState(() =>
    window.localStorage.getItem("darkMode") === "true" ? true : false
  );

  React.useEffect(() => {
    if (window.localStorage.getItem("darkMode") == null) {
      window.localStorage.setItem("darkMode", false);
    } else {
      window.localStorage.setItem("darkMode", darkMode);
    }
  }, [darkMode]);

  const themeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <View style={[darkMode && styles.themeChange, styles.app]}>
      <Header darkMode={darkMode} onThemeChangeClick={themeChange} />
      <Image source={codingAnt} style={[styles.img]} />
      <Image source={codingAnt} style={[styles.img]} />
      <Image source={codingAnt} style={[styles.img]} />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    minHeight: "100%",
    transition: "all .4s ease",
  },

  img: {
    height: 220,
    width: 220,
    resizeMode: "cover",
  },
  themeChange: {
    backgroundColor: "rgba(14,30,42,1)",
  },
});

export default App;
