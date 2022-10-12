import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Header from "./Components/Header";
import Information from "./Components/Information";
import { useColorScheme } from "react-native";
import Experience from "./Components/Experience";
import Spinner from "./Components/Spinner/Spinner";

const App = () => {
  const colorScheme = useColorScheme();
  const [darkMode, setDarkMode] = React.useState(
    () => window.localStorage.getItem("darkMode") === "true" ?? colorScheme
  );
  const [screenDims, setScreen] = React.useState(Dimensions.get("screen"));
  const [windowDims, setWindow] = React.useState(Dimensions.get("window"));
  const [isLoading, setLoaded] = React.useState(true);

  React.useEffect(() => {
    if (window.localStorage.getItem("darkMode") == null) {
      window.localStorage.setItem("darkMode", false);
    } else {
      window.localStorage.setItem("darkMode", darkMode);
    }
  }, [darkMode]);

  React.useEffect(() => {
    setTimeout(function () {
      setLoaded(false);
    }, 1700);
  }, []);

  React.useEffect(() => {
    const handleChange = ({ screen, window: win }) => {
      setScreen(screen);
      setWindow(win);
    };

    const subscription = Dimensions.addEventListener("change", handleChange);
    return () => {
      subscription.remove();
    };
  }, [setScreen, setWindow]);

  const themeChange = () => {
    setDarkMode(!darkMode);
  };

  const windowSize = windowDims.width >= "750";
  const screenSize = screenDims.width >= "750";
  const isDesktop = windowSize || screenSize;

  return (
    <View style={[darkMode && styles.themeChange, styles.app]}>
      {isLoading ? (
        <Spinner darkMode={darkMode} />
      ) : (
        <React.Fragment>
          <Header darkMode={darkMode} onThemeChangeClick={themeChange} />
          <Information darkMode={darkMode} isDesktop={isDesktop} />
          <Experience darkMode={darkMode} isDesktop={isDesktop} />
        </React.Fragment>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    transition: "all .4s ease",
    minHeight: "100vh",
    height: "100%",
    overflowX: "hidden",
  },
  img: {
    height: 200,
    width: 200,
  },
  themeChange: {
    backgroundColor: "rgb(21,32,43)",
  },
});

export default App;
