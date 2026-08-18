import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWeather } from './hooks/useWeather.js';
import { getWeatherIcon } from './utils/weatherIcons.js';
import './WeatherWidget.css';

export default function WeatherWidget() {
  const { weatherData, loading, error } = useWeather();

  if (loading) {
    return <div className="weatherWidget_loading">Ładowanie pogody...</div>;
  }

  if (error || !weatherData) {
    return <div className="weatherWidget_error">Brak danych pogodowych</div>;
  }

  const { temperature, weathercode } = weatherData;
  const icon = getWeatherIcon(weathercode);

  return (
    <div className="weatherWidget_container">
      <div className="weatherWidget_icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="weatherWidget_info">
        <div className="weatherWidget_temp">{Math.round(temperature)}°C</div>
        <div className="weatherWidget_location">Ciechanów</div>
      </div>
    </div>
  );
}
