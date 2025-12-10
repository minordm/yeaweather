import styles from "./styles.module.css";

import Search from "../Search/Search";
import WeatherCard from "../WeatherCard/WeatherCard";
import WeatherItem from "../WeatherItem/WeatherItem";
import { useEffect, useState } from "react";
import WeatherList from "../WeatherList/WeatherList";
import Slider from "../Slider/Slider";

export default function Main() {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState(null);
  // const [favourites, setFavourites] = useState([]);
  // const debouncedValue = useDebounce(city, 1500);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=b8e560d9347505a8e88b2d69c203fa0b`;
        const responseCity = await fetch(url);
        if (!responseCity.ok) {
          throw new Error("not found city");
        }
        const data = await responseCity.json();
        console.log(data);

        setWeather(data);
      } catch (errorFetch) {
        setError(errorFetch);
      } finally {
        setIsLoading(false);
      }
    };
    if (cityName) {
      fetchData();
    }
  }, [cityName]);

  return (
    <div className={styles.main}>
      <Search setCityName={setCityName} />
      {/* {weather && weather.city.name} */}
      <WeatherCard
        error={error}
        isLoading={isLoading}
        data={{ city: weather?.city, weather: weather?.list[0] }}
      />

      <Slider>
        <WeatherList data={weather?.list} error={error} isLoading={isLoading} />
      </Slider>
      {/* <WeatherTime
        error={error}
        isLoading={isLoading}
        data={data?.list}
        index={0}
      />
      <WeatherTime
        error={error}
        isLoading={isLoading}
        data={data?.list}
        index={1}
      />
      <WeatherTime
        error={error}
        isLoading={isLoading}
        data={data?.list}
        index={2}
      />
      <WeatherTime
        error={error}
        isLoading={isLoading}
        data={data?.list}
        index={3}
      />
      <WeatherTime
        error={error}
        isLoading={isLoading}
        data={data?.list}
        index={4}
      />
      <WeatherTime
        error={error}
        isLoading={isLoading}
        data={data?.list}
        index={5}
      /> */}
    </div>
  );
}
