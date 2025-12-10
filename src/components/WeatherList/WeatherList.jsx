import styles from "./styles.module.css";

import WeatherItem from "../WeatherItem/WeatherItem";
import { forwardRef } from "react";

const WeatherList = forwardRef(({ data, error, isLoading }, ref) => {
  if (error) return <p>Ошибка</p>;
  if (isLoading) return <p>Загрузка..</p>;

  console.log(data);

  return (
    <div className={styles.list} ref={ref}>
      {data?.map((item) => (
        <WeatherItem key={item.dt} data={item} />
      ))}
    </div>
  );
});

export default WeatherList;
