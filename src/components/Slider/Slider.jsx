import styles from "./styles.module.css";

import React, { useRef } from "react";

export default function Slider({ children }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 200;
  };
  const scrollRight = () => {
    sliderRef.current.scrollLeft += 200;
  };

  return (
    <div className={styles.slider}>
      <button onClick={scrollLeft}>{"<"}</button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight}>{">"}</button>
    </div>
  );
}
