import styles from "./styles.module.css";

export default function Search({ setCity }) {
  return (
    <div className={styles.search}>
      <button className={styles.button}>
        <img src="/search.svg" alt="search logo" />
      </button>
      <input
        type="text"
        className={styles.input}
        placeholder="Search location..."
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  );
}
