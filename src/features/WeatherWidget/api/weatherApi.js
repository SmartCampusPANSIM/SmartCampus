// Współrzędne dla: Gabriela Narutowicza 9, 06-400 Ciechanów
const CIECHANOW_LAT = 52.875;
const CIECHANOW_LON = 20.612;

export const fetchWeather = async () => {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${CIECHANOW_LAT}&longitude=${CIECHANOW_LON}&current_weather=true`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Błąd pobierania danych pogodowych");
    }
    const data = await response.json();
    return data.current_weather;
  } catch (error) {
    console.error("weatherApi error:", error);
    throw error;
  }
};
