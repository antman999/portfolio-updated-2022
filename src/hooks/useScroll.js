import React from "react";

export const useScroll = () => {
  const [scroll, setScroll] = React.useState(0);

  React.useEffect(() => {
    const updatePosition = () => {
      setScroll(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return scroll;
};
