import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { technicalExperience, education } from "../assets/experienceObject";
import DevPosts from "./DevPosts";

const Experience = ({ darkMode, isDesktop }) => {
  const techStack = [
    "Javascript",
    "Next.js",
    "Typescript",
    "React",
    "React Native",
    "React Testing Library",
    "Node.js / Express",
    "Vue.js",
  ];
  return (
    <View
      focusable
      accessibilityrole="paragraph"
      style={[isDesktop ? styles.experienceRoot : styles.experienceRootMobile]}
    >
      <View style={styles.textWrapper}>
        <Text style={[styles.title, darkMode && styles.tealName]}>
          About Me
        </Text>
        <Text
          focusable
          style={[
            styles.descriptionRoot,
            darkMode && { color: '"rgb(201,201,201)"' },
          ]}
        >
          Hello and welcome to my portfolio! I'm a software engineer based in
          NYC with previous experience at Twitter. My journey began at Flatiron
          Bootcamp, where I immersed myself in the world of web development and
          gained a solid foundation in the fundamentals.
          <br />
          <br />
          Before my coding adventures, I was pursuing a degree in Computer
          Science while working in the banking industry. However, when I'm not
          busy with work, I love exploring new front-end technologies,
          Practicing Muay Thai and BJJ, and cherishing the role of a devoted dog
          dad to Cocoa 🐶.
        </Text>
      </View>
      <View focusable>
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
      <View focusable>
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
      <View focusable>
        <Text style={[styles.title, darkMode && styles.tealName]}>
          Technologies I'm working with
        </Text>
        <View style={styles.list} accessibilityrole="list">
          {techStack.map((tech) => (
            <Text
              accessibilityrole="listitem"
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
            { paddingBottom: "28px" },
          ]}
        >
          Technical posts
        </Text>
        <DevPosts darkMode={darkMode} />
      </View>
      <View accessibilityrole="footer" style={styles.footer} focusable>
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
    paddingTop: "28px",
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
    marginTop: "28px",
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
