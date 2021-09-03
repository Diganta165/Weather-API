const API_KEY = `864cfc9671f5a3bb9178fba1f44cbfc0`;


const searchTemperature = ( ) =>{
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    console.log(inputFieldValue);


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputFieldValue}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data));
}

// Display Weather

const displayWeather = (data) =>{
    console.log(data);
    const city = document.getElementById('city');
    city.innerText = `${data.name}`;
}