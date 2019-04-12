var dhr = new XMLHttpRequest();
dhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=5549222&APPID=eca4b00dc9a9f52ac793406b34029d19&units=imperial", true);
dhr.onload = function() {
    var djsonData = JSON.parse(dhr.response);
    console.log(djsonData);
    var currentTempthree = document.getElementById("currentTempdc");
    currentTempthree.innerHTML = djsonData.main.temp; 
   
}
dhr.send ();