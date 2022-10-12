import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { technicalExperience, education } from "../assets/experienceObject";
import DevPosts from "./DevPosts";

const Experience = ({ darkMode, isDesktop }) => {
  const techStack = [
    "Javascript",
    "Flow.js",
    "Typescript",
    "React",
    "React Native",
    "React Native Web",
    "React Testing Library",
    "Node.js",
  ];
  return (
    <View
      style={[isDesktop ? styles.experienceRoot : styles.experienceRootMobile]}
    >
      <View style={styles.textWrapper}>
        <Text style={[styles.title, darkMode && styles.tealName]}>
          About Me
        </Text>
        <Text
          style={[
            styles.descriptionRoot,
            darkMode && { color: '"rgb(201,201,201)"' },
          ]}
        >
          Hi! thanks for visiting my portfolio! I'm a software engineer based
          out of NYC. Currently working at Twitter helping build our internal
          components library. Previously I attended Flatiron Bootcamp, where I
          learned all the fundamentals of web development. <br /> <br />
          Before attending Flatiron School, I was majoring in CS and working in
          banking.
          <br />
          <br />
          In my past time I enjoy diving deep into frontend work I also practice
          Muay Thai and most importantly I'm Cocoa's 🐶 dad.
        </Text>
      </View>
      <View>
        <Text style={[styles.title, darkMode && styles.tealName]}>
          Experience
        </Text>
        {technicalExperience.map((obj) => (
          <View style={styles.experienceWrapper} key={obj.role}>
            <Text style={[styles.company, darkMode && { color: "#FFFFFF" }]}>
              {obj.company}
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
        <Text style={[styles.title, darkMode && styles.tealName]}>
          Education
        </Text>
        {education.map((obj) => (
          <View style={styles.experienceWrapper} key={obj.school}>
            <Text style={[styles.company, darkMode && { color: "#FFFFFF" }]}>
              {obj.school}
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
        <Text style={[styles.title, darkMode && styles.tealName]}>
          Technologies I'm working with
        </Text>
        <View style={styles.list} accessibilityRole="list">
          {techStack.map((tech) => (
            <Text
              accessibilityRole="listitem"
              key={tech}
              style={[
                styles.techStack,
                darkMode && { color: "rgb(201,201,201)" },
              ]}
            >
              ▹ {tech}
            </Text>
          ))}
        </View>
      </View>
      <View>
        <Text
          style={[
            styles.title,
            darkMode && styles.tealName,
            { paddingBottom: "16px" },
          ]}
        >
          Technical posts
        </Text>
        <DevPosts darkMode={darkMode} />
      </View>
      <View accessibilityRole="footer" style={styles.footer}>
        <Text
          style={[
            styles.footerText,
            darkMode && { color: '"rgb(201,201,201)"' },
          ]}
        >
          Built with ❤️ by{" "}
          <Text style={[darkMode && styles.tealName]}>Anthony Mendoza</Text>
        </Text>
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
    fontWeight: 350,
  },

  role: {
    flexDirection: "row",
    fontStyle: "italic",
    fontSize: "0.85rem",
    fontWeight: 350,
    marginBottom: "10px",
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
    gridTemplateColumns: "repeat(2, minmax(140px, 700px))",
    gap: "0px 10px",
    overflow: "hidden",
    listStyle: "none",
    marginTop: "20px",
  },
  techStack: {
    fontStyle: "normal",
    fontSize: "0.95rem",
    fontWeight: 150,
    paddingTop: "8px",
  },

  footer: {
    margin: "auto",
    marginTop: "30px",
    paddingTop: "30px",
    paddingBottom: "24px",
  },

  footerText: {
    flexDirection: "row",
    fontStyle: "normal",
    fontSize: "0.95rem",
    fontWeight: 150,
  },
});

export default Experience;
