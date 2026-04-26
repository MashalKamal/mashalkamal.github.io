// -------------------------
// GET WEATHER (API CALL)
// -------------------------
async function getWeather(city) {
  try {
    const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);

    if (!res.ok) {
      throw new Error("API error");
    }

    return await res.json();

  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
}

// -------------------------
// SHOW WEATHER ON PAGE
// -------------------------
async function showWeather(city) {

  if (!city) return; // if nothing selected, do nothing

  const data = await getWeather(city);

  if (!data) {
    alert("Something went wrong, please try again later");
    return;
  }

  // ICON
  document.getElementById("weather-icon").src =
    data.weather?.[0]?.icon || "";

  // LOCATION
  document.getElementById("location").textContent =
    data.name || "N/A";

  // MAIN TEMP
  document.getElementById("main-temperature").textContent =
    data.main?.temp ?? "N/A";

  // FEELS LIKE
  document.getElementById("feels-like").textContent =
    data.main?.feels_like ?? "N/A";

  // HUMIDITY
  document.getElementById("humidity").textContent =
    data.main?.humidity ?? "N/A";

  // WIND SPEED
  document.getElementById("wind").textContent =
    data.wind?.speed ?? "N/A";

  // WIND GUST
  document.getElementById("wind-gust").textContent =
    data.wind?.gust ?? "N/A";

  // WEATHER TYPE
  document.getElementById("weather-main").textContent =
    data.weather?.[0]?.main || "N/A";
}

// -------------------------
// BUTTON CLICK EVENT
// -------------------------
document.getElementById("get-weather-btn").addEventListener("click", () => {
  const city = document.getElementById("city-select").value;
  showWeather(city);
});