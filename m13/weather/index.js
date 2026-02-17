const apiKey = "5d69e963f1fd054f77f12fe88d197d7b";
const searchButton=document.getElementById("search");
const weatherDiv=document.getElementById("weather");
const cityInput=document.getElementById("city");
searchButton.addEventListener("click",()=>{
    const city=cityInput.value.trim();
    if(city===""){
        weatherDiv.innerHTML="please enter your city";
        return;
    }
    getWeather(city);
});
async function getWeather(city){
    weatherDiv.innerHTML="Loading";
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        if(!response.ok){
            throw new Error("City not found");
        }
        const data=await response.json();
        displayWeather(data);
    }
    catch(error){
        weatherDiv.innerHTML=error.message
    }
}
function displayWeather(data) {
    weatherDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        
    `;
}
