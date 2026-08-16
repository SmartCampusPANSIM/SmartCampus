import * as Icons from '@icons/icons';

// Open-Meteo uses WMO Weather interpretation codes
export const getWeatherIcon = (weatherCode) => {
  // 0: Clear sky
  if (weatherCode === 0) return Icons.faSun;
  // 1, 2, 3: Mainly clear, partly cloudy, and overcast
  if (weatherCode >= 1 && weatherCode <= 3) return Icons.faCloud;
  // 45, 48: Fog and depositing rime fog
  if (weatherCode === 45 || weatherCode === 48) return Icons.faSmog;
  // 51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82: Drizzle and Rain
  if ((weatherCode >= 51 && weatherCode <= 67) || (weatherCode >= 80 && weatherCode <= 82)) return Icons.faCloudRain;
  // 71, 73, 75, 77, 85, 86: Snow fall and Snow grains
  if ((weatherCode >= 71 && weatherCode <= 77) || (weatherCode >= 85 && weatherCode <= 86)) return Icons.faSnowflake;
  // 95, 96, 99: Thunderstorm
  if (weatherCode >= 95 && weatherCode <= 99) return Icons.faBolt;

  return Icons.faCloud; // Default
};
