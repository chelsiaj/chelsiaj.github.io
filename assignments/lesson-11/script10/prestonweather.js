var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=eca4b00dc9a9f52ac793406b34029d19&units=metric", true);
xhr.onload = function() {
    var jsonData = JSON.parse(xhr.response);
    console.log(jsonData);
    var maxTemp = document.getElementById("high")
    maxTemp.innerHTML = jsonData.main.temp_max; 
    var currentTemp = document.getElementById("currently")
    currentTemp.innerHTML = jsonData.main.temp; 
    var Humidtemp= document.getElementById("moisture")
    Humidtemp.innerHTML = jsonData.main.humidity; 
    var windy= document.getElementById("speedy")
    windy.innerHTML = jsonData.wind.speed; 
}
xhr.send ();