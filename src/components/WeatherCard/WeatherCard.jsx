import styles from "./styles.module.css";

export default function WeatherCard({ error, isLoading, data }) {
  if (error) return <p>Ошибка в запросе</p>;
  if (isLoading) return <p>Загрузка...</p>;

  const { city, weather } = data;

  return (
    <div className={styles.card}>
      <div className={styles.city}>
        {city.country}, {city.name}
      </div>
      <h3 className={styles.temp}>{weather.main.temp}&ordm;C</h3>
      <div className={styles.date}>
        {new Date(weather.dt_txt).toLocaleDateString("ru", {
          month: "short",
          day: "numeric",
          weekday: "short",
        })}
      </div>
      <ul className={styles.params}>
        <li>
          <p>HUMIDITY</p>
          <p>{weather.main.humidity}%</p>
        </li>
        <li>
          <p>VISIBLY</p>
          <p>{weather.visibility}km</p>
        </li>
        <li>
          <p>AIR PRESSURE</p>
          <p>{weather.main.pressure}hPa</p>
        </li>
        <li>
          <p>WIND</p>
          <p>{weather.wind.speed}km</p>
        </li>
      </ul>
    </div>
  );
}
