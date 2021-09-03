const API_KEY = `864cfc9671f5a3bb9178fba1f44cbfc0`;


const searchTemperature = ( ) =>{
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    // console.log(inputFieldValue);


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputFieldValue}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data));
}

// Display Weather

const displayWeather = (data) =>{
    // console.log(data);
    // const city = document.getElementById('city');
    // city.innerText = `${data.name}`;
    setInnerText('city', data.name);
    
    setInnerText('temperature', data.main.temp);

    setInnerText('leads', data.weather[0].main);
    // console.log('Data Weather', data.weather[0].main);

    // Set Icon 
    const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.setAttribute('src', url);
}

// Set Innertext With ID 
const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}