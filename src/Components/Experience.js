import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { technicalExperience, education } from "../assets/experienceObject";

const Experience = ({ darkMode, isDesktop }) => {
  return (
    <View
      style={[isDesktop ? styles.experienceRoot : styles.experienceRootMobile]}
    >
      <View style={styles.textWrapper}>
        <Text
          style={[styles.titleRow, styles.title, darkMode && styles.tealName]}
        >
          About Me
        </Text>
        <Text
          style={[
            styles.descriptionRoot,
            darkMode && { color: '"rgb(201,201,201)"' },
          ]}
        >
          Hi! thanks for visiting my portfolio! I'm a software engineer based
          out of NYC currently working at twitter helping build our internal
          components library. Previously I attended Flatiron Bootcamp where I
          learned all the fundamentals of web development. <br /> <br />
          Before attending Flatiron School I was majoring in CS and working in
          banking.
          <br />
          <br />
          In my past time I enjoy diving deep into frontend work I also practice
          Muay Thai and most importantly I'm Cocoa's 🐶 dad, Scroll all the way
          to the bottom to see some pictures of her.
        </Text>
      </View>
      <View>
        <Text
          style={[styles.titleRow, styles.title, darkMode && styles.tealName]}
        >
          Experience
        </Text>
        {technicalExperience.map((obj) => (
          <View style={styles.experienceWrapper} key={obj.role}>
            <Text style={[styles.company, darkMode && { color: "#FFFFFF" }]}>
              @{obj.company}
            </Text>
            <Text
              style={[styles.role, darkMode && { color: "rgb(201,201,201)" }]}
            >
              {obj.role}, {obj.date}
            </Text>
            <Text
              style={[
                styles.jobDescription,
                darkMode && { color: '"rgb(201,201,201)"' },
              ]}
            >
              {obj.description}
            </Text>
          </View>
        ))}
      </View>
      <View>
        <Text
          style={[styles.titleRow, styles.title, darkMode && styles.tealName]}
        >
          Education
        </Text>
        {education.map((obj) => (
          <View style={styles.experienceWrapper} key={obj.school}>
            <Text style={[styles.company, darkMode && { color: "#FFFFFF" }]}>
              @{obj.school}
            </Text>
            <Text
              style={[styles.role, darkMode && { color: "rgb(201,201,201)" }]}
            >
              {obj.award}, {obj.date}
            </Text>
            <Text
              style={[
                styles.jobDescription,
                darkMode && { color: '"rgb(201,201,201)"' },
              ]}
            >
              {obj.description}
            </Text>
          </View>
        ))}
      </View>
      <View>
        <Text
          style={[styles.titleRow, styles.title, darkMode && styles.tealName]}
        >
          Technologies I'm working with
        </Text>
        <View style={styles.list} accessibilityRole="list">
          <Text accessibilityRole="listitem">Javascript</Text>
          <Text accessibilityRole="listitem">Flow.js</Text>
          <Text accessibilityRole="listitem">Typescript</Text>
          <Text accessibilityRole="listitem">React</Text>
          <Text accessibilityRole="listitem">React Native</Text>
          <Text accessibilityRole="listitem">React Native Web</Text>
          <Text accessibilityRole="listitem">Node.js</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  experienceRoot: {
    paddingHorizontal: "8.0rem",
    paddingTop: "2.0rem",
    margin: "auto",
  },

  title: {
    fontSize: "1.8rem",
    fontStyle: "normal",
    fontWeight: 350,
    flexDirection: "row",
    marginTop: "55px",
  },

  tealName: {
    color: "#2dd4bf",
  },

  experienceRootMobile: {
    paddingLeft: "25px",
    paddingRight: "25px",
  },

  company: {
    paddingTop: "28px",
    marginBottom: "2px",
    flexDirection: "row",
    fontSize: "1.15rem",
    fontStyle: "italic",
    fontWeight: 250,
  },

  role: {
    flexDirection: "row",
    fontStyle: "italic",
    fontSize: "0.85rem",
    fontWeight: 250,
    marginBottom: "20px",
  },

  descriptionRoot: {
    flexDirection: "row",
    fontStyle: "normal",
    fontSize: "0.95rem",
    fontWeight: 150,
    paddingTop: "20px",
  },

  experienceWrapper: { marginBottom: "20px" },

  jobDescription: {
    flexDirection: "row",
    fontStyle: "normal",
    fontSize: "0.95rem",
    fontWeight: 150,
    paddingTop: "2px",
  },

  list: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(140px, 200px))",
    gap: "0px 10px",
    margin: "auto",
    overflow: "hidden",
    listStyle: "none",
  },
});

export default Experience;
