import styles from "./styles.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>WeatherMe</h1>
        <p className={styles.time}>21:00 pm </p>
        <button className={styles.button}>
          &ordm;C <div className={styles.slider}></div> &ordm;F
        </button>
      </div>

      <nav className={styles.days}>
        <p className={`${styles.days} ${styles.active}`}>Today</p>
        <p>Tommorow</p>
        <p>Monthly Forecast</p>
      </nav>
    </div>
  );
}
