import styles from "./styles.module.css";

export default function WeatherTime({ data, isLoading, error, index }) {
  if (error) return <p>Ошибка в запросе</p>;
  if (isLoading) return <p>Загрузка...</p>;
  // console.log(data[0]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.time}>
        {new Date(data[index].dt_txt).toLocaleTimeString("ru", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
      <img src="/rain-with-storm.svg" alt="rain and storm" />
      <div className={styles.temp}>{data[index].main.temp}&ordm;</div>
      {/* <div className={styles.pad}></div> */}
      {/* <div className={styles.gradient}></div> */}
    </div>
  );
}
