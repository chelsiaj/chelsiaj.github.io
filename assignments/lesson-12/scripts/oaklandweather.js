

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=5378538&APPID=eca4b00dc9a9f52ac793406b34029d19&units=imperial", true);
xhr.onload = function() {
    var jsonData = JSON.parse(xhr.response);
    console.log(jsonData);
    var currentTemp = document.getElementById("currentTempoakland")
    currentTemp.innerHTML = jsonData.main.temp; 

        
   
}
xhr.send ();
