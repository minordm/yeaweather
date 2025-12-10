import styles from "./styles.module.css";

import { formatTime } from "../../helpers/formatTime";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

export default function WeatherTime({ data, isLoading, error }) {
  if (error) return <p>Ошибка в запросе</p>;
  if (isLoading) return <p>Загрузка...</p>;
  // console.log("item", data, data.weather[0].main);

  return (
    <div className={styles.wrapper}>
      <div className={styles.time}>{formatTime(data.dt_txt)}</div>
      <WeatherIcon icon={data.weather[0].main} />
      <div className={styles.temp}>{data.main.temp}&ordm;</div>
      {/* <div className={styles.pad}></div> */}
      {/* <div className={styles.gradient}></div> */}
    </div>
  );
}
