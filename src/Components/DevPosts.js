import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const DevPosts = ({ darkMode }) => {
  const [posts, setPosts] = React.useState([]);
  const fetchBlogs = async () => {
    try {
      let endpoint = "https://dev.to/api/articles?";
      endpoint += `&username=${"antman"}`;
      fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
          setPosts(data || []);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchBlogs();
  }, []);

  const formatDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <View accessibilityRole="list">
      {posts &&
        posts.map((post) => {
          const postDate = new Date(post.created_at);
          return (
            <View
              accessibilityRole="listitem"
              key={post.id}
              style={styles.listItem}
            >
              <Text style={[styles.date, darkMode && { color: "#fff" }]}>
                {formatDate.format(postDate)}
              </Text>
              <Pressable>
                {({ hovered }) => (
                  <View style={styles.textWrapper}>
                    <Text
                      href={post.url}
                      style={[
                        styles.listText,
                        hovered && { color: "#fff", background: "black" },
                        darkMode && { color: "#fff" },
                        darkMode &&
                          hovered && {
                            background: "#2dd4bf",
                          },
                      ]}
                      numberOfLines={1}
                    >
                      {post.title}
                    </Text>
                  </View>
                )}
              </Pressable>
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    paddingBottom: "0.75rem",
    marginBottom: "0.75rem",
    display: "list-item",
  },

  textWrapper: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whitespace: "nowrap",
    wordwrap: "normal",
    display: "block",
    maxWidth: "100%",
  },

  listText: {
    fontStyle: "normal",
    fontSize: "1.0rem",
    fontWeight: 400,
    cursor: "pointer",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },

  date: {
    float: "right",
    marginLeft: " 20px",
    fontWeight: 150,
  },
});

export default DevPosts;
