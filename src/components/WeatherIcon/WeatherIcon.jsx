export default function WeatherIcon({ icon }) {
  return (
    <>
      {icon.toLowerCase() === "clouds" && (
        <img src="/weather/cloud1.svg" alt="cloud" />
      )}
      {icon.toLowerCase() === "rain" && (
        <img src="/weather/rain1.svg" alt="cloud" />
      )}
      {icon.toLowerCase() === "snow" && (
        <img src="/weather/snow1.svg" alt="cloud" />
      )}
      {icon.toLowerCase() === "clear" && (
        <img src="/weather/sun1.svg" alt="cloud" />
      )}
    </>
  );
}
