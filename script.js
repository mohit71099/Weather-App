const apiKey = "9c02c34c76f1d294506a9c27f8d77c71";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



async function checkWeather(city) {
    const response = await fetch(apiUrl+ city +`&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else if(searchBox.value ==''){
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "none"; 
    }
    else{
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "mist"){
        weatherIcon.src = "images/mist.png"
    }
    else if(data.weather[0].main == "clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "humidity"){
        weatherIcon.src = "images/humidity.png"
    }
    else if(data.weather[0].main == "snow"){
        weatherIcon.src = "images/snow.png"
    }
    else if(data.weather[0].main == "wind"){
        weatherIcon.src = "images/wind.png"
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
}
 
 
searchBtn.addEventListener("click", function (){
   checkWeather(searchBox.value);
 });


