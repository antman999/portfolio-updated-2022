import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import codingAnt from "../assets/codingMe.png";

const Information = ({ darkMode, isDesktop }) => {
  const socialMediaObject = [
    {
      icon: <FaTwitter />,
      link: "https://twitter.com/antt_m",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/anthony-mendoza9/",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/antman999",
    },
  ];
  return (
    <View style={[isDesktop ? styles.root : styles.mobileRoot]} focusable>
      <View style={[styles.textRoot, !isDesktop && { paddingBottom: 0 }]}>
        <Image
          source={codingAnt}
          style={styles.img}
          focusable
          accessibilityvalue="Picture of memoji Me coding"
        />
        <Text
          style={[styles.textName, darkMode && styles.darkText]}
          accessibilityrole="heading"
          focusable
        >
          Hi 👋 I'm <Text style={[darkMode && styles.tealName]}>Anthony</Text>
        </Text>
        <Text
          style={[styles.bio, darkMode && styles.darkBio]}
          accessibilityrole="paragraph"
        >
          Fullstack Engineer with a passion for design systems, and creating
          engaging user interfaces.
        </Text>
        <View style={[styles.socialLinks, darkMode && styles.tealName]}>
          {socialMediaObject.map((socialMedia) => (
            <View
              onClick={() => window.open(socialMedia.link, "_blank")}
              style={{ cursor: "pointer" }}
              key={socialMedia.link}
            >
              {socialMedia.icon}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: "2.5rem",
    paddingBottom: "1rem",
  },

  mobileRoot: {
    padding: "20px",
    paddingBottom: "1rem",
  },

  tealName: {
    color: "#2dd4bf",
  },

  bio: {
    fontSize: "17px",
    fontStyle: "normal",
    fontWeight: 150,
  },

  darkBio: {
    color: "rgb(201,201,201)",
  },

  img: {
    height: 200,
    width: 200,
    display: "block",
    margin: "auto",
  },

  socialLinks: {
    justifyContent: "center",
    flexDirection: "row",
    gap: "2rem",
    padding: "20px",
    fontSize: "20px",
  },

  textRoot: {
    textAlign: "center",
    top: 5,
    margin: "auto",
    paddingVertical: "2.5rem",
  },

  textName: {
    fontFamily: "Inter",
    fontSize: "2.0rem",
    fontStyle: "normal",
    fontWeight: 500,
    paddingBottom: "10px",
  },

  darkText: {
    color: "white",
  },
});

export default Information;
