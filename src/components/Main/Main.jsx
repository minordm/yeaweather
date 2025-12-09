import styles from "./styles.module.css";

import Search from "../Search/Search";
import WeatherCard from "../WeatherCard/WeatherCard";
import WeatherTime from "../WeatherTime/WeatherTime";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

const url = `http://api.openweathermap.org/geo/1.0/direct?q=ufa&appid=b8e560d9347505a8e88b2d69c203fa0b`;

export default function Main() {
  const [city, setCity] = useState("ufa");
  const [favourites, setFavourites] = useState([]);
  const debouncedValue = useDebounce(city, 1500);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCity = await fetch(url);
        if (!responseCity.ok) {
          throw new Error("not found city");
        }
        const cityName = await responseCity.json();

        // setCity(cityName);
        const responseWeather = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${
            cityName && cityName[0].lat
          }&lon=${
            cityName && cityName[0].lon
          }&&units=metric&appid=b8e560d9347505a8e88b2d69c203fa0b`
        );

        if (!responseWeather.ok) {
          throw new Error("not weather");
        }
        const weatherCity = await responseWeather.json();
        setCity(weatherCity);
      } catch (errorFetch) {
        setError(errorFetch);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  console.log(city);

  // const {
  //   error: erCity,
  //   isLoading: loadingCity,
  //   data: cityName,
  // } = useFetch(
  //   // `http://api.openweathermap.org/geo/1.0/direct?q=${debouncedValue}&appid=b8e560d9347505a8e88b2d69c203fa0b`
  //   `http://api.openweathermap.org/geo/1.0/direct?q=ufa&appid=b8e560d9347505a8e88b2d69c203fa0b`
  // );

  // const { error, isLoading, data } = useFetch(
  //   `https://api.openweathermap.org/data/2.5/forecast?lat=${
  //     cityName && cityName[0].lat
  //   }&lon=${
  //     cityName && cityName[0].lon
  //   }&&units=metric&appid=b8e560d9347505a8e88b2d69c203fa0b`
  // );

  // console.log(cityName && `${cityName[0].lat} ${cityName[0].lon}`);

  return (
    <div className={styles.main}>
      <Search setCity={setCity} />
      {/* {cityName} */}
      {/* <WeatherCard
        error={error}
        isLoading={isLoading}
        data={{ city: data?.city, weather: data?.list[0] }}
      />
      <WeatherTime
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
