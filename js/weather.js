const API_KEY = "09c29ab4082cdbd7798f86eccb77c254";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} ${data.main.temp}°C`;
        city.innerText = data.name;
    });
}

function onGeoError() {
    alert("Can't find you. no weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);