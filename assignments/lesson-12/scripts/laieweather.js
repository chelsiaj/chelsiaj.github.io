var lhr = new XMLHttpRequest();
lhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=5850027&APPID=eca4b00dc9a9f52ac793406b34029d19&units=imperial", true);
lhr.onload = function() {
    var ljsonData = JSON.parse(xhr.response);
    console.log(ljsonData);
    var currentTemp = document.getElementById("currentTemplaie");
    currentTemp.innerHTML = ljsonData.main.temp; 
   
}
lhr.send ();