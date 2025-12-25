const apiKey = "9d33c9b8dda5405680985125250710";

function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert("City not found");
                return;
            }

            document.getElementById("location").innerText =
                `${data.location.name}, ${data.location.country}`;

            document.getElementById("temperature").innerText =
                `Temperature: ${data.current.temp_c} °C`;

            document.getElementById("description").innerText =
                `Weather: ${data.current.condition.text}`;

            document.getElementById("humidity").innerText =
                `Humidity: ${data.current.humidity}%`;

            document.getElementById("wind").innerText =
                `Wind Speed: ${data.current.wind_kph} km/h`;
        })
        .catch(() => {
            alert("Network error");
        });
}
