import styles from "./styles.module.css";

import { useState } from "react";

export default function Search({ setCityName }) {
  const [input, setInput] = useState("");

  return (
    <form
      className={styles.search}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setCityName(input);
        setInput("");
      }}
    >
      <button className={styles.button}>
        <img src="/search.svg" alt="search logo" />
      </button>
      <input
        type="text"
        className={styles.input}
        value={input}
        placeholder="Search location..."
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}
