const apiKey = "5d69e963f1fd054f77f12fe88d197d7b";
const searchb=document.getElementById("search");
const weatherdiv=document.getElementById("weather");
const cityinput=document.getElementById("city");
searchb.addEventListener("click",()=>{
    const city=cityinput.value.trim();
    if(city===""){
        weatherdiv.innerHTML="Please Enter a city name";
        return;
    }
    getweather(city);
});
async function getweather(city){
    weatherdiv.innerHTML="Loading...";
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        if(!response.ok){
            throw new Error("City not found");
        }
        const data=await response.json();
        displayWeather(data);
    }
    catch(error){
        weatherdiv.innerHTML=error.message;
    }
}
function displayWeather(data) {
    weatherdiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        
    `;
}
